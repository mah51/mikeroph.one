import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { getAllFilesFrontMatter } from '../../utils/mdx';
import BlogPost from '../Components/BlogPost';
import LineHeading from '../Components/LineHeading';

function Blog({ posts }: any) {
  const filteredBlogPosts = posts.sort(
    (a: any, b: any) =>
      Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  );

  return filteredBlogPosts.map((frontMatter: any) => (
    <Flex
      direction="column"
      alignItems="center"
      width="full"
      minH="100vh"
      mx="auto"
      maxW="6xl"
    >
      <LineHeading
        mt="28"
        fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
        textAlign="center"
      >
        Blog Posts
      </LineHeading>
      <Text mt={3}>
        Here are a collection of my blog posts, totalling {posts.length} blogs
        :).
      </Text>
      <Box mt="16" width="70%" mx="auto">
        <BlogPost key={frontMatter.title} {...frontMatter} />
      </Box>
    </Flex>
  ));
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter(`blog`);
  console.log(posts);
  return { props: { posts } };
}
export default Blog;
