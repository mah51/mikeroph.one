import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const SongCard = ({ song }: any) => {
  const [imageLoad, setImageLoad] = useState(false);
  return (
    <SimpleGrid
      my={5}
      p={5}
      width="full"
      templateColumns="110px 1fr"
      border="1px solid"
      borderColor={useColorModeValue(`gray.100`, `gray.700`)}
      boxShadow="lg"
      transition="all 0.25s"
      borderRadius="xl"
      transition-timing-function="spring(1 100 10 10)"
      _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
    >
      <Skeleton isLoaded={imageLoad}>
        <Image
          borderRadius="full"
          boxSize="110px"
          onLoad={() => setImageLoad(true)}
          src={
            song.album.images
              .filter((image: any) => image.height > 100)
              .slice(-1)[0].url
          }
        />
      </Skeleton>

      <Flex direction="column" ml={5}>
        <Text fontSize="2xl" fontWeight="semibold">
          {song.name}
        </Text>
        <Box display="flex">
          <Text display="inline">{song.artists[0].name}</Text>
          <Text>{song.album.name}</Text>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export const ArtistCard = ({ artist }: any) => (
  <Flex direction="column">
    <Image
      src={
        artist.images.filter((image: any) => image.height >= 150).slice(-1)[0]
          .url
      }
      boxSize="150px"
      m={5}
    />
    <Text
      alignSelf="center"
      fontWeight="semibold"
      fontSize="lg"
      display="inline"
    >
      {artist.name}
    </Text>
  </Flex>
);
