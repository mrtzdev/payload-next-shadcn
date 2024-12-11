import { getPayload } from 'payload'
import config from '@payload-config'

export const fetchPages = async (preview: boolean = false) => {
  /// payload local
  const payload = await getPayload({ config })

  const data = await payload.find({
    collection: 'pages',
    draft: preview,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
  })

  const pages = data.docs

  return pages
}
