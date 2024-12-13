import Image from 'next/image'

import { FeaturesBlock } from '@/payload-types'

export default function Features(props: FeaturesBlock) {
  const { featuresHeading, featuresText, features } = props

  const imageUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}`

  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="mb-10 md:mb-20">
            {featuresHeading && (
              <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
                {featuresHeading}
              </h2>
            )}

            {featuresText && (
              <p className="mb-10 text-pretty text-center lg:mb-6"> {featuresText}</p>
            )}
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {features?.map((reason) => (
              <div key={reason.id} className="flex flex-col">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                  {typeof reason.featureIcon === 'object' && (
                    <>
                      <Image
                        src={imageUrl + reason.featureIcon?.url}
                        width={24}
                        height={24}
                        alt={reason.featureIcon?.alt ? reason.featureIcon?.alt : 'Icon Feature'}
                        className="size-6"
                      />
                    </>
                  )}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
