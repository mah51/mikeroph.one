import React from 'react';
import {
  Flex,
  chakra,
  useColorModeValue,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useHotkeys } from 'react-hotkeys-hook';

interface StatementProps {
  input: string;
  return: string;
  visibleIndex: number;
  thisIndex: number;
  setVisibleIndex: (x: number | ((x: number) => number)) => void;
}

const Statement = ({
  input,
  return: result,
  visibleIndex,
  thisIndex,
  setVisibleIndex,
}: StatementProps): JSX.Element => {
  const [displayedIndex, setDisplayedIndex] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);
  useHotkeys('enter', () => {
    if (thisIndex === visibleIndex) {
      setDisplayedIndex(input.length);
      setShowResult(true);
      setTimeout(() => {
        setVisibleIndex((x) => x + 1);
      }, 400);
    }
  });
  const visible: boolean = thisIndex <= visibleIndex;
  React.useEffect(() => {
    if (!visible) {
      return;
    }
    if (showResult) {
      return;
    }
    if (visibleIndex !== 0) {
      if (displayedIndex >= input.length) {
        setTimeout(() => {
          setShowResult(true);
        }, 200);

        setTimeout(() => {
          setVisibleIndex(visibleIndex + 1);
        }, 500);
      }
    }
    if (visibleIndex === 0 && displayedIndex === 0) {
      setTimeout(() => {
        setDisplayedIndex((i) => i + 1);
      }, 3000);
      return;
    }
    setTimeout(() => {
      setDisplayedIndex(displayedIndex + 1);
    }, 25 + Math.random() * 75);
  }, [
    displayedIndex,
    input.length,
    showResult,
    visibleIndex,
    setVisibleIndex,
    thisIndex,
    visible,
  ]);
  const initialState =
    !showResult && displayedIndex >= input.length && thisIndex === 0;

  const shownInput = input.substring(0, displayedIndex);
  return (
    <>
      <VStack
        spacing={1}
        alignItems="flex-start"
        visibility={visible ? 'visible' : 'hidden'}
      >
        <Flex fontFamily="Ubuntu Mono" fontSize="lg">
          <chakra.span
            mr={2}
            color={useColorModeValue('purple.500', 'purple.300')}
            fontWeight="bold"
          >
            &gt;
          </chakra.span>{' '}
          {shownInput}
        </Flex>
        <Text
          fontFamily="Ubuntu Mono"
          fontSize="lg"
          color={useColorModeValue('gray.500', 'gray.400')}
          visibility={showResult || initialState ? 'visible' : 'hidden'}
          alignSelf="flex-start"
          dangerouslySetInnerHTML={{
            __html: initialState
              ? 'Press enter to see what I am about'
              : result,
          }}
        />
      </VStack>
    </>
  );
};

export default Statement;
