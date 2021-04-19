import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/global.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppLayout from '../Components/AppLayout';
import theme from '../../theme';

const queryClient = new QueryClient();
export default function MyApp({ Component, pageProps }: AppProps) {
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
