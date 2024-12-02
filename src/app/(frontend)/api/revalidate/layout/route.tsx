import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

/// todo add secret here

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");

  console.log(path);

  revalidatePath("/", "layout");
  return Response.json({ revalidated: true, now: Date.now() });
}
