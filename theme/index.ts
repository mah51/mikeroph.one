import { extendTheme } from '@chakra-ui/react';
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      primary: `#47d185`,
    },
  },
});

export default theme;
