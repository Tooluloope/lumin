import { Cart, ProductItem, ProductLoader } from '@/components';
import { ALL_PRODUCTS } from '@/queries';
import CurrencyContext from '@/Store/CurrencyStore/CurrencyContext';
import { useQuery } from '@apollo/client';
import {
	Box,
	Container,
	Grid,
	Select,
	Text,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useContext } from 'react';
import { TProduct } from '../types/index';

export default function Home() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { currency } = useContext(CurrencyContext);

	const { loading, error, data } = useQuery<{ products: TProduct[] }>(ALL_PRODUCTS, {
		variables: { currency },
	});
	const variant = useBreakpointValue({ base: true, md: false });

	return (
		<>
			<Box py="64px" bg="brand.200">
				<Head>
					<title>Products | Lumin Skincare</title>
					<link rel="icon" href="/favicon.png" />
				</Head>
				<Container
					maxW="7xl"
					mx="auto"
					py={{ base: 10, md: '16', lg: 20 }}
					px={10}
					display={{ base: 'block', lg: 'flex' }}
					justifyContent="space-between"
					alignItems="center"
				>
					<Box mb={{ base: '1.5rem', lg: '0px' }}>
						<Text
							as="h1"
							fontSize={{ base: '24px', md: '32px', lg: '48px' }}
							fontFamily="freight-display-pro,serif"
						>
							All Products
						</Text>
						<Text mt={{ base: '0.5rem', md: '0.75rem' }} fontSize={{ base: '13px', md: '16px' }}>
							A 360° look at Lumin
						</Text>
					</Box>
					<Select
						border="1px solid #ACAFAD"
						borderColor="brand.300"
						borderRadius={0}
						w={{ base: 'block', lg: '400px' }}
						h="50px"
						fontSize="1rem"
						bg="white"
					>
						<option>Filter By</option>
					</Select>
				</Container>
				<Box bg="brand.400" py={16}>
					<Container maxW="6xl" px={5}>
						<Grid
							templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
							gridColumnGap={{ base: 3, md: 6, lg: 9 }}
							gridRowGap="28"
						>
							{loading || error ? (
								<>
									<ProductLoader />
									<ProductLoader />
									<ProductLoader />
									{variant && <ProductLoader />}
								</>
							) : (
								<>
									{data &&
										data.products.map((product) => (
											<ProductItem product={product} key={product.id} onOpen={onOpen} />
										))}
								</>
							)}
						</Grid>
					</Container>
				</Box>
			</Box>
			<Cart data={data} onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
		</>
	);
}
