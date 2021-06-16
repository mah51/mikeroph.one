import { VscGithub } from 'react-icons/vsc';
import { format, formatDistance } from 'date-fns';
import {
  Button,
  AspectRatio,
  Box,
  Heading,
  Text,
  VStack,
  chakra,
  Badge,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import ImageCard from '../ImageCard';
import { repoType } from '../../pages/api/github';
import { pinnedRepoType } from '../../../data/pinnedRepos';

interface PinnedImageProjectsProps {
  repo: repoType;
  projectData: pinnedRepoType;
  left: boolean;
}

export const PinnedImageProjects: React.FC<PinnedImageProjectsProps> = ({
  projectData,
  repo,
  left,
}): React.ReactElement => {
  const { colorMode } = useColorMode();
  const bp = useBreakpointValue({ base: `base`, lg: `lg` });
  if (bp === `lg`) {
    return (
      <Box position="relative" width="100%" py={5}>
        <Box maxWidth={{ lg: `83%`, xl: `90%` }} ml={left ? `auto` : 0}>
          <AspectRatio ratio={16 / 9}>
            <Box
              boxShadow="xl"
              borderRadius="2xl"
              border="1px solid"
              borderColor={colorMode === 'light' ? `gray.200` : `gray.600`}
            >
              <Image
                alt={projectData?.name + 'screenshot'}
                src={projectData?.image || ''}
                layout="fill"
              />
            </Box>
          </AspectRatio>
        </Box>
        <Box
          maxHeight="full"
          boxShadow="lg"
          position="absolute"
          left={left ? { lg: `0`, xl: `-10%` } : ``}
          right={left ? `` : { lg: `0`, xl: `-10%` }}
          top="50%"
          transform="translate(0, -50%)"
          borderRadius="2xl"
          bg={colorMode === 'light' ? `white` : `gray.700`}
          p={5}
          width="45%"
          maxWidth="600px"
          whiteSpace="normal"
          minHeight="35%"
          border="1px solid"
          borderColor={colorMode === 'light' ? `gray.200` : `gray.700`}
        >
          <VStack maxHeight="full" height="full" width="full" maxWidth="full">
            <Heading isTruncated>
              {projectData.name}
              {` `}
              <chakra.span ml={2} fontSize="md" color="gray.500">
                {format(new Date(repo.created_at), `dd/MM/yy`)}
              </chakra.span>
            </Heading>
            <Text
              maxWidth="100%"
              maxHeight="100%"
              height="100%"
              width="100%"
              textAlign="center"
              color={colorMode === 'light' ? `gray.500` : `gray.500`}
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
            <Text height="full" pt={2} pb={5}>
              {projectData.longDescription}
            </Text>
            <Button
              as="a"
              href={repo.html_url}
              leftIcon={<VscGithub />}
              colorScheme="brand"
              variant="ghostAlwaysOn"
            >
              View on GitHub
            </Button>
          </VStack>
        </Box>
      </Box>
    );
  }
  return <ImageCard {...{ projectData, repo }} />;
};
