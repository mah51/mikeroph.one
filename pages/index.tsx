import {
  Box,
  Flex,
  Heading,
  Image,
  chakra,
  useColorModeValue,
  Skeleton,
  Link as ChakraLink,
  useBreakpoint,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import AboutTerminal from '@/components/AboutTerminal';

export default function Home(): React.ReactElement {
  const [imageLoad, setImageLoad] = useState(false);
  const bp = useBreakpoint();
  return (
    <>
      <NextSeo title="Home" />

      <Box
        minH="100vh"
        height="full"
        width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
        maxW="7xl"
        mx="auto"
        pt={{ base: '28', sm: '14', md: '16', xl: '20' }}
      >
        {/* Im not actually too sure why this needs to be here, but without this additional flex
        the body doesn't begin at the top of the page... */}
        <Flex
          direction="column"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          height="full"
          width="full"
          p={{ base: 0, sm: 16 }}
        >
          <Flex
            direction={{ base: `column`, lg: `row` }}
            alignItems="center"
            mx="auto"
            my={{ xl: '16' }}
          >
            <Skeleton
              isLoaded={imageLoad}
              boxSize="250px"
              borderRadius="2xl"
              m="auto"
            >
              <Image
                flexGrow={3}
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
              flexGrow={1}
            >
              <Heading
                bgGradient={`linear(to-r, ${useColorModeValue(
                  `brand.600`,
                  `brand.400`
                )}, ${useColorModeValue(
                  `teal.600`,
                  `teal.400`
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
                Welcome to my website! I use this to show some of my{' '}
                <Link href="/projects" passHref>
                  <ChakraLink>projects</ChakraLink>
                </Link>{' '}
                off, and test things out.
                {/* You can see what music I am listening
                to on the{' '}
                <Link href="/music" passHref>
                  <ChakraLink>music page</ChakraLink>
                </Link>{' '}
                or the{' '} */}{' '}
                You can see the{' '}
                <Link href="/links" passHref>
                  <ChakraLink>websites</ChakraLink>
                </Link>{' '}
                &{' '}
                <Link href="/tools" passHref>
                  <ChakraLink>tools</ChakraLink>
                </Link>{' '}
                that I like. Sometimes I even write{' '}
                <Link href="/blog" passHref>
                  <ChakraLink>blogs</ChakraLink>
                </Link>
                . I am currently undertaking a research masters degree in
                Computational Biology at the University of Kent; attempting to
                predict a protein&apos;s function from its sequence using machine learning.
              </chakra.p>
            </Flex>
          </Flex>
          {!['base', 'sm'].includes(bp) && <AboutTerminal />}
        </Flex>
      </Box>
    </>
  );
}
