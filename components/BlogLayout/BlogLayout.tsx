import React from 'react';
import LineHeading from '../LineHeading';
import {
  Avatar,
  chakra,
  Container,
  Flex,
  Link as ChakraLink,
  Text,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import ViewCounter from '../ViewCounter';
import Link from 'next/link';
import { EditIcon } from '@chakra-ui/icons';
import { frontMatterType } from '../../utils/mdx';

interface BlogLayoutProps {
  children: React.ReactNode;
  frontMatter: frontMatterType;
}

export const BlogLayout = ({
  children,
  frontMatter,
}: BlogLayoutProps): React.ReactElement => {
  return (
    <chakra.article
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      pt="28"
      width="full"
      minH="100vh"
      mx="auto"
      maxWidth="4xl"
    >
      <LineHeading fontSize={{ base: '3xl', md: '6xl' }}>
        {frontMatter.title}
      </LineHeading>
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
          <Avatar
            height={'24px'}
            width={'24px'}
            src={'https://michael-hall.me/static/images/profile.jpeg'}
          />
          <Text color={useColorModeValue('gray.700', 'gray.300')} ml={2}>
            {frontMatter.by}
            {'Michael Hall / '}
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
      <Container mb={16} maxWidth="4xl" width={{ base: 'full', md: '80%' }}>
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
      </Container>
    </chakra.article>
  );
};
