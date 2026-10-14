import type { NextRequest } from "next/server";
import { handle, json, readJson } from "@/lib/server/http";
import { requireAdmin } from "@/lib/server/auth";
import {
  LIST_PROJECTION,
  assertSlugAvailable,
  blogToApi,
  blogsCol,
  newBlogId,
  parseBlogInput,
  type BlogDoc,
} from "@/lib/server/blogs";

export const runtime = "nodejs";

export const GET = handle(async (req: NextRequest) => {
  await requireAdmin(req);
  const docs = await (await blogsCol())
    .find({}, { projection: LIST_PROJECTION })
    .sort({ publishedAt: -1, createdAt: -1 })
    .toArray();
  return json({ blogs: docs.map((d) => blogToApi(d, false)) });
});

export const POST = handle(async (req: NextRequest) => {
  const admin = await requireAdmin(req);
  const input = parseBlogInput(await readJson(req), admin);
  await assertSlugAvailable(input.slug);
  if (input.status === "published" && !input.publishedAt) input.publishedAt = new Date();
  const now = new Date();
  const doc: BlogDoc = { ...input, id: newBlogId(), authorId: admin._id.toHexString(), createdAt: now, updatedAt: now };
  await (await blogsCol()).insertOne(doc);
  return json({ blog: blogToApi(doc) }, 201);
});
