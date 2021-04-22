import React from 'react';
import Link from 'next/link';
import { Box, Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import LineHeading from '@/Components/LineHeading';
import formatDistance from 'date-fns/formatDistance';

interface BlogPostProps {
  title: string;
  summary: string;
  slug: string;
  publishedAt: string;
}

function BlogPost({ title, summary, slug, publishedAt }: BlogPostProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <ChakraLink _hover={{ textDecoration: `none` }} width="full">
        <Box mb={8}>
          <Flex
            direction={{ base: `column`, md: `row` }}
            justifyContent="space-between"
          >
            <LineHeading>{title}</LineHeading>
            <Text>
              {formatDistance(new Date(publishedAt), new Date(), {
                addSuffix: true,
              })}
            </Text>
          </Flex>
          <Text>{summary}</Text>
        </Box>
      </ChakraLink>
    </Link>
  );
}

export default BlogPost;
