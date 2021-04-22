import React from 'react';
import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import LineHeading from '@/Components/LineHeading';
import LinkCard from '@/Components/LinkCard';
import links, { LinkType } from '../../data/links';

function Links() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      width="full"
      minH="100vh"
      mx="auto"
      maxW="6xl"
      my="28"
    >
      <LineHeading
        fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
        textAlign="center"
      >
        Links
      </LineHeading>
      <Text mt={3}>My favourite parts of the web.</Text>
      <SimpleGrid
        width="100%"
        pt={10}
        columns={{ base: 1, sm: 2, md: 3 }}
        spacingX={10}
        spacingY={8}
      >
        {links
          .sort(
            (a: LinkType, b: LinkType) => a.date.getTime() - b.date.getTime(),
          )
          .reverse()
          .map((link: LinkType) => (
            <LinkCard {...link} />
          ))}
      </SimpleGrid>
    </Flex>
  );
}

export default Links;
