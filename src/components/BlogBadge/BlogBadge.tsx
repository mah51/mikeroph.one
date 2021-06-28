import { Badge } from '@chakra-ui/react';

interface BlogBadgeProps {
  tag: string;
}

const BlogBadge = ({ tag }: BlogBadgeProps): JSX.Element => {
  return (
    <Badge
      colorScheme={
        [`gray`, `brand`, `teal`, `blue`, `green`, `pink`, `orange`, `red`, `purple`, `yellow`][
          (tag.charCodeAt(0) + tag.charCodeAt(1)) % 10
        ]
      }
      py={1}
      px={2}
      fontWeight={'600'}
      borderRadius={'md'}
    >
      {tag}
    </Badge>
  );
};

export default BlogBadge;
