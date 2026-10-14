import type { NextRequest } from "next/server";
import { imagesCol } from "@/lib/server/blogs";

export const runtime = "nodejs";

export async function GET(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  if (!/^[a-f0-9]{24}$/.test(id)) return new Response("Not found", { status: 404 });
  try {
    const img = await (await imagesCol()).findOne({ id });
    if (!img) return new Response("Not found", { status: 404 });
    return new Response(new Uint8Array(img.data.buffer), {
      headers: {
        "Content-Type": img.contentType,
        "Content-Length": String(img.size),
        "Cache-Control": "public, max-age=31536000, immutable", // ids are random and never reused
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (err) {
    console.error("[blog-images]", err);
    return new Response("Server error", { status: 500 });
  }
}
