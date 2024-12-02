import type { GlobalConfig, Block } from 'payload'

/// Todo add revalidate function here

const revalidateLayout = async ({ doc, req }) => {
  try {
    const res = await fetch(`${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/revalidate/layout`)

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

/// Menu Block
const MenuBlockFooter: Block = {
  slug: 'submenublockfooter', // required
  interfaceName: 'SubmenuFooter', // optional
  fields: [
    // required
    {
      name: 'submenufooter',
      type: 'array',
      label: 'Submenu Item',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'label',
          type: 'text',
        },

        {
          name: 'link',
          type: 'relationship',
          relationTo: ['pages'],
        },
      ],
    },
  ],
}

export const Footer: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItemsFooter',
      fields: [
        {
          name: 'label',
          type: 'text',
        },

        {
          name: 'link',
          type: 'relationship',
          relationTo: ['pages'],
        },

        {
          name: 'menu', // required
          type: 'blocks', // required
          minRows: 1,
          maxRows: 1,
          blocks: [
            // required
            MenuBlockFooter,
          ],
        },
      ],
      maxRows: 10,
      type: 'array',
    },
    {
      name: 'logo',
      type: 'upload', // required
      relationTo: 'media', // required
    },
    {
      name: 'copyrightNotice',
      type: 'text',
    },
  ],
  slug: 'footer',
  hooks: {
    afterChange: [revalidateLayout],
  },
}
