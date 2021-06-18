import React from 'react';
import Link from 'next/link';
import {
  Link as ChakraLink,
  Text,
  useColorModeValue,
  Heading,
  HStack,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import formatDistance from 'date-fns/formatDistance';
import { useQuery } from 'react-query';
import BlogBadge from '../BlogBadge';

interface BlogPostProps {
  title: string;
  summary: string;
  slug: string;
  tags: string[];
  publishedAt: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({
  title,
  summary,
  slug,
  tags,
  publishedAt,
}): React.ReactElement => {
  const spliceBP = useBreakpointValue({ base: 2, md: 5 });
  const { data } = useQuery(`views${slug}`, () => {
    return fetch(`/api/views/${slug}`).then((res) => res.json());
  });
  const views = data?.total;
  return (
    <Link href={`/blog/${slug}`} passHref>
      <ChakraLink _hover={{ textDecoration: `none` }} width="full">
        <VStack
          mb={8}
          px={5}
          py={4}
          width="calc(100% -10px)"
          mx={'5px'}
          border="1px solid"
          bg={useColorModeValue(`white`, `gray.700`)}
          borderColor={useColorModeValue(`gray.200`, `gray.700`)}
          boxShadow="lg"
          transition="all 0.25s"
          borderRadius="2xl"
          transitionTimingFunction="spring(1 100 10 10)"
          _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
        >
          <HStack
            width="full"
            height="full"
            alignItems="flex-end"
            direction={{ base: `column`, md: `row` }}
            justifyContent="space-between"
            maxW="full"
          >
            <Heading fontSize={{ base: 'xl', md: '3xl' }} maxW="70%">
              {title}
            </Heading>
            <Text fontWeight="semibold" fontSize="xl" pb={1}>
              {`${views ? new Number(views).toLocaleString() : '–––'} views`}
            </Text>
          </HStack>
          <HStack
            width="full"
            alignItems={{ base: 'flex-start', sm: 'flex-end' }}
            flexDirection={{ base: `column-reverse`, sm: `row` }}
            justifyContent="space-between"
            maxW="full"
          >
            <Text mt={{ base: 2, sm: 0 }}>
              Written{' '}
              {formatDistance(new Date(publishedAt), new Date(), {
                addSuffix: true,
              })}
            </Text>
            <HStack sx={{ marginLeft: '0px!important' }}>
              {tags &&
                tags
                  .slice(0, spliceBP)
                  .map((tag, i) => <BlogBadge tag={tag} key={i.toString()} />)}
            </HStack>
          </HStack>
          <Text width="full" mt={2}>
            {summary}
          </Text>
        </VStack>
      </ChakraLink>
    </Link>
  );
};
