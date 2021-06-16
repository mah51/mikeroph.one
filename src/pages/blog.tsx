import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { getAllFilesFrontMatter } from '../../utils/mdx';
import BlogPost from '../components/BlogPost';
import LineHeading from '../components/LineHeading';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';

function Blog({ posts }: { posts: any }): React.ReactElement {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('recent');

  const filteredBlogPosts = posts
    .filter((frontMatter: any) =>
      frontMatter.title.toLowerCase().includes(filter)
    )
    .sort((a: any, b: any) => {
      if (sort === 'recent' || sort === 'old') {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }
    });

  if (sort === 'recent') {
    filteredBlogPosts.reverse();
  }

  return (
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
        Here are a collection of my blog posts, with {posts.length} blog
        {posts.length > 1 && 's'} :).
      </Text>
      <Box mt="16" width="70%" mx="auto">
        <Flex
          width="full"
          direction={{ base: 'column', md: 'row' }}
          my={7}
          justifyContent="space-between"
        >
          <InputGroup
            maxWidth={{ base: 'full', md: '200px' }}
            mb={{ base: 5, md: 0 }}
          >
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch color="gray.300" />
            </InputLeftElement>
            <Input
              variant="filled"
              type="text"
              placeholder="Search"
              _placeholder={{
                color: useColorModeValue('gray.800', 'whiteAlpha.800'),
              }}
              onChange={(e) => setFilter(e.target.value.toLowerCase())}
            />
          </InputGroup>

          <Menu>
            <MenuButton as={Button} rightIcon={<BiChevronDown />}>
              Sort by...
            </MenuButton>
            <MenuList zIndex={998}>
              <MenuItem
                zIndex={999}
                isDisabled={sort === 'recent'}
                onClick={() => setSort('recent')}
              >
                Recent
              </MenuItem>
              <MenuItem
                zIndex={999}
                isDisabled={sort === 'old'}
                onClick={() => setSort('old')}
              >
                Oldest
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        {filteredBlogPosts.length === 0 && (
          <Text fontSize="2xl" textAlign="center">
            No Results :(
          </Text>
        )}
        {filteredBlogPosts.map((frontMatter: any) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </Box>
    </Flex>
  );
}

export async function getStaticProps(): Promise<{ props: { posts: any } }> {
  const posts = await getAllFilesFrontMatter();
  return { props: { posts } };
}
export default Blog;
