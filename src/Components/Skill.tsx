import React, { useState, useEffect } from 'react';
import {
  Flex,
  SimpleGrid,
  Text,
  VStack,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Skill({ number, label }: { number: number; label: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <VStack alignItems="flex-start" width="100%">
      <Text fontWeight="semibold" fontSize="xl">
        {label}
      </Text>
      <Flex position="relative" width="100%" height="10px" mx="auto">
        {mounted && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${100 * (number / 5)}%` }}
            transition={{ duration: 2 }}
            style={{
              backgroundColor: useColorModeValue(
                `var(--chakra-colors-brand-600)`,
                `var(--chakra-colors-brand-200)`,
              ),
              height: `10px`,
            }}
          >
            <Flex
              position="absolute"
              width="100%"
              height="100%"
              justifyContent="space-evenly"
            >
              {new Array(4).fill(
                <chakra.div
                  bgColor={useColorModeValue(`white`, `gray.800`)}
                  zIndex={5}
                  width="10px"
                  height="100%"
                />,
              )}
            </Flex>
          </motion.div>
        )}
      </Flex>
    </VStack>
  );
}

export default Skill;
