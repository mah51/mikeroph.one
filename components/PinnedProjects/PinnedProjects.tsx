import React from 'react';
import {
  Badge,
  Box,
  Flex,
  Text,
  chakra,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';
import { formatDistance, format } from 'date-fns';
import { repoType } from '../../pages/api/github';
import { pinnedRepoType } from '../../data/pinnedRepos';
import PinnedImageProjects from '../PinnedImageProjects';

interface PinnedProjectsProps {
  repo: repoType;
  projectData: pinnedRepoType;
  left: boolean;
}

export const PinnedProjects: React.FC<PinnedProjectsProps> = ({
  repo,
  projectData,
  left,
}): React.ReactElement => {
  const { colorMode } = useColorMode();

  if (projectData && projectData?.image) {
    return (
      <PinnedImageProjects left={left} repo={repo} projectData={projectData} />
    );
  }

  return (
    <Box h="full" w="full" my={5}>
      <Flex
        bg={colorMode === 'light' ? `white` : `gray.700`}
        px={8}
        py={8}
        height="100%"
        width="100%"
        border="1px solid"
        borderColor={colorMode === 'light' ? `gray.200` : `gray.700`}
        borderRadius="2xl"
        boxShadow="xl"
        textAlign="left"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        isTruncated
      >
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          maxWidth="full"
          width="full"
          isTruncated
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            fontSize={{ base: `2xl`, md: `4xl` }}
            fontWeight="bold"
            isTruncated
            maxW="100%"
          >
            {projectData.name}
            <chakra.span
              ml={2}
              fontSize="md"
              color={colorMode === 'light' ? 'gray.500' : 'gray.500'}
            >
              {format(new Date(repo.created_at), `dd/MM/yy`)}
            </chakra.span>
          </Text>
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
          mb={3}
          maxWidth="100%"
          color={colorMode === 'light' ? `gray.600` : `gray.500`}
          isTruncated
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
        <Text
          color={colorMode === 'light' ? `gray.600` : `gray.300`}
          justifySelf="center"
          height="100%"
          width="100%"
          whiteSpace="normal"
        >
          {projectData.longDescription}
        </Text>
      </Flex>
    </Box>
  );
};
