import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/global.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Loader from '@/Components/Loader';
import { DefaultSeo } from 'next-seo';
import PlausibleProvider from 'next-plausible';
import AppLayout from '../Components/AppLayout';
import theme from '../../theme';

const queryClient = new QueryClient();
export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
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

  return (
    <>
      <DefaultSeo
        defaultTitle="Michael Hall"
        titleTemplate="%s | Michael Hall"
        openGraph={{
          title: `Michael Hall`,
          type: `website`,
          site_name: `Michael Hall`,
          images: [
            {
              url: `https://www.michael-hall.me/static/images/profile.jpeg`,
              alt: `Profile Picture`,
            },
          ],
        }}
        description="The purpose of this site is for me to test things out & maybe show some things off."
      />
      <ChakraProvider theme={theme}>
        <PlausibleProvider
          domain="michael-hall.me"
          selfHosted
          trackOutboundLinks
          enabled={process.env.NODE_ENV === 'production'}
          customDomain={'http://stats.michael-hall.me:8000'}
        >
          {loading ? (
            <Loader />
          ) : (
            <QueryClientProvider client={queryClient}>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </QueryClientProvider>
          )}
        </PlausibleProvider>
      </ChakraProvider>
    </>
  );
}
