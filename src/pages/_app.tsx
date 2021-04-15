import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/global.css';
import AppLayout from '../../Components/AppLayout';
import theme from '../../theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}
