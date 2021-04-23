import React from 'react';
import {
  Box,
  Image,
  Text,
  useColorModeValue,
  Flex,
  SimpleGrid,
  AspectRatio,
  Badge,
} from '@chakra-ui/react';
import { usePalette } from 'react-palette';
import { ToolType } from '../../data/tools';

function ToolCard({ name, description, link, id, labels }: ToolType) {
  const { data } = usePalette(`./static/images/toolImages/${id}.png`);
  return (
    <Box as="a" href={link} height="100%">
      <SimpleGrid
        p={3}
        height="100%"
        gridTemplateColumns="100px 1fr"
        border="1px solid"
        borderColor={useColorModeValue(`gray.100`, `gray.700`)}
        borderRadius="lg"
        boxShadow="lg"
        transition="all 0.25s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
      >
        <AspectRatio ratio={1} maxHeight="100px">
          <Box
            position="relative"
            maxHeight="100%"
            maxWidth="100%"
            overflow="hidden"
            boxShadow={`inset 0 0 20px 5px ${useColorModeValue(
              `${data.darkVibrant}19`,
              `${data.lightVibrant}19`,
            )}`}
            borderRadius="full"
          >
            <Box
              bg={useColorModeValue(data.darkVibrant, data.lightVibrant)}
              border="1px solid"
              position="absolute"
              borderColor={useColorModeValue(
                `${data.darkVibrant}`,
                `${data.lightVibrant}`,
              )}
              top={0}
              bottom={0}
              left={0}
              right={0}
              opacity={useColorModeValue(0.15, 0.25)}
            />
            <Image
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              position="absolute"
              src={
                id === `biorender`
                  ? useColorModeValue(
                      `./static/images/toolImages/${id}.png`,
                      `./static/images/toolImages/${id}dark.png`,
                    )
                  : `./static/images/toolImages/${id}.png`
              }
              maxHeight="70%"
              maxWidth="70%"
            />
          </Box>
        </AspectRatio>

        <Flex
          textAlign="left"
          direction="column"
          pl={5}
          justifyContent="flex-start"
          alignItems="flex-start"
          isTruncated
        >
          <Text fontSize="xl" fontWeight="semibold" mb={3}>
            {name}
            {labels?.map((label, index) => (
              <Badge
                key={index.toString() + id}
                color={useColorModeValue(data.darkVibrant, data.lightVibrant)}
                bg={`${useColorModeValue(
                  data.darkVibrant,
                  data.lightVibrant,
                )}22`}
                mb={1}
                ml={2}
              >
                {label}
              </Badge>
            ))}
          </Text>
          <Text
            color={useColorModeValue(`gray.600`, `gray.400`)}
            justifySelf="center"
            height="100%"
            width="100%"
            whiteSpace="normal"
          >
            {description}
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

export default ToolCard;
