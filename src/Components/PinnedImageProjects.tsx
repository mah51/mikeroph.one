import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { VscGithub } from 'react-icons/vsc';
import { format, formatDistance } from 'date-fns';
import {
  AspectRatio,
  Box,
  Heading,
  Text,
  VStack,
  chakra,
  Badge,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function PinnedImageProjects({ projectData, repo }: any) {
  return (
    <Box position="relative" width="100%" mb={10}>
      <Box maxWidth="90%">
        <AspectRatio ratio={16 / 9}>
          <Box
            borderRadius="2xl"
            border={'1px solid'}
            borderColor={useColorModeValue('gray.200', 'gray.600')}
          >
            <Image src={projectData.image} layout={'fill'} />
          </Box>
        </AspectRatio>
      </Box>
      <Box
        maxHeight="full"
        position="absolute"
        right={'-5%'}
        top={'50%'}
        transform={'translate(0, -50%)'}
        borderRadius={'2xl'}
        bg={useColorModeValue('white', 'gray.700')}
        p={5}
        width="45%"
        maxWidth="600px"
        whiteSpace="normal"
        minHeight="35%"
        border={'1px solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <VStack maxHeight="full" height="full" width="full" maxWidth="full">
          <Heading isTruncated>
            {projectData.name}{' '}
            <chakra.span ml={2} fontSize="md" color="gray.500">
              {format(new Date(repo.created_at), `dd/MM/yy`)}
            </chakra.span>
          </Heading>
          <Text
            maxWidth="100%"
            maxHeight="100%"
            height="100%"
            width="100%"
            color={useColorModeValue(`gray.500`, `gray.500`)}
          >
            <chakra.span mr={2}>
              Last edited{` `}
              {formatDistance(new Date(repo.pushed_at), Date.now(), {
                addSuffix: true,
              })}
            </chakra.span>
            •
            <Badge colorScheme="brand" ml={2} isTruncated>
              {repo.language}
            </Badge>
          </Text>
          <Text height="full">{projectData.longDescription}</Text>
          <Button
            as="a"
            href={repo.html_url}
            leftIcon={<VscGithub />}
            colorScheme="brand"
            variant="ghost"
          >
            View on GitHub
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
