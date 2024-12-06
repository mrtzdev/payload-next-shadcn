import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

export default function RichTextBlock(props: any) {
  const { richText } = props

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-screen-md rich-text-block">
          <RichText data={richText} />
        </div>
      </section>
    </>
  )
}
