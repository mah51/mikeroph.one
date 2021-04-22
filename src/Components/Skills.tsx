import React from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import Skill from '@/Components/Skill';

function Skills() {
  return (
    <VStack alignItems="flex-start" width="100%">
      <Heading>Skills</Heading>
      <Skill number={4} label="NodeJS" />
      <Skill number={5} label="React" />
      <Skill number={3} label="ExpressJS" />
      <Skill number={3} label="Python" />
    </VStack>
  );
}

export default Skills;
