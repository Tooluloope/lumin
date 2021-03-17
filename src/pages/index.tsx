import { Box, Container, Grid, Select, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function Home() {
	return (
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
					<Text as="h1" fontSize={{ base: '24px', md: '32px', lg: '48px' }}>
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
			<Box bg="brand.400">
				<Container maxW="6xl" px={10} height="100vh">
					<Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
						<Box w="100%" h="10" bg="blue.500" />
						<Box w="100%" h="10" bg="blue.500" />
						<Box w="100%" h="10" bg="blue.500" />
						<Box w="100%" h="10" bg="blue.500" />
						<Box w="100%" h="10" bg="blue.500" />
						<Box w="100%" h="10" bg="blue.500" />
						<Box w="100%" h="10" bg="blue.500" />
						<Box w="100%" h="10" bg="blue.500" />
						<Box w="100%" h="10" bg="blue.500" />
						<Box w="100%" h="10" bg="blue.500" />
					</Grid>
				</Container>
			</Box>
		</Box>
	);
}
