import React from 'react'
import Link from 'next/link'
import {
  Link as ChakraLink,
  Text,
  useColorModeValue,
  Heading,
  HStack,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react'
import formatDistance from 'date-fns/formatDistance'
import { useQuery } from 'react-query'
import BlogBadge from '../BlogBadge'

interface BlogPostProps {
  title: string
  summary: string
  slug: string
  tags: string[]
  publishedAt: string
}

const BlogPost = ({ title, summary, slug, tags, publishedAt }: BlogPostProps): JSX.Element => {
  const spliceBP = useBreakpointValue({ base: 2, md: 4 })
  const { data } = useQuery(`views${slug}`, () => {
    return fetch(`/api/views/${slug}`).then(res => res.json())
  })
  const views = data?.total
  return (
    <Link href={`/blog/${slug}`} passHref>
      <ChakraLink _hover={{ textDecoration: `none` }} width='full'>
        <Flex
          mb={8}
          px={5}
          py={4}
          direction='column'
          width='calc(100% -10px)'
          mx={'5px'}
          border='1px solid'
          bg={useColorModeValue(`white`, `gray.700`)}
          borderColor={useColorModeValue(`gray.200`, `gray.700`)}
          boxShadow='lg'
          transition='all 0.25s'
          borderRadius='2xl'
          transitionTimingFunction='spring(1 100 10 10)'
          _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
        >
          <Flex
            width='full'
            alignItems={{ base: 'flex-start', sm: 'flex-end' }}
            flexDirection={{ base: `column`, sm: `row` }}
            justifyContent='space-between'
            maxW='full'
            mb={2}
          >
            <HStack mb={{ base: 2, sm: 0 }} sx={{ marginLeft: '0px!important' }}>
              {tags &&
                tags.slice(0, spliceBP).map((tag, i) => <BlogBadge tag={tag} key={i.toString()} />)}
            </HStack>
            <Text
              fontWeight='semibold'
              fontSize='lg'
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {formatDistance(new Date(publishedAt), new Date(), {
                addSuffix: true,
              })}{' '}
              {'•'} {`${views ? new Number(views).toLocaleString() : '–––'} views`}
            </Text>
          </Flex>
          <Heading mb={2} fontSize={{ base: '2xl', md: '3xl' }}>
            {title}
          </Heading>
          <Text width='full'>{summary}</Text>
        </Flex>
      </ChakraLink>
    </Link>
  )
}

export default BlogPost
