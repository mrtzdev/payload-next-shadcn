import { getPayload } from 'payload'
import config from '@payload-config'

export const fetchHeader = async () => {
  const payload = await getPayload({ config })

  const data = await payload.findGlobal({
    slug: 'header', // required
    depth: 2,
    fallbackLocale: false,
    overrideAccess: false,
  })
  const header = data

  return header
}

export const fetchFooter = async () => {
  const payload = await getPayload({ config })

  const data = await payload.findGlobal({
    slug: 'footer', // required
    depth: 2,
    fallbackLocale: false,
    overrideAccess: false,
  })

  const footer = data

  return footer
}
