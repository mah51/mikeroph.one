import {
  Box,
  Flex,
  Heading,
  Image,
  SkeletonCircle,
  chakra,
  useColorModeValue,
  useBreakpointValue,
  MenuButton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import Head from 'next/head';

const interests = [
  `photography`,
  `programming`,
  `web development`,
  `sailing`,
  `biology`,
  `immunology`,
  `gaming`,
].sort(() => 0.5 - Math.random());

export default function Home() {
  const breakpoint = useBreakpointValue({ base: `base`, md: `md` });

  const [imageLoad, setImageLoad] = useState(false);

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((i) => i + 1),
      7000, // every 10 seconds the interest changes
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Box minH="100vh" width="full">
      <Flex
        position="relative"
        _after={{
          content: `""`,
          background: `url(torus.png)`,
          top: `20vh`,
          left: `7vw`,
          minWidth: `150px`,
          minHeight: `150px`,
          maxWidth: `400px`,
          maxHeight: `400px`,
          width: `17vw`,
          height: `17vw`,
          backgroundSize: `cover`,
          position: `absolute`,
          backgroundRepeat: `no-repeat`,
          zIndex: -100,
          filter: ` blur(13px)`,
        }}
        _before={{
          content: `""`,
          background: `url(boi.png)`,
          top: `13vh`,
          right: `8vw`,
          minWidth: `100px`,
          minHeight: `100px`,
          maxWidth: `250px`,
          maxHeight: `250px`,
          width: `12vw`,
          height: `12vw`,
          backgroundSize: `cover`,
          position: `absolute`,
          backgroundRepeat: `no-repeat`,
          zIndex: -100,
          filter: ` blur(13px)`,
        }}
      >
        <Flex
          _before={{
            content: `""`,
            background: `url(helix.png)`,
            top: breakpoint === `base` ? `75vh` : `60vh`,
            right: `30vw`,
            minWidth: `300px`,
            minHeight: `300px`,
            maxWidth: `700px`,
            maxHeight: `700px`,
            width: `20vw`,
            height: `20vw`,
            backgroundSize: `cover`,
            position: `absolute`,
            backgroundRepeat: `no-repeat`,
            zIndex: -100,
            filter: ` blur(13px)`,
          }}
          p={{ base: 0, sm: 16 }}
          direction={{ base: `column`, lg: `row` }}
          mt="calc(50vh - 250px)"
          mx="auto"
        >
          <SkeletonCircle isLoaded={imageLoad} boxSize="250px" margin="auto">
            <Image
              borderRadius="full"
              boxSize="250px"
              src="profile.jpeg"
              objectFit="cover"
              alt="Michael Hall"
              onLoad={() => setImageLoad(true)}
            />
          </SkeletonCircle>
          <Flex
            alignSelf="center"
            direction="column"
            pl={{ base: 0, lg: 10 }}
            my={{ base: 10, lg: 0 }}
          >
            <Heading
              fontSize={{ base: `4xl`, md: `4xl`, lg: `6xl` }}
              textAlign={{ base: `center`, lg: `left` }}
            >
              Hi, I'm Michael!
            </Heading>
            <chakra.p
              maxW="650px"
              textAlign={{ base: `center`, lg: `left` }}
              fontSize="xl"
              mt={7}
            >
              Welcome to my website! The purpose of this site is for me to test
              things out & maybe show some things off. I'm a uni student
              studying biochemistry in the UK.
              <br />
              Some of my interests include: {` `}
              <chakra.span
                ml={3}
                fontSize="4xl"
                fontWeight="semibold"
                position="relative"
                textTransform="capitalize"
                _after={{
                  transition: `all 0.25s ease-in-out`,
                  content: `''`,
                  /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                  outline: `1px solid transparent`,
                  width: `100%`,
                  height: `30%`,
                  position: `absolute`,
                  bottom: 1,
                  left: 0,
                  bg: useColorModeValue(`brand.200`, `brand.900`),
                  zIndex: -1,
                }}
              >
                <TextTransition
                  springConfig={presets.wobbly}
                  inline
                  className="transition"
                  text={interests[index % interests.length]}
                />
              </chakra.span>
            </chakra.p>
          </Flex>
        </Flex>
      </Flex>
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
          filter: `blur(10px)`,
        }}
      >
        <path
          fill="url(#grad1)"
          fillOpacity={useColorModeValue(`0.5`, `0.15`)}
          d="M0,288L40,266.7C80,245,160,203,240,170.7C320,139,400,117,480,133.3C560,149,640,203,720,240C800,277,880,299,960,272C1040,245,1120,171,1200,160C1280,149,1360,203,1400,229.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>
    </Box>
  );
}
