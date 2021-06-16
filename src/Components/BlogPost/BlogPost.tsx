import React from 'react';
import Link from 'next/link';
import {
  Link as ChakraLink,
  Text,
  useColorModeValue,
  Heading,
  HStack,
  Badge,
  VStack,
} from '@chakra-ui/react';
import formatDistance from 'date-fns/formatDistance';
import { useQuery } from 'react-query';

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
          width="full"
          border="1px solid"
          bg={useColorModeValue(`white`, `gray.700`)}
          borderColor={useColorModeValue(`gray.200`, `gray.700`)}
          boxShadow="lg"
          transition="all 0.25s"
          borderRadius="2xl"
          transitionTimingFunction="spring(1 100 10 10)"
          _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
          isTruncated
        >
          <HStack
            width="full"
            height="full"
            alignItems="flex-end"
            direction={{ base: `column`, md: `row` }}
            justifyContent="space-between"
            maxW="full"
            isTruncated
          >
            <Heading maxW="70%" lineHeight="1.4em" isTruncated>
              {title}
            </Heading>
            <Text fontWeight="semibold" fontSize="xl" pb={1}>
              {`${views ? new Number(views).toLocaleString() : '–––'} views`}
            </Text>
          </HStack>
          <HStack
            width="full"
            alignItems="flex-end"
            direction={{ base: `column`, md: `row` }}
            justifyContent="space-between"
            flexWrap="nowrap"
            maxW="full"
          >
            <Text maxW="30%">
              Written{' '}
              {formatDistance(new Date(publishedAt), new Date(), {
                addSuffix: true,
              })}
            </Text>
            <HStack>
              {tags &&
                tags.map((tag, i) => (
                  <Badge
                    ml={2}
                    colorScheme={
                      [
                        `gray`,
                        `brand`,
                        `teal`,
                        `blue`,
                        `green`,
                        `pink`,
                        `orange`,
                        `red`,
                        `purple`,
                        `yellow`,
                      ][(tag.charCodeAt(0) + tag.charCodeAt(1)) % 10]
                    }
                    key={i.toString()}
                    py={1}
                    px={2}
                    borderRadius={'md'}
                  >
                    {tag}
                  </Badge>
                ))}
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
