import { Heading, HeadingProps, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const LineHeading = ({ children, ...props }: HeadingProps): JSX.Element => (
  <Heading
    position='relative'
    _before={{
      content: `''`,
      position: `absolute`,
      bottom: 1,
      left: 0,
      height: `30%`,
      width: `100%`,
      bgColor: useColorModeValue(`brand.200`, `brand.500`),
      opacity: useColorModeValue(1, 0.5),
      zIndex: -1,
    }}
    {...props}
  >
    {children}
  </Heading>
)

export default LineHeading
