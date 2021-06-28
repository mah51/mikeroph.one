import { getTotalCharCode } from '@/utils/utils';
import { Stack, Tag, TagLeftIcon, TagLabel, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import { FaDiscord, FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { SiMarkdown } from 'react-icons/si';
import { NextJSIcon, SemanticIcon, TypeScriptIcon } from '../Icons';

const tagDict = {
  React: FaReact,
  'Next.JS': NextJSIcon,
  TypeScript: TypeScriptIcon,
  Node: IoLogoNodejs,
  'Chakra-UI': BsFillLightningFill,
  MDX: SiMarkdown,
  'Discord.JS': FaDiscord,
  'Semantic-UI': SemanticIcon,
};

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps): JSX.Element => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  return (
    <Stack height='25px' isInline>
      {tags?.map(tag => (
        <Tag
          key={tag}
          colorScheme={`${
            ['red', 'orange', 'yellow', 'green', 'brand', 'teal', 'blue', 'cyan', 'pink', 'purple'][
              getTotalCharCode(tag) % 10
            ]
          }`}
          size={isLargerThan800 ? 'md' : 'sm'}
        >
          <TagLeftIcon marginInlineEnd={'6px'} as={tagDict[tag]}></TagLeftIcon>

          <TagLabel fontWeight={'600'}>{tag}</TagLabel>
        </Tag>
      ))}
    </Stack>
  );
};

export default Tags;
