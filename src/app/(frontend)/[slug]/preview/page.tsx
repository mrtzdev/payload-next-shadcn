import { fetchPage } from '@/lib/payload/fetchPage'
import { notFound } from 'next/navigation'
import { PagePreview } from './page.client'

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ secret: string }>
}) {
  const slug = (await params).slug

  const { secret } = await searchParams
  let page

  try {
    page = await fetchPage(slug, true)
  } catch (error) {
    console.error(error)
  }

  if (!page) {
    return notFound()
  }

  if (`${process.env.NEXT_PREVIEW_SECRET}` !== secret) {
    return notFound()
  }

  return (
    <div>
      <PagePreview page={page} />
    </div>
  )
}
