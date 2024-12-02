import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CalltoActionBlock } from '@/payload-types'

export default function Cta(props: CalltoActionBlock) {
  const { ctaHeading, ctaText, ctaButtons } = props
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center rounded-lg bg-accent p-8 text-center md:rounded-xl lg:p-16">
            {ctaHeading && (
              <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                {ctaHeading}
              </h3>
            )}
            {ctaText && (
              <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">{ctaText}</p>
            )}

            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
              {ctaButtons?.secondaryLink && (
                <Button variant="outline" className="w-full sm:w-auto font-bold" asChild>
                  <Link href={`${ctaButtons?.secondaryLink}`}>{ctaButtons?.secondaryLabel}</Link>
                </Button>
              )}

              {ctaButtons?.primaryLink && (
                <Button className="w-full sm:w-auto font-bold" asChild>
                  <Link href={`${ctaButtons?.primaryLink}`}>{ctaButtons?.primaryLabel}</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
