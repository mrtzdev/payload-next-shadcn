import { Block } from 'payload'

export const LogosBlock: Block = {
  slug: 'Logos',
  interfaceName: 'LogosBlock',

  fields: [
    // required
    {
      name: 'logosHeading',
      type: 'text',
    },
    {
      name: 'logosText',
      type: 'textarea',
    },
    {
      name: 'logos',
      type: 'array',
      label: 'Logos',
      minRows: 1,
      maxRows: 20,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
