import React, { useEffect, useState } from 'react';
import { Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

function Skill({ number, label }: { number: number; label: string }) {
  const [highlighted, setHighlighted] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [highlighted]);
  return (
    <VStack alignItems="flex-start">
      <Text fontWeight="semibold" fontSize="xl">
        {label}
      </Text>
      <Flex width="500px" height="10px" mx="auto">
        <SimpleGrid columns={5} width="100%" spacingX={3} height="100%">
          <AnimatePresence exitBeforeEnter>
            {new Array(5)
              .fill(
                <div
                  style={{
                    width: `100%`,
                    height: `100%`,
                    border: `1px solid var(--chakra-colors-brand-500)`,
                  }}
                />,
              )
              .map((div: any, index: number) => {
                console.log(div);
                if (index > highlighted) {
                  return div;
                }
                return (
                  <motion.div
                    style={{
                      width: `0%`,
                      border: `1px solid var(--chakra-colors-brand-500)`,
                      backgroundColor: `var(--chakra-colors-brand-500)`,
                    }}
                    animate={{ width: `100%` }}
                    onAnimationComplete={() => {
                      if (number !== highlighted) {
                        setHighlighted(highlighted + 1);
                      }
                    }}
                    transition={{ duration: 0.5 }}
                  />
                );
              })}
          </AnimatePresence>
        </SimpleGrid>
      </Flex>
    </VStack>
  );
}

export default Skill;
