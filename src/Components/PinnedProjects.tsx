import React from 'react';
import {
  Badge,
  Box,
  Flex,
  Text,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react';
import { formatDistance, format } from 'date-fns';
import { repoType } from '@/pages/api/github';

function PinnedProjects({
  repo,
  projectData,
}: {
  repo: repoType;
  projectData: any;
}) {
  return (
    <Box as="a" href={repo.html_url} h="full" w="full" mb={10}>
      <Flex
        px={8}
        py={5}
        height="100%"
        width="100%"
        border="1px solid"
        borderColor={useColorModeValue(`gray.100`, `gray.700`)}
        borderRadius="lg"
        boxShadow="lg"
        transition="all 0.25s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
        textAlign="left"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        isTruncated
      >
        <Text
          fontSize={{ base: `2xl`, md: `4xl` }}
          fontWeight="bold"
          isTruncated
          maxW="100%"
        >
          {projectData.name}
          <chakra.span ml={2} fontSize="md" color="gray.600">
            {format(new Date(repo.created_at), `dd/MM/yy`)}
          </chakra.span>
        </Text>
        <Text
          mb={3}
          maxWidth="100%"
          color={useColorModeValue(`gray.500`, `gray.500`)}
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
          color={useColorModeValue(`gray.600`, `gray.400`)}
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
}

export default PinnedProjects;
