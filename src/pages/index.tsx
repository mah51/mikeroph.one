import Head from 'next/head';
import {
  Box,
  Flex,
  Heading,
  Image,
  Grid,
  SkeletonCircle,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link as ChakraLink } from '@chakra-ui/layout/dist/types/link';

export default function Home() {
  const [imageLoad, setImageLoad] = useState(false);
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        height="full"
      >
        <Grid
          justifySelf="center"
          templateColumns={{ base: `1fr`, lg: `1fr 2fr` }}
          p={{ base: 0, sm: 16 }}
          margin="auto"
        >
          <SkeletonCircle isLoaded={imageLoad} boxSize="200px" margin="auto">
            <Image
              borderRadius="full"
              boxSize="200px"
              src="profile.jpeg"
              objectFit="cover"
              alt="Michael Hall"
              onLoad={() => setImageLoad(true)}
            />
          </SkeletonCircle>
          <Flex
            direction="column"
            pl={{ base: 0, lg: 10 }}
            mt={{ base: 10, lg: 0 }}
          >
            <Heading
              fontSize={{ base: `4xl`, md: `4xl`, lg: `6xl` }}
              textAlign={{ base: `center`, lg: `left` }}
            >
              Welcome to my website!
            </Heading>
            <chakra.p
              textAlign={{ base: `center`, lg: `left` }}
              fontSize="xl"
              mt={7}
            >
              Im a student currently studying biochemistry at the University of
              Kent
              <br />
              Some of my interests include: {` `}
              <chakra.span
                ml={3}
                fontSize="4xl"
                fontWeight="semibold"
                position="relative"
                textTransform="capitalize"
                _after={{
                  content: `''`,
                  /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                  outline: `1px solid transparent`,
                  width: `100%`,
                  height: `30%`,
                  position: `absolute`,
                  bottom: 1,
                  left: 0,
                  bg: useColorModeValue(`brand.primary`, `gray.600`),
                  zIndex: -1,
                }}
              >
                photography
              </chakra.span>
            </chakra.p>
          </Flex>
        </Grid>
      </Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        width="full"
        style={{
          alignSelf: `flex-end`,
          position: `absolute`,
          bottom: 0,
          left: 0,
          zIndex: -3,
        }}
      >
        <path
          fill="#47d185"
          fillOpacity="0.3"
          d="M0,288L40,266.7C80,245,160,203,240,170.7C320,139,400,117,480,133.3C560,149,640,203,720,240C800,277,880,299,960,272C1040,245,1120,171,1200,160C1280,149,1360,203,1400,229.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>
    </>
  );
}
