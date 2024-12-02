import { fetchHeader } from "@/lib/payload/fetchGlobals";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/payload-types";
import { Fragment } from "react";
import { Menu } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default async function HeaderPage() {
  const imageUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL}`;

  let data: Header | null = null;
  try {
    data = await fetchHeader();
  } catch (error) {
    console.error(error);
  }

  if (!data) {
    return <></>;
  }

  const {
    logo,
    navItems,
    secondaryButtonLabel,
    secondaryButtonLink,
    primaryButtonLabel,
    primaryButtonLink,
  } = data;

  return (
    <>
      <section className="py-5">
        <div className="container mx-auto px-4">
          <nav className="hidden justify-between lg:flex">
            <div className="flex items-center gap-6">
              <Link href="/">
                <>
                  <div className="flex items-center gap-2">
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
                  </div>
                </>
              </Link>
              <div className="flex items-center">
                <Link
                  className={cn(
                    "text-muted-foreground",
                    navigationMenuTriggerStyle,
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "font-semibold"
                  )}
                  href="/"
                >
                  Home
                </Link>

                <NavigationMenu>
                  <NavigationMenuList>
                    {navItems?.map((navMenuItem) => (
                      <NavigationMenuItem
                        key={navMenuItem.id}
                        className="text-muted-foreground"
                      >
                        {navMenuItem?.menu?.length === 0 ? (
                          <>
                            {typeof navMenuItem.link?.value === "object" && (
                              <Link
                                className={cn(
                                  "text-muted-foreground",
                                  navigationMenuTriggerStyle,
                                  buttonVariants({
                                    variant: "ghost",
                                  }),
                                  "font-semibold"
                                )}
                                href={`/pages/${navMenuItem.link?.value?.slug}`}
                              >
                                {navMenuItem.label}
                              </Link>
                            )}
                          </>
                        ) : (
                          <NavigationMenuTrigger>
                            <span className="font-semibold">
                              {navMenuItem.label}
                            </span>
                          </NavigationMenuTrigger>
                        )}

                        {navMenuItem?.menu?.length !== 0 && (
                          <NavigationMenuContent>
                            <ul className="w-80 p-3">
                              <>
                                {navMenuItem?.menu?.map((submenuItem) => (
                                  <Fragment key={submenuItem.id}>
                                    {submenuItem?.submenu?.map(
                                      (submenuItem) => (
                                        <li key={submenuItem.id}>
                                          {typeof submenuItem?.link?.value ===
                                            "object" && (
                                            <Link
                                              className={cn(
                                                "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                              )}
                                              href={`/pages/${submenuItem?.link?.value.slug}`}
                                            >
                                              {typeof submenuItem?.subenuIcon ===
                                                "object" && (
                                                <>
                                                  <Image
                                                    src={
                                                      imageUrl +
                                                      submenuItem?.subenuIcon
                                                        ?.url
                                                    }
                                                    width={24}
                                                    height={24}
                                                    alt={
                                                      submenuItem?.subenuIcon
                                                        ?.alt
                                                        ? submenuItem
                                                            ?.subenuIcon?.alt
                                                        : "Icon Menu"
                                                    }
                                                    className="size-5"
                                                  />
                                                </>
                                              )}
                                              <div>
                                                <div className="text-sm font-semibold">
                                                  {submenuItem.label}
                                                </div>
                                                <p className="text-sm leading-snug text-muted-foreground">
                                                  {submenuItem.description}
                                                </p>
                                              </div>
                                            </Link>
                                          )}
                                        </li>
                                      )
                                    )}
                                  </Fragment>
                                ))}{" "}
                              </>
                            </ul>
                          </NavigationMenuContent>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            <div className="flex gap-2">
              {secondaryButtonLabel && (
                <Button variant={"outline"} asChild>
                  <Link href={`${secondaryButtonLink}`}>
                    {secondaryButtonLabel}
                  </Link>
                </Button>
              )}

              {primaryButtonLabel && (
                <Button asChild>
                  <Link href={`${primaryButtonLink}`}>
                    {primaryButtonLabel}
                  </Link>
                </Button>
              )}
            </div>
          </nav>
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {typeof logo === "object" && (
                  <>
                    <Link href="/">
                      <Image
                        src={imageUrl + logo?.url}
                        width={logo?.width ? logo?.width : 200}
                        height={logo?.height ? logo?.height : 200}
                        alt={logo?.alt ? logo?.alt : "Logo"}
                        className="max-w-32"
                      />
                    </Link>
                  </>
                )}
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant={"outline"} size={"icon"}>
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex items-center gap-2">
                        <span className="invisible text-xl font-bold">
                          Shadcn Blocks
                        </span>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-8 flex flex-col gap-4">
                    {navItems?.map((navMenuItem) => (
                      <Fragment key={navMenuItem.id}>
                        {navMenuItem?.menu?.length === 0 ? (
                          <>
                            {typeof navMenuItem.link?.value === "object" && (
                              <SheetClose asChild>
                                <Link
                                  className="font-semibold"
                                  href={`/pages/${navMenuItem.link?.value?.slug}`}
                                >
                                  {navMenuItem.label}
                                </Link>
                              </SheetClose>
                            )}
                          </>
                        ) : (
                          <>
                            <>
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                              >
                                <>
                                  <AccordionItem
                                    value="products"
                                    className="border-b-0"
                                  >
                                    <AccordionTrigger className="mb-0 py-0 font-semibold hover:no-underline">
                                      {navMenuItem.label}
                                    </AccordionTrigger>
                                    {navMenuItem?.menu?.length !== 0 && (
                                      <AccordionContent className="mt-2">
                                        {navMenuItem?.menu?.map(
                                          (submenuItem) => (
                                            <Fragment key={navMenuItem.id}>
                                              {submenuItem?.submenu?.map(
                                                (submenuItem) => (
                                                  <Fragment
                                                    key={submenuItem.id}
                                                  >
                                                    <SheetClose asChild>
                                                      {typeof submenuItem?.link
                                                        ?.value ===
                                                        "object" && (
                                                        <Link
                                                          key={submenuItem.id}
                                                          className={cn(
                                                            "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                          )}
                                                          href={`/pages/${submenuItem?.link?.value.slug}`}
                                                        >
                                                          {typeof submenuItem?.subenuIcon ===
                                                            "object" && (
                                                            <>
                                                              <Image
                                                                src={
                                                                  imageUrl +
                                                                  submenuItem
                                                                    ?.subenuIcon
                                                                    ?.url
                                                                }
                                                                width={24}
                                                                height={24}
                                                                alt={
                                                                  submenuItem
                                                                    ?.subenuIcon
                                                                    ?.alt
                                                                    ? submenuItem
                                                                        ?.subenuIcon
                                                                        ?.alt
                                                                    : "Icon Menu"
                                                                }
                                                                className="size-5"
                                                              />
                                                            </>
                                                          )}
                                                          <div>
                                                            <div className="text-sm font-semibold">
                                                              {
                                                                submenuItem.label
                                                              }
                                                            </div>
                                                            <p className="text-sm leading-snug text-muted-foreground">
                                                              {
                                                                submenuItem.description
                                                              }
                                                            </p>
                                                          </div>
                                                        </Link>
                                                      )}
                                                    </SheetClose>
                                                  </Fragment>
                                                )
                                              )}
                                            </Fragment>
                                          )
                                        )}
                                      </AccordionContent>
                                    )}
                                  </AccordionItem>
                                </>
                              </Accordion>
                            </>
                          </>
                        )}
                      </Fragment>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="mt-2 flex flex-col gap-3">
                      {primaryButtonLabel && (
                        <Button asChild>
                          <Link href={`${primaryButtonLink}`}>
                            {primaryButtonLabel}
                          </Link>
                        </Button>
                      )}
                      <Button variant={"outline"} asChild>
                        <Link href={`${secondaryButtonLink}`}>
                          {secondaryButtonLabel}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
