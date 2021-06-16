import React from 'react';
import { Badge, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { repoType } from '@/pages/api/github';

interface RepoCardProps {
  repo: repoType;
  i: number;
}

export const RepoCard: React.FC<RepoCardProps> = ({
  repo,
  i,
}): React.ReactElement => {
  return (
    <Box
      key={i.toString()}
      as="a"
      href={repo.html_url}
      h="full"
      w="full"
      isTruncated
      overflow="visible"
    >
      <Flex
        p={3}
        bg={useColorModeValue(`white`, `gray.700`)}
        height="100%"
        width="100%"
        maxWidth="100%"
        border="1px solid"
        borderColor={useColorModeValue(`gray.200`, `gray.700`)}
        borderRadius="lg"
        boxShadow="lg"
        transition="all 0.25s"
        transitionTimingFunction="spring(1 100 10 10)"
        _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
        textAlign="left"
        direction="column"
        pl={5}
        justifyContent="flex-start"
        alignItems="flex-start"
        isTruncated
      >
        <Text
          fontSize={{ base: `lg`, md: `xl` }}
          fontWeight="semibold"
          mb={3}
          maxW="full"
          isTruncated
        >
          {repo.name}

          <Badge colorScheme="brand" ml={2}>
            {repo.language}
          </Badge>
        </Text>
        <Text
          color={useColorModeValue(`gray.600`, `gray.400`)}
          justifySelf="center"
          maxWidth="full"
          isTruncated
        >
          {repo.description}
        </Text>
      </Flex>
    </Box>
  );
};
