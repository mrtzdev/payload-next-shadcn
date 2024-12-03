import { Block } from 'payload'

export const GridCardsBlock: Block = {
  slug: 'GridCards', // required
  interfaceName: 'GridCardsBlock', // optional

  fields: [
    // required
    {
      name: 'gridCardsHeading',
      type: 'text',
    },
    {
      name: 'gridCardsText',
      type: 'textarea',
    },
    {
      name: 'gridcards',
      type: 'array',
      label: 'Grid Cards',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'image', // required
          type: 'upload', // required
          relationTo: 'media', // required
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
        },
        {
          name: 'text',
          type: 'textarea',
        },
      ],
    },
  ],
}
