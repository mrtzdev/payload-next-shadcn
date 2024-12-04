import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { QuoteBlock } from '@/payload-types'

export default function Quote(props: QuoteBlock) {
  const { quoteHeading, quoteText } = props
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
            {quoteHeading && (
              <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                {quoteHeading}
              </h3>
            )}
            {quoteText && <p className="italic mb-8 max-w-3xl  lg:text-xl">{quoteText}</p>}
          </div>
        </div>
      </section>
    </>
  )
}
