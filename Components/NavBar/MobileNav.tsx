import React from 'react';
import {
  Box,
  Button,
  CloseButton,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

function MobileNav({ links }: any) {
  const mobileNav = useDisclosure();
  return (
    <Box display={{ md: `none` }}>
      <IconButton
        aria-label="toggle menu"
        icon={
          mobileNav.isOpen ? (
            <CloseButton style={{ zIndex: 20 }} aria-label="Close menu" />
          ) : (
            <AiOutlineMenu size="1.5em" />
          )
        }
        variant="ghost"
        onClick={mobileNav.isOpen ? mobileNav.onClose : mobileNav.onOpen}
      />

      <VStack
        pos="absolute"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        css={{
          backdropFilter: `saturate(180%) blur(5px)`,
          backgroundColor: useColorModeValue(
            `rgba(255, 255, 255, 0.8)`,
            `rgba(26, 32, 44, 0.8)`,
          ),
        }}
        display={mobileNav.isOpen ? `flex` : `none`}
        flexDirection="column"
        spacing={3}
        rounded="sm"
        shadow="sm"
      >
        <Button as={ChakraLink} href="/" w="full" mt={16} variant="ghost">
          Home
        </Button>
        {links.map((link: any) => {
          if (link.type === `dropdown`) {
            return link.links.map((item: any) => (
              <Button
                as={ChakraLink}
                href={item.link}
                w="full"
                mx={2}
                variant="ghost"
              >
                {item.name}
              </Button>
            ));
          }
          return (
            <Button
              as={ChakraLink}
              href={link.link}
              w="full"
              mx={2}
              variant="ghost"
            >
              {link.name}
            </Button>
          );
        })}
      </VStack>
    </Box>
  );
}

export default MobileNav;
