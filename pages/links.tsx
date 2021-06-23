import React from 'react'
import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import LineHeading from '@/components/LineHeading'
import LinkCard from '@/components/LinkCard'
import { NextSeo } from 'next-seo'
import links, { LinkType } from '@/data/links'

function Links(): React.ReactElement {
  return (
    <>
      <NextSeo title='Links' />
      <Flex
        direction='column'
        alignItems='center'
        width='full'
        minH='100vh'
        mx='auto'
        maxW='6xl'
        py='28'
      >
        <LineHeading fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }} textAlign='center'>
          Links
        </LineHeading>
        <Text mt={3}>My favourite parts of the web.</Text>
        <SimpleGrid
          width='100%'
          pt={10}
          columns={{ base: 1, sm: 2, md: 3 }}
          spacingX={10}
          spacingY={8}
        >
          {links
            .sort((a: LinkType, b: LinkType) => a.date.getTime() - b.date.getTime())
            .reverse()
            .map((link: LinkType, i: number) => (
              <LinkCard key={i.toString()} {...link} />
            ))}
        </SimpleGrid>
      </Flex>
    </>
  )
}

export default Links
