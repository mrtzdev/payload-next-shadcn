import { RichText } from "@/payload-types";
import React, { Fragment } from "react";

export default function RichTextBlock(props: RichText) {
  const { richTextField, richTextHeading } = props;
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-screen-lg">
          {richTextHeading && (
            <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {richTextHeading}
            </h3>
          )}
        </div>
      </section>
    </>
  );
}
