import React from 'react';
import { Flex } from '@chakra-ui/react';
import LineHeading from '@/Components/LineHeading';
import Skills from '@/Components/Skills';

function About() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      width="full"
      minH="100vh"
      mx="auto"
      maxW="6xl"
    >
      <LineHeading
        mt="28"
        fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
        textAlign="center"
      >
        About me
      </LineHeading>
      <Skills />
    </Flex>
  );
}

export default About;
