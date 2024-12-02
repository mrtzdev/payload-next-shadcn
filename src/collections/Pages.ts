import { Block, CollectionConfig } from 'payload'

const revalidatePage = async ({ doc, req }) => {
  if (doc._status === 'draft') {
    try {
      const res = await fetch(
        `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/revalidate?path=/pages/${doc.slug}/preview?secret=${process.env.PAYLOAD_PUBLIC_PREVIEW_SECRET}`,
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
      const res = await fetch(
        `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/revalidate?path=/pages/${doc.slug}`,
      )

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

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'pageTitle',
    livePreview: {
      url: ({ data }) =>
        `${process.env.PAYLOAD_PUBLIC_SITE_URL}/pages/${data.slug}/preview?secret=${process.env.PAYLOAD_PUBLIC_PREVIEW_SECRET}`,
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 1500,
      },
    },
  },
  access: {
    read: () => {
      return true
    },
  },

  fields: [
    {
      name: 'pageTitle', // required
      type: 'text', // required
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      unique: true,
      required: true,
      hooks: {
        beforeValidate: [
          ({ value }) => {
            if (!value) return

            return value
              .trim()
              .replace(/ /g, '-')
              .replace(/[^\w-]+/g, '')
              .toLowerCase()
          },
        ],
      },
    },
  ],
  hooks: {
    afterChange: [revalidatePage],
  },
}
