import { Flex, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { Link as ChakraLink, Text } from '@chakra-ui/react';
import LineHeading from '../LineHeading';

interface CustomLinkProps {
  href: string;
}

export const CustomLink: React.FC<CustomLinkProps> = (
  props
): React.ReactElement => {
  const { colorMode } = useColorMode();
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <ChakraLink
          width="calc(100% + 28px)"
          position="absolute"
          ml={'-28px'}
          height="full"
          maxW="700px"
          {...props}
          cursor="pointer"
          _after={{
            content: "'#'",
            visibility: 'hidden',
            lineHeight: '52px',
            color: colorMode === 'light' ? 'gray.400' : 'gray.600',
          }}
          _hover={{
            _after: {
              visibility: 'visible',
              textDecoration: 'none',
            },
          }}
        />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

export const CustomTitle: React.FC<any> = (props): React.ReactElement => {
  const title = props.children[0].props.parentName;
  return (
    <Flex>
      <LineHeading
        as={title}
        fontSize={
          title === 'h6' ? 'lg' : (5 - Number(title[1])).toString() + 'xl'
        }
        my={3}
        {...props}
      >
        {props.children}
      </LineHeading>
    </Flex>
  );
};

export const CustomText: React.FC<{ children: string }> = ({
  children,
}): React.ReactElement => {
  return <Text fontSize={'md'}>{children}</Text>;
};
