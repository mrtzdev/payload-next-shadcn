import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { FaqBlock } from '@/payload-types'

export default function Faq(props: FaqBlock) {
  const { faqHeading, faqText, faqs } = props
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-screen-md">
          {faqHeading && (
            <h3 className="mb-10 text-pretty text-2xl font-bold lg:text-4xl text-center">
              {faqHeading}
            </h3>
          )}
          <p className="mb-10 text-pretty"> {faqText}</p>
          {faqs?.map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="hover:text-foreground/60hover:no-underline font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{faq.answer} </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
    </>
  )
}
