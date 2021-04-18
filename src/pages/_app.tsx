import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/global.css';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppLayout from '../../Components/AppLayout';
import theme from '../../theme';

const meta = {
  title: `Michael Hall`,
  description: `My personal website, where I test stuff and show off my projects`,
};
const queryClient = new QueryClient();
export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <ChakraProvider theme={theme}>
        <DefaultSeo
          additionalMetaTags={[
            {
              name: `viewport`,
              content: `width=device-width, initial-scale=1`,
            },
          ]}
          defaultTitle={meta.title}
          titleTemplate="%s | Michael Hall"
          description={meta.description}
          canonical={router.pathname}
          openGraph={{
            url: `${process.env.VERCEL_URL}${router.pathname}`,
            title: meta.title,
            description: meta.description,
          }}
        />
        <QueryClientProvider client={queryClient}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}
