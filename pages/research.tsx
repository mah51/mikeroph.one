import React, { ReactElement } from 'react';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import LineHeading from '@/components/LineHeading';
import { researchItems } from '@/data/researchItems';
import ResearchCard from '@/components/ResearchCard';

export default function Research(): ReactElement {
  return (
    <Box width='full' px={3} minH='100vh' height='full' mx='auto' maxW='6xl' py='28'>
      <Flex direction='column' alignItems='center' width='full' px={3} height='full' mx='auto'>
        <LineHeading fontSize={{ base: `5xl`, md: `6xl` }} mx='auto' textAlign='center'>
          My research
        </LineHeading>
        <Text mt={3}>A very small selection of things I have googled about a lot.</Text>
      </Flex>
      <VStack>
        {researchItems.map(item => (
          <ResearchCard key={item.id} {...item} />
        ))}
      </VStack>
    </Box>
  );
}
