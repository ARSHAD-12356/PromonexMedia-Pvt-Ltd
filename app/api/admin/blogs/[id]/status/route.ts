import type { NextRequest } from "next/server";
import { ApiError, handle, json, readJson } from "@/lib/server/http";
import { requireAdmin } from "@/lib/server/auth";
import { blogToApi, blogsCol, findBlog } from "@/lib/server/blogs";

export const runtime = "nodejs";

type Ctx = { params: Promise<{ id: string }> };

const setStatus = handle(async (req: NextRequest, ctx: Ctx) => {
  await requireAdmin(req);
  const existing = await findBlog((await ctx.params).id);
  if (!existing) throw new ApiError("Blog not found.", 404);
  const status = String((await readJson(req)).status || "").toLowerCase();
  if (status !== "published" && status !== "draft") {
    throw new ApiError('Status must be "published" or "draft".', 422);
  }
  const publishedAt = status === "published" && !existing.publishedAt ? new Date() : existing.publishedAt;
  const updated = await (await blogsCol()).findOneAndUpdate(
    { id: existing.id },
    { $set: { status, publishedAt, updatedAt: new Date() } },
    { returnDocument: "after" }
  );
  if (!updated) throw new ApiError("Blog not found.", 404);
  return json({ blog: blogToApi(updated) });
});

export const PATCH = setStatus;
export const POST = setStatus;
