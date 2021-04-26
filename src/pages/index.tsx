import {
  Box,
  Flex,
  Heading,
  Image,
  chakra,
  useColorModeValue,
  Skeleton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { NextSeo } from 'next-seo';

export default function Home() {
  const [imageLoad, setImageLoad] = useState(false);

  return (
    <>
      <NextSeo title="Home" />
      <Box minH="100vh" width="full">
        {/* Im not actually too sure why this needs to be here, but without this additional flex
        the body doesn't begin at the top of the page... */}
        <Flex>
          <Flex
            p={{ base: 0, sm: 16 }}
            direction={{ base: `column`, lg: `row` }}
            mt="max(calc(50vh - 200px), 100px)"
            alignItems="center"
            mx="auto"
          >
            <Skeleton
              isLoaded={imageLoad}
              boxSize="250px"
              borderRadius="2xl"
              m="auto"
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
              alignSelf="center"
              direction="column"
              pl={{ base: 0, lg: 10 }}
              my={{ base: 10, lg: 0 }}
            >
              <Heading
                bgGradient={`linear(to-r, ${useColorModeValue(
                  `brand.600`,
                  `brand.400`,
                )}, ${useColorModeValue(
                  `teal.600`,
                  `teal.400`,
                )}, ${useColorModeValue(`blue.600`, `blue.300`)})`}
                className="moving-grad"
                bgClip="text"
                fontSize={{ base: `5xl`, lg: `7xl` }}
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
                {/* <br />
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
                     Fixes anti-aliasing issue in chrome that leaves one pixel'
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
                </chakra.span> */}
              </chakra.p>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
