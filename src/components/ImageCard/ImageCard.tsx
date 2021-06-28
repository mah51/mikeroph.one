import {
  AspectRatio,
  Box,
  useColorModeValue,
  Flex,
  VStack,
  Heading,
  Link as ChakraLink,
  Text,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { pinnedRepoType } from '@/data/pinnedRepos';
import { repoType } from '@/pages/api/github';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Tags from '../Tags';

interface ImageCardProps {
  projectData: pinnedRepoType;
  repo: repoType;
}

const ImageCard = ({ projectData, repo }: ImageCardProps): JSX.Element => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction='column'
      borderRadius='2xl'
      bg={useColorModeValue('white', 'gray.900')}
      border='1px solid'
      boxShadow='lg'
      width='full'
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <AspectRatio ratio={16 / 9} border='none'>
        <Box borderTopRadius='2xl'>
          <Image
            alt={projectData.name + ' screenshot'}
            src={projectData.image || ''}
            layout={'fill'}
          />
        </Box>
      </AspectRatio>
      <VStack borderBottomRadius={'2xl'} py={5} px={4} spacing={1}>
        <Stack isInline justifyContent='space-between' alignItems='center' width='full'>
          <Heading fontFamily='Ubuntu' isTruncated maxWidth='full' fontSize={'2xl'}>
            {projectData.name}
          </Heading>
          <Stack isInline justifyContent='flex-end' alignItems='center' spacing={4}>
            {repo?.html_url && (
              <Link href={repo?.html_url} passHref>
                <ChakraLink isExternal className={`hover-link-${colorMode}`}>
                  <FaGithub size={23} />
                </ChakraLink>
              </Link>
            )}
            {projectData?.deployedLink && (
              <Link href={projectData.deployedLink} passHref>
                <ChakraLink isExternal className={`hover-link-${colorMode}`}>
                  <FaExternalLinkAlt size={20} />
                </ChakraLink>
              </Link>
            )}
          </Stack>
        </Stack>
        <Text
          maxWidth='100%'
          maxHeight='100%'
          height='100%'
          width='100%'
          textAlign='left'
          color={useColorModeValue(`gray.500`, `gray.500`)}
        >
          <Tags tags={projectData?.stack} />
        </Text>

        <Text pt={2}>{projectData.longDescription}</Text>
      </VStack>
    </Flex>
  );
};

export default ImageCard;
