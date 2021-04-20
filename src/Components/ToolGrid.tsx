import React from 'react';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import ToolCard from '@/Components/ToolCard';
import tools, { categories, ToolType } from '../../data/tools';

function ToolGrid({ filter }: { filter: categories }) {
  return (
    <SimpleGrid pt={10} columns={{ base: 1, md: 2 }} spacingX={10} spacingY={5}>
      {tools
        .filter((x) => x.category.includes(filter))
        .sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
        .map((tool: ToolType, index: number) => (
          <ToolCard {...tool} key={index.toString()} />
        ))}
    </SimpleGrid>
  );
}

export default ToolGrid;
