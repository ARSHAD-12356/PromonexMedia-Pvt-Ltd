import type { NextRequest } from "next/server";
import { ApiError, handle, json } from "@/lib/server/http";
import { requireAdmin } from "@/lib/server/auth";
import { MAX_IMAGE_BYTES, saveImage, sniffImageType } from "@/lib/server/blogs";

export const runtime = "nodejs";

export const POST = handle(async (req: NextRequest) => {
  await requireAdmin(req);
  const length = Number(req.headers.get("content-length") || 0);
  if (length > MAX_IMAGE_BYTES + 64 * 1024) throw new ApiError("Image is too large (max 4 MB).", 413);

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    throw new ApiError("Please choose an image to upload.", 422);
  }
  const file = form.get("image");
  if (!file || typeof file === "string") throw new ApiError("Please choose an image to upload.", 422);
  if (file.size > MAX_IMAGE_BYTES) throw new ApiError("Image is too large (max 4 MB).", 413);

  const buf = Buffer.from(await file.arrayBuffer());
  const type = sniffImageType(buf);
  if (!type) throw new ApiError("Only JPG, PNG, WebP or GIF images are allowed.", 415);

  return json({ upload: { url: await saveImage(buf, type) } }, 201);
});
