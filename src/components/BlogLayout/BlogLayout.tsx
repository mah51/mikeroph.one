import React from 'react';
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
import { frontMatterType } from '@/utils/mdx';
import BlogBadge from '../BlogBadge';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { Global, css } from '@emotion/react';

interface BlogLayoutProps {
  children: React.ReactNode;
  frontMatter: frontMatterType;
}

const BlogLayout = ({
  children,
  frontMatter,
}: BlogLayoutProps): JSX.Element => {
  const router = useRouter();
  return (
    <>
      {/*Allows anchor link to not get stuck under nav bar */}
      <Global
        styles={css`
          * {
            scroll-padding-top: 80px;
          }
        `}
      />
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        canonical={`https://mikeroph.one${router.asPath}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@Mikerophone_',
        }}
        openGraph={{
          title: frontMatter.title,
          site_name: 'Michael Hall',
          description: frontMatter.summary,
          url: `https://mikeroph.one${router.asPath}/`,

          type: 'article',
          article: {
            publishedTime: new Date(frontMatter.publishedAt).toISOString(),
          },
          images: [
            {
              url: `https://mikeroph.one${frontMatter.image}`,
            },
          ],
        }}
      />
      <chakra.article
        id={'blogArticle'}
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        pt="20"
        width="full"
        minH="100vh"
        mx="auto"
        maxWidth="2xl"
      >
        {frontMatter.tags && (
          <Flex
            width="full"
            px={3}
            mb={4}
            justifyContent="flex-start"
            flexWrap="wrap"
            sx={{ rowGap: '10px', columnGap: '10px' }}
          >
            {frontMatter.tags.map((tag, i) => (
              <BlogBadge tag={tag} key={i.toString()} />
            ))}
          </Flex>
        )}

        <Heading
          fontSize={{ base: '3xl', md: '6xl' }}
          textAlign={{ base: 'center', md: 'left' }}
          px={2}
        >
          {frontMatter.title}
        </Heading>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ base: 'center', md: 'flex-start' }}
          maxW="2xl"
          mx={'auto'}
          mb={12}
          mt={5}
          width="full"
        >
          <Flex alignItems="center" my={{ base: 2, md: 0 }}>
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
        <Box
          mb={16}
          px={2}
          maxWidth="4xl"
          width="full"
          className={'blog-content'}
        >
          {children}
          <HStack justifyContent="flex-start" mr="auto" mt={5}>
            <EditIcon />
            <Link
              href={`https://github.com/mah51/mikeroph.one/edit/main/src/data/blog/${frontMatter.slug}.mdx`}
              passHref
            >
              <ChakraLink
                color={useColorModeValue('gray.900', 'white')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit on github
              </ChakraLink>
            </Link>
          </HStack>
        </Box>
      </chakra.article>
    </>
  );
};

export default BlogLayout;
