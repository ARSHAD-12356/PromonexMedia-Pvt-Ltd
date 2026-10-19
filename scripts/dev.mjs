import net from "node:net";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nextBin = path.resolve(__dirname, "../node_modules/next/dist/bin/next");

function checkPort(port) {
  return new Promise((resolve) => {
    // Check IPv6 (Vite and other servers bind to ::1 on Windows)
    const s6 = net.createServer();
    s6.once("error", () => resolve(false));
    s6.listen(port, "::1", () => {
      // Check IPv4 (127.0.0.1)
      const s4 = net.createServer();
      s4.once("error", () => {
        s6.close();
        resolve(false);
      });
      s4.listen(port, "127.0.0.1", () => {
        s4.close();
        s6.close();
        resolve(true);
      });
    });
  });
}

async function findAvailablePort(startPort = 3000) {
  let port = startPort;
  while (!(await checkPort(port))) {
    console.log(`Port ${port} is already in use by another server, trying ${port + 1}...`);
    port++;
  }
  return port;
}

async function main() {
  const port = await findAvailablePort(3000);
  console.log(`Starting Next.js on http://localhost:${port}\n`);

  // Direct Node execution avoids Windows batch file (.cmd) EINVAL security restrictions
  const child = spawn(
    process.execPath,
    [nextBin, "dev", "-p", String(port), ...process.argv.slice(2)],
    {
      stdio: "inherit",
    }
  );

  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });

  const cleanup = () => {
    try {
      child.kill();
    } catch {}
  };

  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);
}

main().catch((err) => {
  console.error("Failed to start dev server:", err);
  process.exit(1);
});
