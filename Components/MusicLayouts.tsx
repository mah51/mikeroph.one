import {
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { SongCard, ArtistCard } from './MusicCards';

export const TopSongs = ({ songs }: any) => (
  <Flex direction="column" maxW="2xl" width="full" mx="auto" isTruncated>
    <Heading alignSelf="center">Top Songs</Heading>
    {songs.map((song: any) => (
      <SongCard song={song} key={song.id} />
    ))}
  </Flex>
);

export const TopArtists = ({ artists }: any) => (
  <Flex direction="column" maxW="2xl" width="full" mx="auto">
    <Heading alignSelf="center" mb="4">
      Top Artists
    </Heading>
    <SimpleGrid
      columns={{ sm: 1, md: 3 }}
      spacing={5}
      my={5}
      p={5}
      width="full"
      height="full"
      border="1px solid"
      borderColor={useColorModeValue(`gray.100`, `gray.700`)}
      boxShadow="lg"
      transition="all 0.25s"
      borderRadius="xl"
      transition-timing-function="spring(1 100 10 10)"
      _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
    >
      {artists.map((artist: any) => (
        <ArtistCard artist={artist} key={artist.id} />
      ))}
    </SimpleGrid>
  </Flex>
);

export const RecentSongs = ({ songs }: any) => (
  <Flex direction="column" width="full" maxW="2xl" mx="auto">
    <Heading alignSelf="center">Recently Played Songs</Heading>
    {songs.map((song: any, index: number) => (
      <SongCard song={song.track} key={index.toString() + song.track.id} />
    ))}
  </Flex>
);

interface CurrentlyPlayingProps {
  isPlaying: boolean;
  song: any;
}

export const CurrentlyPlaying = ({
  song,
  isPlaying,
}: CurrentlyPlayingProps) => (
  <Flex
    direction="column"
    alignItems="center"
    maxW="2xl"
    width="full"
    mx="auto"
  >
    <Heading mb="4">Currently playing</Heading>
    {song?.name ? (
      <SongCard song={song} titleCard isPlaying={isPlaying} />
    ) : (
      <Text>Nothing playing</Text>
    )}
  </Flex>
);
