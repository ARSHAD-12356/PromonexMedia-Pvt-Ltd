import type { NextRequest } from "next/server";
import { ApiError, handle, json, readJson } from "@/lib/server/http";
import { requireAdmin } from "@/lib/server/auth";
import {
  assertSlugAvailable,
  blogToApi,
  blogsCol,
  deleteImageIfUnused,
  findBlog,
  parseBlogInput,
} from "@/lib/server/blogs";

export const runtime = "nodejs";

type Ctx = { params: Promise<{ id: string }> };

async function load(ctx: Ctx) {
  const blog = await findBlog((await ctx.params).id);
  if (!blog) throw new ApiError("Blog not found.", 404);
  return blog;
}

export const GET = handle(async (req: NextRequest, ctx: Ctx) => {
  await requireAdmin(req);
  return json({ blog: blogToApi(await load(ctx)) });
});

export const PUT = handle(async (req: NextRequest, ctx: Ctx) => {
  const admin = await requireAdmin(req);
  const existing = await load(ctx);
  const input = parseBlogInput(await readJson(req), admin);
  await assertSlugAvailable(input.slug, existing.id);
  if (!input.publishedAt) {
    input.publishedAt = existing.publishedAt ?? (input.status === "published" ? new Date() : null);
  }
  const updated = await (await blogsCol()).findOneAndUpdate(
    { id: existing.id },
    { $set: { ...input, updatedAt: new Date() } },
    { returnDocument: "after" }
  );
  if (!updated) throw new ApiError("Blog not found.", 404);
  if (existing.image && existing.image !== input.image) await deleteImageIfUnused(existing.image); // replaced image
  return json({ blog: blogToApi(updated) });
});

export const DELETE = handle(async (req: NextRequest, ctx: Ctx) => {
  await requireAdmin(req);
  const existing = await load(ctx);
  await (await blogsCol()).deleteOne({ id: existing.id });
  await deleteImageIfUnused(existing.image);
  return json({ deleted: true });
});
