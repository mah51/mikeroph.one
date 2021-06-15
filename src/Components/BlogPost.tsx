import React from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Link as ChakraLink,
  Text,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
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
        <Box
          mb={8}
          px={5}
          py={3}
          border="1px solid"
          bg={useColorModeValue(`white`, `gray.700`)}
          borderColor={useColorModeValue(`gray.200`, `gray.700`)}
          boxShadow="lg"
          transition="all 0.25s"
          borderRadius="2xl"
          transitionTimingFunction="spring(1 100 10 10)"
          _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
        >
          <Flex
            direction={{ base: `column`, md: `row` }}
            justifyContent="space-between"
          >
            <Heading>{title}</Heading>
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
