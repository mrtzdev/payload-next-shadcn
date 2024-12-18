import { fetchPage } from '@/lib/payload/fetchPage'
import { notFound } from 'next/navigation'
import Blocks from '@/components/blocks/blocks'
import type { Metadata } from 'next'

/// todo improve seo: https://payloadcms.com/docs/plugins/seo

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params }: Props) {
  const slug = 'home'
  let page

  try {
    page = await fetchPage(slug)
  } catch (error) {
    console.error(error)
  }

  if (!page) {
    return notFound()
  }

  const { layout } = page

  return (
    <div>
      <Blocks blocks={layout} />
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = 'home'
  const page = await fetchPage(slug)

  if (!page) {
    return {
      title: 'not found',
    }
  }

  return {
    title: page.pageTitle,
  }
}
