import type { NextRequest } from "next/server";
import { ApiError, handle, json } from "@/lib/server/http";
import { blogToApi, blogsCol, publishedFilter, slugify } from "@/lib/server/blogs";
import { isIndexableBlogSlug } from "@/lib/blogSlug";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const GET = handle(async (_req: NextRequest, ctx: { params: Promise<{ slug: string }> }) => {
  const slug = slugify(decodeURIComponent((await ctx.params).slug));
  const doc = isIndexableBlogSlug(slug)
    ? await (await blogsCol()).findOne({ slug, ...publishedFilter() })
    : null;
  if (!doc) throw new ApiError("Blog not found.", 404);
  return json({ blog: blogToApi(doc) });
});
