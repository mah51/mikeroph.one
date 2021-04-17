import { Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { SongCard, ArtistCard } from './MusicCards';

export const TopSongs = ({ songs }: any) => (
  <Flex direction="column" maxW="xl" width="full" mx="auto">
    <Heading alignSelf="center">Top Songs</Heading>
    {songs.map((song: any) => (
      <SongCard song={song} key={song.id} />
    ))}
  </Flex>
);

export const TopArtists = ({ artists }: any) => (
  <Flex direction="column" maxW="xl" width="full" mx="auto">
    <Heading alignSelf="center">Top Artists</Heading>
    <Flex>
      {artists.map((artist: any) => (
        <ArtistCard artist={artist} key={artist.id} />
      ))}
    </Flex>
  </Flex>
);

export const RecentSongs = ({ songs }: any) => (
  <Flex direction="column" width="full" mx="auto">
    <Heading alignSelf="center">Recently Played Songs</Heading>
    {songs.map((song: any) => (
      <SongCard song={song.track} key={song.track.id} />
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
}: CurrentlyPlayingProps) => {
  if (!song) {
    return (
      <Flex
        direction="column"
        alignItems="center"
        maxW="xl"
        width="full"
        mx="auto"
      >
        <Heading>I'm not listening to music</Heading>
        <Flex>
          <Image
            boxSize="150px"
            src={
              song.album.images
                .filter((image: any) => image.height >= 150)
                .slice(-1)[0].url
            }
          />
          {song.name}
        </Flex>
      </Flex>
    );
  }
  return (
    <Flex
      direction="column"
      alignItems="center"
      maxW="xl"
      width="full"
      mx="auto"
    >
      <Heading mb="4">Currently playing</Heading>
      <Flex>
        <Image
          mr={4}
          boxSize="150px"
          src={
            song.album.images
              .filter((image: any) => image.height >= 150)
              .slice(-1)[0].url
          }
        />
        {song.name}
        {isPlaying ? `` : `paused`}
      </Flex>
    </Flex>
  );
};
