import React from 'react';
import {
  AspectRatio,
  Badge,
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import formatDistance from 'date-fns/formatDistance';
import { LinkType } from '@/data/links';

const LinkCard = ({ name, link, date, label }: LinkType): JSX.Element => {
  return (
    <Box as='a' href={link} height='100%'>
      <VStack
        w='100%'
        bg={useColorModeValue(`white`, `gray.900`)}
        rounded='xl'
        border='1px solid'
        borderColor={useColorModeValue(`gray.100`, `gray.700`)}
        transition='all 0.25s'
        transitionTimingFunction='spring(1 100 10 10)'
        boxShadow='lg'
        _hover={{
          transform: `translateY(-4px)`,
          shadow: `xl`,
          textDecoration: `none`,
        }}
        overflow='hidden'
        align='start'
        spacing={0}
      >
        <Box position='relative' w='100%'>
          {label && (
            <Badge
              zIndex={2}
              right={2}
              top={2}
              position='absolute'
              bg='green.100'
              color='green.700'
            >
              {label}
            </Badge>
          )}

          <AspectRatio
            ratio={1.85}
            maxW='400px'
            w='100%'
            borderBottomWidth='1px'
            borderColor={useColorModeValue(`gray.100`, `gray.700`)}
          >
            <Image
              src={`https://rdl.ink/render/${encodeURIComponent(link)}`}
              objectFit='cover'
              alt={name + ' screenshot'}
              objectPosition='0px 0px'
              fallback={
                <Box
                  position='relative'
                  width='100%'
                  height='100%'
                  bg={useColorModeValue(`gray.100`, `gray.700`)}
                >
                  <Text position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)'>
                    No Image Found
                  </Text>
                </Box>
              }
            />
          </AspectRatio>
        </Box>

        <VStack
          py={1}
          px={4}
          spacing={0}
          align='start'
          width='100%'
          bg={useColorModeValue('white', 'gray.900')}
          border={'1px solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
        >
          <Flex justifyContent='space-between' width='100%' py={2}>
            <Text fontSize='sm' noOfLines={1} fontWeight='500'>
              {name}
            </Text>
            <Text fontSize='sm' color={useColorModeValue(`gray.600`, `gray.400`)}>
              {formatDistance(date, new Date(), { addSuffix: true })}
            </Text>
          </Flex>
        </VStack>
      </VStack>
    </Box>
  );
};

export default LinkCard;
