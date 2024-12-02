"use client";
import { useLivePreview } from "@payloadcms/live-preview-react";
import { Page } from "@/payload-types";

import Blocks from "@/components/blocks/blocks";

// Fetch the page in a server component, pass it to the client component, then thread it through the hook
// The hook will take over from there and keep the preview in sync with the changes you make
// The `data` property will contain the live data of the document

export const PagePreview: React.FC<{ page: Page | null | undefined }> = ({
  page,
}) => {
  const { data } = useLivePreview({
    serverURL: process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL || "",
    depth: 2,
    initialData: page,
  });

  return (
    <>
      <Blocks blocks={data?.layout} />
    </>
  );
};
