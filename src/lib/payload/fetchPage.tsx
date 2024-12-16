import { getPayload } from 'payload'
import config from '@payload-config'

export const fetchPage = async (slug: string, preview: boolean = false) => {
  const query = {
    slug: {
      equals: slug,
    },
  }

  /// payload local
  const payload = await getPayload({ config })

  const pages = await payload.find({
    collection: 'pages',
    draft: preview,
    limit: 1000,
    overrideAccess: preview,
    pagination: false,
    where: query,
  })

  const page = pages.docs[0]

  return page
}
