import React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import ToolCard from '../Components/ToolCard';
import tools, { ToolType } from '../../data/tools';

function Tools() {
  return (
    <Box width="full">
      <Heading
        pt="28"
        fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
        textAlign="center"
      >
        Tools
      </Heading>
      <SimpleGrid column={{ base: 1, sm: 2, md: 3 }}>
        {tools.map((bookmark: ToolType, index: number) => (
          <ToolCard {...bookmark} key={index.toString()} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Tools;
