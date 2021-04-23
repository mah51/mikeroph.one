import {
  Box,
  Flex,
  Heading,
  Image,
  SkeletonCircle,
  chakra,
  useColorModeValue,
  useBreakpointValue,
  Skeleton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { NextSeo } from 'next-seo';

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
    <>
      <NextSeo title="Home" />
      <Box minH="100vh" width="full">
        <Flex
          position="relative"
          _after={{
            content: `""`,
            background: `url(./static/images/torus.png)`,
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
            background: `url(./static/images/boi.png)`,
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
              background: `url(./static/images/helix.png)`,
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
            mt="calc(50vh - 200px)"
            mx="auto"
          >
            <Skeleton
              isLoaded={imageLoad}
              boxSize="250px"
              margin="auto"
              borderRadius="2xl"
              ml={10}
            >
              <Image
                borderRadius="2xl"
                boxSize="250px"
                src="./static/images/profile.jpeg"
                objectFit="cover"
                alt="Michael Hall"
                onLoad={() => setImageLoad(true)}
              />
            </Skeleton>
            <Flex
              alignSelf="space-between"
              direction="column"
              pl={{ base: 0, lg: 10 }}
              my={{ base: 10, lg: 0 }}
            >
              <Heading
                bgGradient={`linear(to-r, ${useColorModeValue(
                  `brand.600`,
                  `brand.400`,
                )}, ${useColorModeValue(`blue.600`, `blue.300`)})`}
                bgClip="text"
                fontSize={{ base: `4xl`, md: `5xl`, lg: `7xl` }}
                textAlign={{ base: `center`, lg: `left` }}
              >
                Hi, I&apos;m Michael!
              </Heading>
              <chakra.p
                maxW="650px"
                textAlign={{ base: `center`, lg: `left` }}
                fontSize="xl"
                mt={2}
              >
                Welcome to my website! The purpose of this site is for me to
                test things out & maybe show some things off. I&apos;m a uni
                student studying biochemistry in the UK.
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
      </Box>
    </>
  );
}
