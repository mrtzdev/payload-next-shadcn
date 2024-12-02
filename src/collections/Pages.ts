import { Block, CollectionConfig } from 'payload'
import { revalidatePage } from './hooks/revalidatePage'

//// Blocks

const QuoteBlock: Block = {
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
      type: 'text',
    },
  ],
}

const HeroBlock: Block = {
  slug: 'Hero', // required
  interfaceName: 'HeroBlock', // optional
  fields: [
    // required
    {
      name: 'heroHeading', // rename this to heading
      type: 'text',
    },
    {
      name: 'heroText',
      type: 'textarea',
    },
    {
      name: 'heroImage', // required
      type: 'upload', // required
      relationTo: 'media', // required
    },
    {
      name: 'heroButtons', // required
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

const CtaBlock: Block = {
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

const FaqBlock: Block = {
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

const FeaturesBlock: Block = {
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

const GridCardsBlock: Block = {
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

const LogosBlock: Block = {
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

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'pageTitle',
    livePreview: {
      url: ({ data }) =>
        `${process.env.PAYLOAD_PUBLIC_SITE_URL}/${data.slug}/preview?secret=${process.env.PAYLOAD_PUBLIC_PREVIEW_SECRET}`,
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
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        HeroBlock,
        CtaBlock,
        FaqBlock,
        FeaturesBlock,
        GridCardsBlock,
        QuoteBlock,
        LogosBlock,
      ],
    },
  ],
  hooks: {
    afterChange: [revalidatePage],
  },
}

//// Blocks
