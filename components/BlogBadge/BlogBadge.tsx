import { Badge } from '@chakra-ui/react';
import React from 'react';

export const BlogBadge: React.FC<{ tag }> = ({ tag }): React.ReactElement => {
  return (
    <Badge
      ml={{ base: 0, sm: 2 }}
      colorScheme={
        [
          `gray`,
          `brand`,
          `teal`,
          `blue`,
          `green`,
          `pink`,
          `orange`,
          `red`,
          `purple`,
          `yellow`,
        ][(tag.charCodeAt(0) + tag.charCodeAt(1)) % 10]
      }
      py={1}
      px={2}
      borderRadius={'md'}
    >
      {tag}
    </Badge>
  );
};
