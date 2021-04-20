import { AppProps } from 'next/app';
import { ChakraProvider, useTheme } from '@chakra-ui/react';
import '@/styles/global.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { DefaultSeo } from 'next-seo';
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
  React.useEffect(() => {
    document.documentElement.lang = `en-GB`;
  }, []);

  useTheme();
  return (
    <>
      <DefaultSeo
        defaultTitle={meta.title}
        titleTemplate="%s | Michael Hall"
        description={meta.description}
      />
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
