import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroBlock } from "@/payload-types";

export default function Hero(props: HeroBlock) {
  const { heroHeadline, heroText, heroImage, heroButtons } = props;
  const imagePath =
    typeof heroImage === "object" && heroImage?.sizes?.tablet?.url;
  const imageUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}${imagePath}`;

  return (
    <>
      <section className="py-2 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              {heroHeadline && (
                <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                  {heroHeadline}
                </h1>
              )}
              {heroText && (
                <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                  {heroText}
                </p>
              )}

              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                {heroButtons?.primaryLabel && (
                  <>
                    <Button className="w-full sm:w-auto font-bold" asChild>
                      <Link href={`${heroButtons?.primaryLink}`}>
                        {heroButtons?.primaryLabel}
                      </Link>
                    </Button>
                  </>
                )}
                {heroButtons?.secondaryLabel && (
                  <>
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto font-bold"
                      asChild
                    >
                      <Link href={`${heroButtons?.secondaryLink}`}>
                        {heroButtons?.secondaryLabel}
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>

            {imagePath && (
              <div className="max-h-120 w-full rounded-md object-cover">
                <Image
                  src={imageUrl}
                  alt="placeholder hero"
                  sizes="100vw"
                  // Make the image display full width
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={
                    heroImage?.sizes?.tablet?.width
                      ? heroImage.sizes.tablet.width
                      : 300
                  }
                  height={
                    heroImage?.sizes?.tablet?.height
                      ? heroImage.sizes.tablet.height
                      : 200
                  }
                  className="rounded-md"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
