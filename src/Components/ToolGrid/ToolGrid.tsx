import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import ToolCard from '@/components/ToolCard';
import tools, { categories, ToolType } from '../../../data/tools';

export const ToolGrid: React.FC<{ filter: categories }> = ({
  filter,
}): React.ReactElement => {
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
};

export default ToolGrid;
