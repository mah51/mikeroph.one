import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/global.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import React from 'react';
import SEO from '@/Components/SEO';
import AppLayout from '../Components/AppLayout';
import theme from '../../theme';

const meta = {
  title: `Michael Hall`,
  description: `My personal website, where I test stuff and show off my projects`,
  image: `${process.env.VERCEL_URL}/profile.jpeg`,
  type: `website`,
};

const queryClient = new QueryClient();
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </QueryClientProvider>
        </ChakraProvider>
      </SEO>
    </>
  );
}
