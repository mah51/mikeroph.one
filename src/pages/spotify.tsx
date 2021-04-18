import React from 'react';
import axios from 'axios';
import {
  Box,
  Heading,
  List,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
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

interface ListFadeProps {
  children: React.ReactNode;
}
const ListFade = ({ children }: ListFadeProps): any => {
  const bp = useBreakpointValue({ base: false, md: true });
  if (!bp) {
    return children;
  }
  return (
    <Fade cascade delay={1000} triggerOnce>
      {children}
    </Fade>
  );
};

interface HeadingFadeProps {
  children: React.ReactNode;
}
const HeadingFade = ({ children }: HeadingFadeProps): any => {
  const bp = useBreakpointValue({ base: false, md: true });
  if (!bp) {
    return children;
  }
  return (
    <Fade direction="up" triggerOnce cascade>
      {children}
    </Fade>
  );
};

function Spotify({ data, error }: SpotifyProps) {
  console.log(data);
  if (error) {
    return <div>There was an error fetching data from spotify</div>;
  }
  return (
    <Box
      width="full"
      maxW={{ base: `full`, lg: `7xl`, xl: `8xl` }}
      px={{ base: 2, md: 5 }}
      pb={{ base: 16, md: 28 }}
      mx="auto"
    >
      <HeadingFade>
        <Heading
          pt="28"
          fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
          textAlign="center"
        >
          Here&apos;s what I&apos;m listening to at the moment
        </Heading>
        <Text textAlign="center" pt="5">
          *Top Songs and Artists over the past 6 months
        </Text>
      </HeadingFade>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        height="full"
        width="full"
        spacingY={10}
        spacingX={5}
        pt={20}
      >
        <ListFade>
          <TopArtists artists={data.artists.items} />
          <CurrentlyPlaying
            song={data.currentlyPlaying?.item}
            isPlaying={data.currentlyPlaying?.is_playing}
          />
          <TopSongs songs={data.songs.items} />
          <RecentSongs songs={data.recentlyPlayed.items} />
        </ListFade>
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
