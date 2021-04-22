import React from 'react';
import LineHeading from '@/Components/LineHeading';
import { chakra, Flex } from '@chakra-ui/react';

interface BlogLayoutProps {
  children: React.ReactNode;
  frontMatter: any;
}

function BlogLayout({ children, frontMatter }: BlogLayoutProps) {
  return (
    <chakra.article
      display="flex"
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      mt="28"
      width="full"
      minH="100vh"
      mx="auto"
      maxW="6xl"
    >
      <LineHeading>{frontMatter.title}</LineHeading>
    </chakra.article>
  );
}

export default BlogLayout;
