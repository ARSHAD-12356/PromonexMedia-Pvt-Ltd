import "server-only";
import dns from "node:dns";
import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "promonex";

// Some local networks can't resolve Atlas DNS records; allow overriding DNS servers.
const dnsServers = (process.env.MONGODB_DNS_SERVERS || "").split(",").map((s) => s.trim()).filter(Boolean);
if (dnsServers.length) {
  dns.setServers(dnsServers);
  dns.promises.setServers(dnsServers); // the driver resolves SRV records via dns.promises
}

/** Resolve cluster hosts through the same DNS servers (getaddrinfo ignores dns.setServers). */
const customLookup = ((hostname: string, options: dns.LookupOptions, callback: (...args: unknown[]) => void) => {
  dns.resolve4(hostname, (err, addresses) => {
    if (err || !addresses.length) return dns.lookup(hostname, options, callback as never);
    if (options?.all) return callback(null, addresses.map((address) => ({ address, family: 4 })));
    callback(null, addresses[0], 4);
  });
}) as unknown as typeof dns.lookup;

// One client per server instance (survives dev hot reloads and warm serverless invocations)
const globalForMongo = globalThis as unknown as { _promonexMongo?: Promise<MongoClient> };

function getClient(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI is not set (add it to .env.local and to the Vercel project).");
  }
  if (!globalForMongo._promonexMongo) {
    globalForMongo._promonexMongo = new MongoClient(uri, {
      serverSelectionTimeoutMS: 15000,
      ...(dnsServers.length ? { lookup: customLookup } : {}),
    })
      .connect()
      .catch((err) => {
        globalForMongo._promonexMongo = undefined; // allow a retry on the next request
        throw err;
      });
  }
  return globalForMongo._promonexMongo;
}

let indexesReady: Promise<unknown> | null = null;

export async function getDb(): Promise<Db> {
  const db = (await getClient()).db(dbName);
  if (!indexesReady) {
    // An index that already exists with different options (e.g. from an older setup) is kept as is
    const keepExisting = (p: Promise<string>) =>
      p.catch((err: any) => {
        const code = Number(err?.code ?? err?.errorResponse?.code);
        const codeName = String(err?.codeName ?? err?.errorResponse?.codeName ?? "");
        if (code === 85 || code === 86 || codeName === "IndexOptionsConflict" || codeName === "IndexKeySpecsConflict") {
          return "existing";
        }
        throw err;
      });
    indexesReady = Promise.all([
      keepExisting(db.collection("blogs").createIndex({ id: 1 }, { unique: true })),
      keepExisting(db.collection("blogs").createIndex({ slug: 1 }, { unique: true })),
      keepExisting(db.collection("blogs").createIndex({ status: 1, publishedAt: -1 })),
      keepExisting(db.collection("admins").createIndex(
        { email: 1 },
        { unique: true, partialFilterExpression: { email: { $type: "string" } } }
      )),
      keepExisting(db.collection("admins").createIndex(
        { username: 1 },
        { unique: true, partialFilterExpression: { username: { $type: "string" } } }
      )),
      keepExisting(db.collection("blog_images").createIndex({ id: 1 }, { unique: true })),
      keepExisting(db.collection("login_attempts").createIndex({ key: 1 }, { unique: true })),
      keepExisting(db.collection("login_attempts").createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 })),
    ]).catch((err) => {
      indexesReady = null;
      console.error("[mongodb] index setup failed", err);
    });
  }
  await indexesReady;
  return db;
}
