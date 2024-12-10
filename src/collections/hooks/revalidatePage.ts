import type { CollectionAfterChangeHook } from 'payload'

export const revalidatePage: CollectionAfterChangeHook = async ({ doc, req }) => {
  if (doc._status === 'draft') {
    try {
      const res = await fetch(
        `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/revalidate?path=/${doc.slug}/preview?secret=${process.env.PAYLOAD_PUBLIC_PREVIEW_SECRET}`,
      )

      if (res.ok) {
        return
      } else {
        req.payload.logger.error(`Error revalidating path ${doc.slug}`)
      }
    } catch (err: unknown) {
      req.payload.logger.error(`Error hitting revalidate route for ${doc.slug}`)
    }
  } else {
    try {
      const path = doc.slug === 'home' ? '/' : `/${doc.slug}`

      const res = await fetch(`${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/revalidate?path=${path}`)

      if (res.ok) {
        req.payload.logger.info(`Revalidated path ${doc.slug}`)
      } else {
        req.payload.logger.error(`Error revalidating path ${doc.slug}`)
      }
    } catch (err: unknown) {
      req.payload.logger.error(`Error hitting revalidate route for ${doc.slug}`)
    }
  }
}
