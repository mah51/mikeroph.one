import React, { useEffect } from 'react';
import {
  Flex,
  useColorModeValue,
  chakra,
  Stack,
  Text,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import content from '@/data/aboutMe';
import styled from '@emotion/styled';
import Statement from '../Statement';

const StatusButton = styled(chakra.span)`
  height: 12px;
  width: 12px;
  border-radius: 999px;
`;

const AboutTerminal = (): JSX.Element => {
  const [visibleIndex, setVisibleIndex] = React.useState(0);
  const [finished, setFinished] = React.useState(false);
  const { colorMode } = useColorMode();
  useEffect(() => {
    if (visibleIndex === content({ colorMode }).length) {
      setFinished(true);
    }
  }, [visibleIndex, colorMode]);
  return (
    <Flex direction='column' minH='300px' width='full' maxW='7xl' mx='auto' mt={16}>
      <Flex
        width='full'
        position='relative'
        justifyContent='flex-start'
        alignItems='center'
        height='36px'
        borderTopRadius={'2xl'}
        bg={`${useColorModeValue('rgba(0, 0, 0, 0.15)', 'rgba(0, 0, 0, 0.4)')}`}
      >
        <Stack isInline ml={5}>
          <StatusButton bg={useColorModeValue('red.400', 'red.400')} />
          <StatusButton bg={useColorModeValue('orange.400', 'orange.400')} />
          <StatusButton bg={useColorModeValue('brand.600', 'brand.500')} />
        </Stack>
        <Flex
          mx={'auto'}
          height='36px'
          alignItems='center'
          width='full'
          position='absolute'
          justifyContent='center'
        >
          <Text>{finished ? 'Executed' : 'Executing'}: introduceSelf.js</Text>
        </Flex>
      </Flex>
      <Flex
        width='full'
        height='full'
        position='relative'
        borderBottomRadius='2xl'
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
        <VStack width='full' spacing={3} alignItems='flex-start' p={5} direction='column'>
          {content({ colorMode }).map((statement, i) => {
            return (
              <Statement
                thisIndex={i}
                setVisibleIndex={setVisibleIndex}
                visibleIndex={visibleIndex}
                key={i.toString()}
                {...statement}
              />
            );
          })}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default AboutTerminal;
