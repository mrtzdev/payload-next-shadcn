import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

import { fetchFooter } from "@/lib/payload/fetchGlobals";
import { Footer } from "@/payload-types";

/// todo add link and text footer

/*const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
    ],
  },
];*/

export default async function FooterPage() {
  const imageUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}`;

  let data: Footer | null = null;
  try {
    data = await fetchFooter();
  } catch (error) {
    console.error(error);
  }

  if (!data) {
    return <></>;
  }

  const { logo, navItemsFooter, copyrightNotice } = data;

  return (
    <>
      <footer>
        <div className="container container mx-auto px-4">
          <Separator className="my-14" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {navItemsFooter?.map((navMenuItem) => (
              <div key={navMenuItem.id}>
                {typeof navMenuItem?.link?.value === "object" ? (
                  <h3 className="mb-4 font-bold">
                    <Link href={`/pages/${navMenuItem?.link?.value.slug}`}>
                      {navMenuItem.label}
                    </Link>
                  </h3>
                ) : (
                  <h3 className="mb-4 font-bold">{navMenuItem.label}</h3>
                )}

                {navMenuItem.menu?.map((submenuItem) => (
                  <Fragment key={submenuItem.id}>
                    <ul className="space-y-4 text-muted-foreground">
                      {submenuItem?.submenufooter?.map((submenuItem) => (
                        <li
                          key={submenuItem.id}
                          className="font-medium hover:text-primary"
                        >
                          {typeof submenuItem?.link?.value === "object" && (
                            <Link
                              href={`/pages/${submenuItem?.link?.value.slug}`}
                            >
                              {submenuItem.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </Fragment>
                ))}
              </div>
            ))}
          </div>
          <Separator className="my-10" />
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center my-10 ">
            {typeof logo === "object" && (
              <>
                <Image
                  src={imageUrl + logo?.url}
                  width={logo?.width ? logo?.width : 200}
                  height={logo?.height ? logo?.height : 200}
                  alt={logo?.alt ? logo?.alt : "Logo"}
                  className="max-w-32"
                />
              </>
            )}
            <p className="text-sm text-muted-foreground  ">{copyrightNotice}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
