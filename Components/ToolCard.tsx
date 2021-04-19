import React from 'react';
import {
  Box,
  VStack,
  Image,
  Text,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { formatDistance } from 'date-fns';
import { ToolType } from '../data/tools';

function ToolCard({ image, title, labels, date, link }: ToolType) {
  return (
    <LinkBox>
      <LinkOverlay href={link}>
        <VStack
          maxW="250px"
          width="full"
          border="1px solid"
          borderColor={useColorModeValue(`gray.100`, `gray.700`)}
        >
          <Image src={image} />
          <Box>
            <Text>{title}</Text>
            {labels}
            <Text>{formatDistance(date, new Date(), { addSuffix: true })}</Text>
          </Box>
        </VStack>
      </LinkOverlay>
    </LinkBox>
  );
}

export default ToolCard;
