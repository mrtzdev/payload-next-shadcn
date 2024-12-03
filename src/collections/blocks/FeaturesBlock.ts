import { Block } from 'payload'
export const FeaturesBlock: Block = {
  slug: 'Features', // required
  interfaceName: 'FeaturesBlock', // optional

  fields: [
    // required
    {
      name: 'featuresHeading',
      type: 'text',
    },
    {
      name: 'featuresText',
      type: 'textarea',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'featureIcon', // required
          type: 'upload', // required
          relationTo: 'media', // required
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}
