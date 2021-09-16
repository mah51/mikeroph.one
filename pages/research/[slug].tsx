import BlogBadge from '@/components/BlogBadge';
import { ResearchItem, researchItems } from '@/data/researchItems';
import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, HStack, VStack, Text } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import LineHeading from '@/components/LineHeading';
import { title } from 'process';
import React, { ReactElement } from 'react';

interface Props {
  item: ResearchItem;
}

export default function ResearchLayout({ item }: Props): ReactElement {
  return (
    <Box py='20' minHeight='100vh' width='full'>
      <VStack mx='auto' my='10' maxWidth={{ base: '97%', md: '70%' }}>
        <Flex flexWrap='wrap'>
          {item.tags.map((tag, i) => (
            <BlogBadge tag={tag} key={i.toString()} mr='2' mt='2' />
          ))}
        </Flex>
        <LineHeading>{item.title}</LineHeading>
        <Flex py='2' justifyContent='space-between' w='full'>
          <HStack>
            {item.authors.map(author => (
              <Tag
                key={`${author.name}${title[0]}`}
                size='lg'
                colorScheme='brand'
                borderRadius='full'
              >
                <Avatar name={author.name} size='xs' ml={-2} mr={2} src={author.avatar} />
                {author.name}
              </Tag>
            ))}
          </HStack>
          <Text fontSize='lg' fontWeight='bold'>
            {item.date}
          </Text>
        </Flex>
      </VStack>

      <object
        data={item.pdf}
        type={item.pdf}
        style={{ height: '80vh', width: '96%', margin: '0 auto' }}
      >
        <embed src={item.pdf} style={{ height: '80vh', width: '100%' }} type='application/pdf' />
      </object>
    </Box>
  );
}

export async function getStaticPaths(): Promise<any> {
  return {
    paths: researchItems.map(p => ({
      params: {
        slug: p.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: any;
}): Promise<{ props: { item: ResearchItem } }> {
  return { props: { item: researchItems.find(p => p.id === params.slug) } };
}
