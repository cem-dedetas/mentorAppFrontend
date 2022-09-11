import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import { AuthProvider } from '../context/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider>
         <AuthProvider>
            <Component {...pageProps} />
         </AuthProvider>
      </ChakraProvider> 
   );
}

export default appWithTranslation(MyApp);
