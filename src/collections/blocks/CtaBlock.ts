import { Block } from 'payload'

export const CtaBlock: Block = {
  slug: 'Cta', // required
  interfaceName: 'CalltoActionBlock', // optional
  fields: [
    // required
    {
      name: 'ctaHeading', // rename this to heading
      type: 'text',
    },
    {
      name: 'ctaText',
      type: 'textarea',
    },
    {
      name: 'ctaButtons', // required
      type: 'group', // required
      interfaceName: 'Buttons', // optional
      fields: [
        // required
        {
          name: 'primaryLabel',
          type: 'text',
        },
        {
          name: 'primaryLink',
          type: 'text',
        },
        {
          name: 'secondaryLabel',
          type: 'text',
        },
        {
          name: 'secondaryLink',
          type: 'text',
        },
      ],
    },
  ],
}
