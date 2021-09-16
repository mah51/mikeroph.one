import { Badge, BoxProps } from '@chakra-ui/react';

interface BlogBadgeProps {
  tag: string;
}

const BlogBadge = (props: BlogBadgeProps & BoxProps): JSX.Element => {
  const { tag } = props;
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
      {...props}
    >
      {tag}
    </Badge>
  );
};

export default BlogBadge;
