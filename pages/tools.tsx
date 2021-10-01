import React from 'react';
import {
  Flex,
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import LineHeading from '@/components/LineHeading';
import ToolGrid from '@/components/ToolGrid';
import { AiFillApple, AiFillChrome, AiFillWindows, AiOutlineDesktop } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import { NextSeo } from 'next-seo';

function Tools(): React.ReactElement {
  return (
    <>
      <NextSeo title='Tools' />
      <Flex direction='column' alignItems='center' width='full' minH='100vh' mx='auto' maxW='6xl'>
        <LineHeading
          mt='28'
          fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
          textAlign='center'
        >
          Tools
        </LineHeading>
        <Text mt={3}>Some tools that I find useful :).</Text>
        <Tabs variant='soft-rounded' colorScheme='blue' align='center' w='100%' mt='10' mb='24'>
          <TabList display='flex' flexWrap='wrap'>
            <Tab
              bg={useColorModeValue(`white.100`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `red.800`,
                bg: `red.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={AiFillApple} />
                <Text>Mac</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `pink.800`,
                bg: `pink.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={AiFillWindows} />
                <Text>Windows</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `purple.800`,
                bg: `purple.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={AiFillChrome} />
                <Text>Chrome</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `blue.800`,
                bg: `blue.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={AiOutlineDesktop} />
                <Text>Web</Text>
              </HStack>
            </Tab>
            <Tab
              bg={useColorModeValue(`white`, `gray.800`)}
              color={useColorModeValue(`gray.600`, `gray.500`)}
              _selected={{
                color: `teal.800`,
                bg: `teal.100`,
              }}
              mr={2}
              mt={2}
            >
              <HStack spacing={1}>
                <Icon as={BsPhone} />
                <Text>IOS</Text>
              </HStack>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ToolGrid filter='mac' />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter='windows' />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter='chrome' />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter='web' />
            </TabPanel>
            <TabPanel>
              <ToolGrid filter='ios' />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default Tools;
