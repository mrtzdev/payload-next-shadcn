import { LogosBlock } from '@/payload-types'
import Image from 'next/image'

const imageUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}`

export default function Logos(props: LogosBlock) {
  const { logosHeading, logosText, logos } = props
  return (
    <>
      <section className="py-20">
        <div className="container flex flex-col items-center text-center mx-auto px-4">
          {logosHeading && (
            <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {logosHeading}
            </h3>
          )}
          {logosText && (
            <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">{logosText}</p>
          )}
        </div>
        <div className="pt-5 md:pt-10 lg:pt-10">
          <div className="relative mx-auto flex items-center flex-wrap  justify-center lg:max-w-7xl">
            {logos?.map((item) => (
              <div
                key={item.id}
                className="basis-1/3 pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 my-5"
              >
                <div className="mx-12 flex items-center justify-center">
                  {typeof item.logo === 'object' && (
                    <>
                      {item.logo?.url && (
                        <Image
                          src={imageUrl + item.logo?.url}
                          width={item.logo?.width ? item.logo?.width : 200}
                          height={item.logo?.height ? item.logo?.height : 200}
                          alt={item.logo?.alt ? item.logo?.alt : 'Logo'}
                          className="w-40 my-auto"
                        />
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
