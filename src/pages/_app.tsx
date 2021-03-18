import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import '@/styles/global.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { CartState, CurrencyState } from '@/Store';

export default function MyApp({ Component, pageProps }: AppProps) {
	const breakpoints = createBreakpoints({
		sm: '360px',
		md: '768px',
		lg: '992px',
		xl: '1440px',
		'2xl': '1536px',
	});

	const theme = extendTheme({
		colors: {
			brand: {
				100: 'rgb(75, 85, 72)',
				200: ' #f5f5f4',
				300: '#ACAFAD',
				400: '#e2e6e3',
				500: 'rgb(43, 46, 43)',
			},
		},
		fonts: {
			body: '"FF Bau Regular", sans-serif',
		},
	});

	const client = new ApolloClient({
		uri: 'https://pangaea-interviews.now.sh/api/graphql',
		cache: new InMemoryCache(),
	});

	return (
		<ChakraProvider theme={{ ...theme, breakpoints }}>
			<ApolloProvider client={client}>
				<CartState>
					<CurrencyState>
						<Component {...pageProps} />
					</CurrencyState>
				</CartState>
			</ApolloProvider>
		</ChakraProvider>
	);
}
