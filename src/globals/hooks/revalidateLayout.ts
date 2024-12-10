import type { GlobalAfterChangeHook } from 'payload'

export const revalidateLayout: GlobalAfterChangeHook = async ({ doc, req }) => {
  try {
    const res = await fetch(
      `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/revalidate/layout&secret=${process.env.PAYLOAD_PUBLIC_PREVIEW_SECRET}`,
    )

    if (res.ok) {
      req.payload.logger.info(`Revalidated path /api/revalidate/layout`)
      return
    } else {
      req.payload.logger.error(`Error revalidating path ${doc.slug}`)
    }
  } catch (err: unknown) {
    req.payload.logger.error(`Error hitting revalidate route for ${doc.slug}`)
  }
}
