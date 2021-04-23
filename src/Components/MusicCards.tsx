import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface SongCardProps {
  song: any;
  titleCard?: boolean;
  isPlaying?: boolean;
}

export const SongCard = ({ song, titleCard, isPlaying }: SongCardProps) => {
  const [imageLoad, setImageLoad] = useState(false);
  return (
    <SimpleGrid
      my={5}
      p={5}
      overflow="visible"
      width="full"
      maxWidth="2xl"
      templateColumns={`${titleCard ? `150px` : `110px`} 1fr`}
      border="1px solid"
      borderColor={useColorModeValue(`gray.100`, `gray.700`)}
      boxShadow="lg"
      transition="all 0.25s"
      borderRadius="xl"
      transitionTimingFunction="spring(1 100 10 10)"
      _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
    >
      <Skeleton
        borderRadius="2xl"
        boxSize={titleCard ? `150px` : `110px`}
        isLoaded={imageLoad}
      >
        <Image
          borderRadius="2xl"
          boxSize={titleCard ? `150px` : `110px`}
          onLoad={() => setImageLoad(true)}
          src={
            song.albumImageUrl ||
            song.album.images
              .filter((image: any) => image.height > 109)
              .slice(-1)[0].url
          }
        />
      </Skeleton>

      <Flex direction="column" ml={5} maxWidth="full" isTruncated>
        <Text
          isTruncated
          maxWidth="full"
          fontSize={
            titleCard ? { base: `2xl`, md: `3xl` } : { base: `xl`, md: `2xl` }
          }
          fontWeight="semibold"
        >
          {`${song.name}${titleCard && !isPlaying ? ` - Paused` : ``}`}
        </Text>
        <Flex
          direction="column"
          color={useColorModeValue(`gray.600`, `gray.400`)}
          mt={2}
          isTruncated
          width="full"
          fontSize={{ base: `sm`, sm: `md` }}
        >
          <Text isTruncated maxWidth="full">
            Album • {song.album.name || song.album}
          </Text>
          <Text isTruncated maxWidth="full">
            Artist{song.artists?.length > 1 && `s`} •{` `}
            {song.artist ||
              song.artists?.map((artist: any) => artist.name).join(`, `)}
          </Text>
        </Flex>
      </Flex>
    </SimpleGrid>
  );
};

export const ArtistCard = ({ artist }: any) => {
  const [imageLoad, setImageLoad] = useState(false);
  return (
    <Box
      overflow="visible"
      position="relative"
      maxHeight="150px"
      maxWidth="150px"
      mx="auto"
      boxShadow="dark-lg"
      outline="none"
      transition="all 0.25s"
      borderRadius="2xl"
      transitionTimingFunction="spring(1 100 10 10)"
      _hover={{ transform: `translateY(-4px)`, shadow: `dark-xl` }}
    >
      <Skeleton
        overflow="visible"
        maxWidth="150px"
        borderRadius="2xl"
        maxHeight="150px"
        boxSize="full"
        mx="auto"
        isLoaded={imageLoad}
      >
        <Image
          overflow="visible"
          borderRadius="2xl"
          filter="brightness(25%)"
          mx="auto"
          maxWidth="150px"
          maxHeight="150px"
          boxSize="full"
          onLoad={() => setImageLoad(true)}
          src={
            artist.images
              .filter((image: any) => image.height >= 150)
              .slice(-1)[0].url
          }
        />
      </Skeleton>

      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        fontWeight="semibold"
        fontSize="lg"
        display="inline"
        maxWidth="150px"
        width="full"
        color="white"
        textAlign="center"
        zIndex={100}
      >
        {artist.name}
      </Text>
    </Box>
  );
};
