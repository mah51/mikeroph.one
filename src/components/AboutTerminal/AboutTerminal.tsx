import React from 'react';
import { Flex, useColorModeValue, chakra, Stack } from '@chakra-ui/react';
import content from '@/data/aboutMe';
import styled from '@emotion/styled';

const StatusButton = styled(chakra.span)`
  height: 12px;
  width: 12px;
  border-radius: 999px;

  background-color: red;
`;

const AboutTerminal = (): JSX.Element => {
  return (
    <Flex direction='column' minH='300px' width='70%' maxW='7xl' mx='auto' mt={16}>
      <Flex width='full' bg={`${useColorModeValue('rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)')}`}>
        <Stack isInline>
          <StatusButton color={'green'} />
          <StatusButton />
          <StatusButton />
        </Stack>
      </Flex>
      <Flex
        width='full'
        height='full'
        position='relative'
        borderBottomRadius='2xl'
        border={'1px solid'}
        borderColor={useColorModeValue('gray.300', 'gray.600')}
        overflow='hidden'
        bg={'transparent'}
      >
        <Flex
          borderBottomRadius='2xl'
          width='full'
          height='full'
          bg={`${useColorModeValue('rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)')}`}
          position='absolute'
          top={0}
          left={0}
          zIndex='-5'
        ></Flex>
        <Flex p={5}>{content.map(statement => statement.input + statement.return)}</Flex>
      </Flex>
    </Flex>
  );
};

export default AboutTerminal;
