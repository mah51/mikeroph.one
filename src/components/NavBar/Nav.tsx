import React, { useState } from 'react';
import {
  Box,
  Flex,
  Link as ChakraLink,
  chakra,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { useRouter } from 'next/router';
import { transparentize } from '@chakra-ui/theme-tools';
import styled from '@emotion/styled';
import useScrollPosition from '@/hooks/useScrollPosition.hook';
import { useEffect } from 'react';

const links = [
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: `Projects`,
    link: `/projects`,
  },
  //   {
  //     name: `Research`,
  //     link: `/research`,
  //   },
  {
    type: `dropdown`,
    name: `Other`,
    links: [
      {
        name: `Tools`,
        link: `/tools`,
      },
      {
        name: `Links`,
        link: `/links`,
      },
      //   {
      //     name: `Music`,
      //     link: `/spotify`,
      //   },
    ],
  },
];

function Nav(): JSX.Element {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const [width, setWidth] = useState(0);
  const { y, max } = useScrollPosition();
  const { pathname } = useRouter();

  const blogPage = pathname === '/blog/[slug]';

  useEffect(() => {
    if (blogPage) {
      const newWidth = y / max;
      if (newWidth !== width) {
        setWidth(newWidth * 100);
      }
    }
  }, [y, max, width, blogPage]);

  return (
    <chakra.header
      width="full"
      position="fixed"
      _before={{
        transition: 'all 0.10s',
        transitionTimingFunction: '1 100 10 10',
        content: '""',
        width: width + '%',
        top: 0,
        left: 0,
        height: '6px',
        bg: useColorModeValue('brand.500', 'brand.300'),
        position: 'absolute',
        zIndex: 9999,
      }}
      top={0}
      left={0}
      zIndex={10}
      bg={useColorModeValue(
        `rgba(255, 255, 255, 0.8)`,
        `rgba(26, 33, 41, 0.8)`
      )}
      sx={{ backdropFilter: `saturate(180%) blur(5px)` }}
    >
      <chakra.nav mx="auto" p={3}>
        <Flex
          margin="auto"
          justifyContent="space-between"
          alignContent="center"
          maxW="7xl"
          width="full"
        >
          <Box display="flex" alignContent="center">
            <Link href="/" passHref>
              {router.asPath === '/' ? (
                <AnimatedTitle />
              ) : (
                <ChakraLink
                  fontSize="lg"
                  margin="auto"
                  fontWeight="semibold"
                  position="relative"
                  textTransform="capitalize"
                  _after={{
                    transition: `all 0.25s ease-in-out`,
                    content: `''`,
                    /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                    outline: `1px solid transparent`,
                    width: `0%`,
                    height: `25%`,
                    position: `absolute`,

                    bottom: 1,
                    left: 0,
                    bg:
                      colorMode === 'light'
                        ? transparentize(`brand.500`, 0.46)
                        : transparentize(`brand.500`, 0.36),
                    zIndex: -1,
                  }}
                  _hover={{
                    _after: {
                      width: `100%`,
                    },
                    color: colorMode === 'light' ? `gray.900` : `white`,
                  }}
                  color={colorMode === 'light' ? 'gray.900' : 'white'}
                >
                  Michael Hall
                </ChakraLink>
              )}
            </Link>
          </Box>
          <MobileNav links={links} />
          <DesktopNav links={links} />
        </Flex>
      </chakra.nav>
    </chakra.header>
  );
}

export default Nav;

const AnimatedTitle = () => (
  <CustomChakraLink
    color={useColorModeValue('gray.900', 'white')}
    position="relative"
    fontSize="2xl"
    fontWeight="semibold"
    textAlign="center"
  >
    Michael Hall
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <chakra.svg
      className="path-under"
      position="absolute"
      height="27px"
      bottom={'-14px'}
      left={'-15px'}
      transition={'all 0.2s'}
      transitionTimingFunction="spring(1 10 10 10)"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 265 43"
      fill="none"
      stroke={useColorModeValue('brand.600', 'brand.300')}
      strokeWidth="5px"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    >
      <path
        className="animated-underline"
        d="M16.7 20.2c76.5 4.4 153.6-9.7 229.8-4.1 5.4.4 12.4 2.1 11.7 5.6-67.3 1.7-134.5 5.5-201.2 11.5l87.7-.9c35.2-.4 70.8-.7 104.9 4.6"
      ></path>
    </chakra.svg>
  </CustomChakraLink>
);

const CustomChakraLink = styled(ChakraLink)`
  &:hover {
    text-decoration: none;
  }
  &:hover .path-under {
    transform: translateY(6px);
  }
`;
