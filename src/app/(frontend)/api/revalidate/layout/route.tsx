import { revalidatePath } from 'next/cache'
import type { NextRequest } from 'next/server'

/// todo add secret here

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  if (secret === `${process.env.NEXT_PREVIEW_SECRET}`) {
    revalidatePath('/', 'layout')
    return Response.json({ revalidated: true, now: Date.now() })
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: 'No valid path to revalidate',
  })
}
