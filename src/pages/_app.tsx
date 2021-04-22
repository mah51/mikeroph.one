import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/global.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '@/Components/Loader';
import AppLayout from '../Components/AppLayout';
import theme from '../../theme';

const queryClient = new QueryClient();
export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    document.documentElement.lang = `en-GB`;
    const start = () => {
      console.log(`start`);
      setLoading(true);
    };
    const end = () => {
      console.log(`findished`);
      setLoading(false);
    };
    router.events.on(`routeChangeStart`, start);
    router.events.on(`routeChangeComplete`, end);
    router.events.on(`routeChangeError`, end);
    return () => {
      router.events.off(`routeChangeStart`, start);
      router.events.off(`routeChangeComplete`, end);
      router.events.off(`routeChangeError`, end);
    };
  }, []);

  return (
    <>
      {loading ? (
        <h1
          style={{
            marginTop: `30vh`,
            zIndex: 9999,
            textAlign: `center`,
            fontSize: `5em`,
          }}
        >
          Loading!
        </h1>
      ) : (
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </QueryClientProvider>
        </ChakraProvider>
      )}
    </>
  );
}
