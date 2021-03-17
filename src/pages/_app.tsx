import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import '@/styles/global.css';
import { Header } from '@/components';

export default function MyApp({ Component, pageProps }: AppProps) {
	const breakpoints = createBreakpoints({
		sm: '360px',
		md: '768px',
		lg: '992px',
		xl: '1440px',
		'2xl': '96em',
	});

	const theme = extendTheme({
		colors: {
			brand: {
				100: 'rgb(75, 85, 72)',
				200: ' #f5f5f4',
				300: '#ACAFAD',
			},
		},
	});
	return (
		<ChakraProvider theme={{ ...theme, breakpoints }}>
			<Header />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
