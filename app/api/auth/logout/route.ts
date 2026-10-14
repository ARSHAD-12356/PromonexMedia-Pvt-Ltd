import type { NextRequest } from "next/server";
import { handle, json, requireSameOrigin } from "@/lib/server/http";
import { endSession } from "@/lib/server/auth";

export const runtime = "nodejs";

export const POST = handle(async (req: NextRequest) => {
  requireSameOrigin(req);
  const res = json({ loggedOut: true });
  endSession(res);
  return res;
});
