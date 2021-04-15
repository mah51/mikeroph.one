import React from 'react';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
  chakra,
  useColorMode,
  useColorModeValue,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { BiMoon, BiSun } from 'react-icons/bi';
import Link from 'next/link';

const links = [
  {
    name: `About me`,
    link: `/about`,
  },
  {
    name: `Projects`,
    link: `/projects`,
  },
  {
    name: `Resume`,
    link: `/resume`,
  },
];

function Nav() {
  const SwitchIcon = useColorModeValue(BiMoon, BiSun);
  const text = useColorModeValue(`dark`, `light`);
  const { toggleColorMode: toggleMode } = useColorMode();
  return (
    <chakra.header width="full">
      <chakra.nav mx="auto" p={3}>
        <Flex
          margin="auto"
          justifyContent="space-between"
          maxW="full"
          width={{ base: `7xl` }}
        >
          <ChakraLink href="/">Michael Hall</ChakraLink>
          <HStack spacing={8}>
            {links.map(({ link, name }, i) => (
              <ChakraLink
                href={link}
                key={i.toString() + name}
                fontSize="lg"
                fontWeight="semibold"
                position="relative"
                textTransform="capitalize"
                _after={{
                  transition: `all 0.25s ease-in-out`,
                  content: `''`,
                  /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                  outline: `1px solid transparent`,
                  width: `0%`,
                  height: `30%`,
                  position: `absolute`,
                  bottom: 1,
                  left: 0,
                  bg: useColorModeValue(`brand.primary`, `gray.600`),
                  zIndex: -1,
                }}
                _hover={{
                  _after: {
                    width: `100%`,
                  },
                  color: useColorModeValue(`gray.900`, `brand.primary`),
                }}
              >
                {name}
              </ChakraLink>
            ))}
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="basic"
              >
                Other
              </MenuButton>
              <MenuList>
                <MenuItem>Do something else..</MenuItem>
                <MenuDivider />
                <MenuItem as="a" href="/api/signout">
                  Sign Out
                </MenuItem>
              </MenuList>
            </Menu>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              title={`Switch to ${text} mode`}
              variant="ghost"
              onClick={toggleMode}
              icon={<SwitchIcon size={25} />}
            />
          </HStack>
        </Flex>
      </chakra.nav>
    </chakra.header>
  );
}

export default Nav;
