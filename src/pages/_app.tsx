import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/global.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Loader from '@/Components/Loader';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import AppLayout from '../Components/AppLayout';
import theme from '../../theme';

Router.events.on(`routeChangeStart`, (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on(`routeChangeComplete`, (url) => {
  NProgress.done();
  console.log(`done`);
});
Router.events.on(`routeChangeError`, () => NProgress.done());

const queryClient = new QueryClient();
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.lang = `en-GB`;
  }, []);

  return (
    <>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}
