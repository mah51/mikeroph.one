import React from 'react';
import Head from 'next/head';
import {
  Heading,
  Avatar,
  chakra,
  Box,
  Flex,
  Link as ChakraLink,
  Text,
  useColorModeValue,
  HStack,
  Tag,
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import ViewCounter from '../ViewCounter';
import Link from 'next/link';
import { EditIcon } from '@chakra-ui/icons';
import { frontMatterType } from '../../utils/mdx';
import BlogBadge from '../BlogBadge';

interface BlogLayoutProps {
  children: React.ReactNode;
  frontMatter: frontMatterType;
}

export const BlogLayout = ({
  children,
  frontMatter,
}: BlogLayoutProps): React.ReactElement => {
  return (
    <>
      <chakra.article
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        pt="28"
        width="full"
        minH="100vh"
        mx="auto"
        maxWidth="2xl"
      >
        {frontMatter.tags && (
          <Flex width="full" justifyContent="flex-start">
            {frontMatter.tags.map((tag, i) => (
              <BlogBadge tag={tag} key={i.toString()} />
            ))}
          </Flex>
        )}

        <Heading fontSize={{ base: '3xl', md: '6xl' }}>
          {frontMatter.title}
        </Heading>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ base: 'center', md: 'flex-start' }}
          maxW="2xl"
          mx={'auto'}
          mb={16}
          mt={5}
          width="full"
        >
          <Flex alignItems="center">
            <Tag size="lg" colorScheme="brand" borderRadius="full">
              <Avatar
                name={frontMatter.by.name}
                size="xs"
                ml={-2}
                mr={2}
                src={frontMatter.by.avatar}
              />
              {frontMatter.by.name}
            </Tag>

            <Text color={useColorModeValue('gray.700', 'gray.300')} ml={1}>
              {' • '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </Text>
          </Flex>
          <Text color={useColorModeValue('gray.700', 'gray.300')}>
            {frontMatter.wordCount.toLocaleString() + ' words'}
            {` • `}
            {frontMatter.readingTime?.text}
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
          </Text>
        </Flex>
        <Box mb={16} maxWidth="4xl" width="full" className={'blog-content'}>
          {children}
          <HStack justifyContent="flex-start" mr="auto" mt={5}>
            <EditIcon />
            <Link
              href={`https://github.com/mah51/personal-site/edit/main/data/blog/${frontMatter.slug}.mdx`}
              passHref
            >
              <ChakraLink target="_blank" rel="noopener noreferrer">
                Edit on github
              </ChakraLink>
            </Link>
          </HStack>
        </Box>
      </chakra.article>
    </>
  );
};
