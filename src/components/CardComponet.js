

import { Box,Card as RadixCard,Inset,Text,Strong } from '@radix-ui/themes'
import React from 'react'

function CardComponet({title,poster}) {

  return (
    <Box maxWidth="240px" className='border border-red-900 w-60  rounded-sm'>
  <RadixCard size="2">
    <Inset clip="padding-box" side="top" pb="current">
      <img 
      className='block object-fill w-100%'
        src={`${poster}`}
        alt={title}
        
      />
    </Inset>
    <Text as="p" size="3" className='text-center text-xl text-white bg-blue-900 '>
      <Strong className='m-2 font-mono'>{title}</Strong> 
    </Text>
  </RadixCard>
</Box>
  )
}

export default CardComponet