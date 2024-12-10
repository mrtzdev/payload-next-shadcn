import { revalidatePath } from 'next/cache'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path')
  const secret = request.nextUrl.searchParams.get('secret')

  if (path && secret === `${process.env.NEXT_PREVIEW_SECRET}`) {
    console.log('revalidate')
    revalidatePath(path)
    return Response.json({ revalidated: true, now: Date.now() })
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: 'No valid path to revalidate',
  })
}
