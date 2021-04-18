import {
  Box,
  chakra,
  Flex,
  Heading,
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
      width="full"
      templateColumns={`${titleCard ? `150px` : `110px`} 1fr`}
      border="1px solid"
      borderColor={useColorModeValue(`gray.100`, `gray.700`)}
      boxShadow="lg"
      transition="all 0.25s"
      borderRadius="xl"
      transition-timing-function="spring(1 100 10 10)"
      _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
    >
      <SkeletonCircle
        boxSize={titleCard ? `150px` : `110px`}
        isLoaded={imageLoad}
      >
        <Image
          borderRadius="full"
          boxSize={titleCard ? `150px` : `110px`}
          onLoad={() => setImageLoad(true)}
          src={
            song.album.images
              .filter((image: any) => image.height > 100)
              .slice(-1)[0].url
          }
        />
      </SkeletonCircle>

      <Flex direction="column" ml={5}>
        <Text
          fontSize={
            titleCard ? { base: `2xl`, md: `3xl` } : { base: `xl`, md: `2xl` }
          }
          fontWeight="semibold"
        >
          {`${
            song.name.length > 30 ? `${song.name.slice(0, 30)}...` : song.name
          }${titleCard && !isPlaying ? ` - Paused` : ``}`}
        </Text>
        <Flex
          direction="column"
          color={useColorModeValue(`gray.600`, `gray.400`)}
          mt={2}
          fontSize={{ base: `sm`, sm: `md` }}
        >
          <Text>
            Album •{` `}
            {song.album.name.length > 30
              ? `${song.album.name.slice(0, 25)}...`
              : song.album.name}
          </Text>
          <Text display="inline">Artist • {song.artists[0].name}</Text>
        </Flex>
      </Flex>
    </SimpleGrid>
  );
};

export const ArtistCard = ({ artist }: any) => {
  const [imageLoad, setImageLoad] = useState(false);
  return (
    <Box position="relative">
      <Image
        borderRadius="full"
        filter="brightness(25%)"
        mx="auto"
        boxSize="150px"
        src={
          artist.images.filter((image: any) => image.height >= 150).slice(-1)[0]
            .url
        }
      />
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
        textAlign="center"
      >
        {artist.name}
      </Text>
    </Box>

    // <chakra.div
    //   borderRadius="full"
    //   onLoad={() => setImageLoad(true)}
    //   backgroundImage={`linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${
    //     artist.images.filter((image: any) => image.height >= 150).slice(-1)[0]
    //       .url
    //   })`}
    //   backgroundSize="cover"
    //   backgroundRepeat="no-repeat"
    //   backgroundPosition="center"
    //   maxWidth="150px"
    //   maxHeight="150px"
    //   width="full"
    //   height="full"
    //   mx="auto"
    //   display="flex"
    //   justifyContent="center"
    //   alignContent="center"
    //   textAlign="center"
    //   backgroundBlendMode="darken"
    // >
    //   <Text
    //     alignSelf="center"
    //     fontWeight="semibold"
    //     fontSize="lg"
    //     display="inline"
    //     textAlign="center"
    //   >
    //     {artist.name}
    //   </Text>
    // </chakra.div>
  );
};
