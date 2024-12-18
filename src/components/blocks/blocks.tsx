/*
Render all blocks components from payload 
*/

import React, { Fragment } from 'react'
import { Page } from '@/payload-types'
import Hero from './hero'
import Cta from './cta'
import Faq from './faq'
import Features from './features'
import GridCards from './grid-cards'
import Logos from './logos'
import Quote from './quote'
import RichTextBlock from './rich-text'

const Blocks = ({ blocks }: { blocks: Page['layout'] }) => {
  const blockComponents: any = {
    Hero: Hero,
    Cta: Cta,
    Faq: Faq,
    Features: Features,
    GridCards: GridCards,
    Logos: Logos,
    Quote: Quote,
    RichText: RichTextBlock,
  }

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block) => {
          const { blockType } = block
          if (blockType) {
            const Block = blockComponents[blockType]
            if (Block) {
              return <Block {...block} key={block.id} />
            } else {
              console.log('Block type not supported')
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}

export default Blocks
