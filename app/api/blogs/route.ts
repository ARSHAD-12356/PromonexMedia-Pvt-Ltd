import type { NextRequest } from "next/server";
import { handle, json } from "@/lib/server/http";
import { LIST_PROJECTION, blogToApi, blogsCol, publishedFilter } from "@/lib/server/blogs";
import { NON_INDEXABLE_TEST_BLOG_SLUGS } from "@/lib/blogSlug";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const GET = handle(async (req: NextRequest) => {
  const limit = Math.max(1, Math.min(100, Number(req.nextUrl.searchParams.get("limit")) || 100));
  const docs = await (await blogsCol())
    .find(
      { ...publishedFilter(), slug: { $nin: [...NON_INDEXABLE_TEST_BLOG_SLUGS] } },
      { projection: LIST_PROJECTION }
    )
    .sort({ publishedAt: -1, createdAt: -1 })
    .limit(limit)
    .toArray();
  return json({ blogs: docs.map((d) => blogToApi(d, false)) });
});
