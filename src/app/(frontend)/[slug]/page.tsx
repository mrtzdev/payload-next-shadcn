import { fetchPage } from '@/lib/payload/fetchPage'
import { fetchPages } from '@/lib/payload/fetchPages'
import { notFound } from 'next/navigation'
import Blocks from '@/components/blocks/blocks'
import type { Metadata } from 'next'
import type { Page } from '@/payload-types'

export async function generateStaticParams() {
  let pages: Page[] | undefined = undefined

  try {
    pages = await fetchPages()
  } catch (error) {
    console.error(error)
  }

  if (!pages || pages.length === 0) {
    return [{ slug: 'not-found' }]
  }

  const params = pages
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug
  let page: Page | undefined = undefined

  if (slug === 'home') {
    return notFound()
  }

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
  const slug = (await params).slug
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
