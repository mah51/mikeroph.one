import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/global.css';
import Head from 'next/head';
import AppLayout from '../../Components/AppLayout';
import theme from '../../theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ChakraProvider>
    </>
  );
}
