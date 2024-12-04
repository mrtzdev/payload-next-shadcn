import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import Link from 'next/link'
import { GridCardsBlock } from '@/payload-types'

/*const cards = [
  {
    title: "Quality",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    link: "/",
  },
  {
    title: "Experience",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    link: "/",
  },
  {
    title: "Support",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    link: "/",
  },
  {
    title: "Innovation",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    link: "/",
  },
  {
    title: "Results",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    link: "/",
  },
  {
    title: "Efficiency",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    link: "",
  },
]; */

export default function GridCards(props: GridCardsBlock) {
  const { gridcards, gridCardsHeading, gridCardsText } = props

  const imageUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}`

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-screen-md mx-auto mb-10 lg:mb-12 ">
            <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6 text-center">
              {gridCardsHeading}
            </h3>
            <p className="mb-10 text-pretty text-center lg:mb-6"> {gridCardsText}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-6xl w-full mx-auto ">
            {gridcards?.map((item, index) => (
              <Card key={index}>
                {item?.link ? (
                  <>
                    <Link href={`${item?.link}`}>
                      <CardHeader className="p-0">
                        {typeof item.image === 'object' && (
                          <>
                            {item.image && (
                              <AspectRatio ratio={600 / 378}>
                                <Image
                                  src={imageUrl + item.image?.url}
                                  sizes="600px"
                                  fill
                                  style={{
                                    objectFit: 'cover',
                                  }}
                                  className="rounded-md object-contain "
                                  alt={item.image?.alt ? item.image?.alt : 'Grid Card'}
                                />
                              </AspectRatio>
                            )}
                          </>
                        )}
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="text-xl font-bold">{item.title}</div>
                        <div className="text-md text-gray-500 dark:text-gray-400">{item.text}</div>
                      </CardContent>
                    </Link>
                  </>
                ) : (
                  <>
                    <CardHeader className="p-0">
                      {typeof item.image === 'object' && (
                        <>
                          <AspectRatio ratio={600 / 378}>
                            <Image
                              src={imageUrl + item.image?.url}
                              sizes="600px"
                              fill
                              style={{
                                objectFit: 'cover',
                              }}
                              className="rounded-md object-contain "
                              alt={item.image?.alt ? item.image?.alt : 'Grid Card'}
                            />
                          </AspectRatio>
                        </>
                      )}
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="text-xl font-bold">{item.title}</div>
                      <div className="text-md text-gray-500 dark:text-gray-400">{item.text}</div>
                    </CardContent>
                  </>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
