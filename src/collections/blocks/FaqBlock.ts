import { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'Faq', // required
  interfaceName: 'FaqBlock', // optional

  fields: [
    // required
    {
      name: 'faqHeading',
      type: 'text',
    },
    {
      name: 'faqText',
      type: 'textarea',
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'Faq',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'question',
          type: 'text',
        },
        {
          name: 'answer',
          type: 'textarea',
        },
      ],
    },
  ],
}
