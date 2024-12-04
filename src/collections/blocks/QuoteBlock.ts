import { Block } from 'payload'

export const QuoteBlock: Block = {
  slug: 'Quote', // required
  interfaceName: 'QuoteBlock', // optional
  fields: [
    // required
    {
      name: 'quoteHeading',
      type: 'text',
    },
    {
      name: 'quoteText',
      type: 'textarea',
    },
  ],
}
