import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import LineHeading from '../LineHeading'
import { SongCard, ArtistCard } from './MusicCards'

export const TopSongs = ({ songs }: { songs: any }): JSX.Element => (
  <Flex
    direction='column'
    maxW='2xl'
    width='full'
    mx='auto'
    isTruncated
    // fixes bug that cut shadow off
    overflow='visible'
  >
    <LineHeading alignSelf='center' mb={5}>
      Top Songs
    </LineHeading>
    {songs.map((song: any) => (
      <SongCard song={song} key={song.id} />
    ))}
  </Flex>
)

export const TopArtists = ({ artists }: { artists: any }): React.ReactElement => (
  <Flex direction='column' maxW='xl' width='full' mx='auto' overflow='visible'>
    <LineHeading alignSelf='center' mb='4'>
      Top Artists
    </LineHeading>
    <SimpleGrid
      bg='transparent'
      columns={{ sm: 1, md: 3 }}
      spacing={5}
      my={5}
      p={5}
      width='full'
      overflow='visible'
      height='full'
    >
      {artists.map((artist: any) => (
        <ArtistCard artist={artist} key={artist.id} />
      ))}
    </SimpleGrid>
  </Flex>
)

export const RecentSongs = ({ songs }: { songs: any }): JSX.Element => (
  <Flex direction='column' width='full' maxW='2xl' mx='auto' overflow='visible'>
    <LineHeading alignSelf='center' mb={5}>
      Recently Played Songs
    </LineHeading>
    {songs.map((song: any, index: number) => (
      <SongCard song={song.track} key={index.toString() + song.track.id} />
    ))}
  </Flex>
)

interface CurrentlyPlayingProps {
  song: any
}

export const CurrentlyPlaying = ({ song }: CurrentlyPlayingProps): JSX.Element => (
  <Flex direction='column' alignItems='center' width='full' mx='auto'>
    <LineHeading mb='4'>Currently playing</LineHeading>
    {song?.isPlaying ? (
      <SongCard song={song} titleCard isPlaying={song.isPlaying} />
    ) : (
      <Text>Nothing playing</Text>
    )}
  </Flex>
)
