import { fetchPage } from "@/lib/payload/fetchPage";
import { notFound } from "next/navigation";
import { PagePreview } from "./page.client";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { secret: string };
}) {
  const slug = params.slug;
  console.log(searchParams);
  const { secret } = searchParams;
  let page;

  try {
    page = await fetchPage(slug, true);
  } catch (error) {
    console.error(error);
  }

  if (!page) {
    return notFound();
  }

  if (`${process.env.PREVIEW_SECRET}` !== secret) {
    return notFound();
  }

  return (
    <div>
      <PagePreview page={page} />
    </div>
  );
}
