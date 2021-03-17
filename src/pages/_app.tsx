import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const breakpoints = createBreakpoints({
    sm: '360px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
    '2xl': '96em',
  });

  const theme = extendTheme({
    colors: {
      brand: {
        50: 'rgba(205, 227, 202, 0.15)',
        100: 'rgba(205, 227, 202, 0.15)',
        200: '#181818',
        300: 'rgba(205, 227, 202, 0.2)',
        400: '#2A2A2A',
        500: '#519652',
        600: '#3e7543',
        700: '#86BB7F',
        800: '#193220',
        900: '#011306',
      },
    },
  });
  return (
    <ChakraProvider theme={{ ...theme, breakpoints }}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
