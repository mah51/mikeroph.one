import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
    Button: {
      variants: {
        ghost: (props) => ({}),
      },
    },
  },
  styles: {
    global: (props: any) => ({
      '*': {
        _selection: {
          color: props.colorMode === `dark` ? `black` : `white`,
          bg: props.colorMode === `dark` ? `brand.300` : `brand.600`,
        },
      },
    }),
  },
  colors: {
    brand: {
      primary: `#47d185`,
      50: `#e1f7eb`,
      100: `#c4f0d8`,
      200: `#a7e9c5`,
      300: `#8ae1b1`,
      400: `#50d38b`,
      500: `#32cc77`,
      600: `#2bae66`,
      700: `#1d7444`,
      800: `#1d7444`,
      900: `#155733`,
    },
  },
});

export default theme;
