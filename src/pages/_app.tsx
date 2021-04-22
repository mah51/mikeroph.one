import { AppProps } from 'next/app';
import { ChakraProvider, useTheme } from '@chakra-ui/react';
import '@/styles/global.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';
import { DefaultSeo } from 'next-seo';
import Router from 'next/router';
import Loader from '@/Components/Loader';
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
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    document.documentElement.lang = `en-GB`;
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on(`routeChangeStart`, start);
    Router.events.on(`routeChangeComplete`, end);
    Router.events.on(`routeChangeError`, end);
    return () => {
      Router.events.off(`routeChangeStart`, start);
      Router.events.off(`routeChangeComplete`, end);
      Router.events.off(`routeChangeError`, end);
    };
  }, []);

  useTheme();
  if (loading) {
    return <Loader />;
  }
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
