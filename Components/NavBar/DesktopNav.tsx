import React from 'react';
import {
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
  VStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { ChevronDownIcon } from '@chakra-ui/icons';

function DesktopNav({ links }: any) {
  const SwitchIcon = useColorModeValue(BiMoon, BiSun);
  const text = useColorModeValue(`dark`, `light`);
  const { toggleColorMode: toggleMode } = useColorMode();
  return (
    <HStack spacing={8} display={{ base: `none`, md: `flex` }}>
      {links.map((linkItem: any) => {
        if (linkItem.type !== `dropdown`) {
          return (
            <ChakraLink
              href={linkItem.link}
              key={linkItem.name}
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
                bg: useColorModeValue(`brand.200`, `brand.700`),
                zIndex: -1,
              }}
              _hover={{
                _after: {
                  width: `100%`,
                },
                color: useColorModeValue(`gray.800`, `white`),
              }}
            >
              {linkItem.name}
            </ChakraLink>
          );
        }
        if (linkItem.type === `dropdown`) {
          return (
            <Menu>
              <MenuButton
                colorScheme="brand"
                color={useColorModeValue(`gray.800`, `white`)}
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
                  bg: useColorModeValue(`brand.200`, `brand.900`),
                  zIndex: -1,
                }}
                _hover={{
                  _after: {
                    width: `100%`,
                  },
                  color: useColorModeValue(`gray.800`, `white`),
                }}
              >
                {linkItem.name}
                <Icon as={ChevronDownIcon} />
              </MenuButton>
              <MenuList>
                {linkItem.links.map((item: any) => (
                  <MenuItem as="a" href={item.link} key={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          );
        }
        return null;
      })}
      <HStack spacing={2}>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          title={`Switch to ${text} mode`}
          variant="ghost"
          onClick={toggleMode}
          colorScheme="brand"
          icon={<SwitchIcon size={25} />}
        />
      </HStack>
    </HStack>
  );
}

export default DesktopNav;
