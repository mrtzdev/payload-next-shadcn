import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { FaqBlock } from '@/payload-types'

/*const faqstest = [
  {
    question: "What is a FAQ?",
    answer:
      "A FAQ is a list of frequently asked questions and answers on a particular topic.",
  },
  {
    question: "What is the purpose of a FAQ?",
    answer:
      "The purpose of a FAQ is to provide answers to common questions and help users find the information they need quickly and easily.",
  },
  {
    question: "How do I create a FAQ?",
    answer:
      "To create a FAQ, you need to compile a list of common questions and answers on a particular topic and organize them in a clear and easy-to-navigate format.",
  },
  {
    question: "What are the benefits of a FAQ?",
    answer:
      "The benefits of a FAQ include providing quick and easy access to information, reducing the number of support requests, and improving the overall user experience.",
  },
]; */

export default function Faq(props: FaqBlock) {
  const { faqHeading, faqText, faqs } = props
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-screen-md">
          <h3 className="mb-10 text-pretty text-2xl font-bold lg:text-4xl text-center">
            {faqHeading}
          </h3>
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
