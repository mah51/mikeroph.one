import React from 'react';
import axios from 'axios';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import {
  RecentSongs,
  TopArtists,
  TopSongs,
  CurrentlyPlaying,
} from '../../Components/MusicLayouts';

interface SpotifyProps {
  data: any;
  error?: any;
}

function Spotify({ data, error }: SpotifyProps) {
  if (error) {
    return <div>There was an error fetching data from spotify</div>;
  }
  return (
    <Box width="full" maxW={{ base: `full`, lg: `7xl`, xl: `8xl` }} mx="auto">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        height="full"
        width="full"
        pt={20}
      >
        <TopArtists artists={data.artists.items} />
        <CurrentlyPlaying
          song={data.currentlyPlaying?.item}
          isPlaying={data.currentlyPlaying?.context?.is_playing}
        />
        <TopSongs songs={data.songs.items} />
        <RecentSongs songs={data.recentlyPlayed.items} />
      </SimpleGrid>
    </Box>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_VERCEL_ENV
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-spotify-data`
        : `http://localhost:3000/api/get-spotify-data`,
    );
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {
        error: true,
        data: JSON.stringify(e),
      },
    };
  }
}
export default Spotify;
