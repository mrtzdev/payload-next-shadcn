import type { GlobalConfig, Block } from 'payload'

import { revalidateLayout } from './hooks/revalidateLayout'

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
