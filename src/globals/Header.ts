import type { GlobalConfig, Block } from 'payload'

import { revalidateLayout } from './hooks/revalidateLayout'

/// Menu Block
const MenuBlock: Block = {
  slug: 'submenublock', // required
  interfaceName: 'Submenu', // optional
  fields: [
    // required
    {
      name: 'submenu',
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
        {
          name: 'subenuIcon', // required
          type: 'upload', // required
          relationTo: 'media', // required
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}

export const Header: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload', // required
      relationTo: 'media', // required
    },
    {
      name: 'navItems',
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
            MenuBlock,
          ],
        },
      ],
      maxRows: 10,
      type: 'array',
    },

    {
      name: 'primaryButtonLabel',
      type: 'text',
    },
    {
      name: 'primaryButtonLink',
      type: 'text',
    },
    {
      name: 'secondaryButtonLabel',
      type: 'text',
    },
    {
      name: 'secondaryButtonLink',
      type: 'text',
    },
  ],
  slug: 'header',
  hooks: {
    afterChange: [revalidateLayout],
  },
}
