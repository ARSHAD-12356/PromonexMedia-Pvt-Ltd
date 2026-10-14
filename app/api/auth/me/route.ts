import type { NextRequest } from "next/server";
import { ApiError, handle, json } from "@/lib/server/http";
import { currentAdmin, toPublicAdmin } from "@/lib/server/auth";

export const runtime = "nodejs";

export const GET = handle(async (req: NextRequest) => {
  const current = await currentAdmin(req);
  if (!current) throw new ApiError("Not authenticated.", 401);
  return json({ admin: toPublicAdmin(current.admin), csrfToken: current.csrf });
});
