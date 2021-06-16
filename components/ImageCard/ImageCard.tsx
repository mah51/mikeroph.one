import {
  AspectRatio,
  Box,
  useColorModeValue,
  Flex,
  VStack,
  Heading,
  Button,
  Text,
  Badge,
  chakra,
} from '@chakra-ui/react';
import { format, formatDistance } from 'date-fns';
import { VscGithub } from 'react-icons/vsc';
import Image from 'next/image';
import React from 'react';
import { pinnedRepoType } from '../../data/pinnedRepos';
import { repoType } from '../../pages/api/github';

interface ImageCardProps {
  projectData: pinnedRepoType;
  repo: repoType;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  projectData,
  repo,
}): React.ReactElement => {
  return (
    <Flex
      direction="column"
      borderRadius="2xl"
      bg={useColorModeValue('white', 'gray.700')}
      border="1px solid"
      boxShadow="lg"
      width="full"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <AspectRatio ratio={16 / 9} border="none">
        <Box borderTopRadius="2xl">
          <Image
            alt={projectData.name + ' screenshot'}
            src={projectData.image || ''}
            layout={'fill'}
          />
        </Box>
      </AspectRatio>
      <VStack borderBottomRadius={'2xl'} py={5} px={8}>
        <Flex
          width="full"
          justifyContent="space-between"
          direction={{ base: 'column', sm: 'row' }}
        >
          <Heading isTruncated maxWidth="full">
            {projectData.name}{' '}
            <chakra.span ml={'5px'} fontSize="md" color="gray.500" isTruncated>
              {format(new Date(repo.created_at), `dd/MM/yy`)}
            </chakra.span>
          </Heading>

          <Button
            mt={[2, 0]}
            isTruncated
            as="a"
            href={repo.html_url}
            leftIcon={<VscGithub />}
            colorScheme="brand"
            variant="ghostAlwaysOn"
          >
            View on GitHub
          </Button>
        </Flex>
        <Text
          maxWidth="100%"
          maxHeight="100%"
          height="100%"
          width="100%"
          textAlign="left"
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

        <Text>{projectData.longDescription}</Text>
      </VStack>
    </Flex>
  );
};
