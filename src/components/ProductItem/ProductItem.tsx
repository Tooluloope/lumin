import { Box, Image, Link, VStack, Text, Flex, Button } from '@chakra-ui/react';

const ProductItem = () => (
	<VStack
		spacing={4}
		align="stretch"
		fontSize={{ base: '13px', md: '16px' }}
		// maxW={{ base: 'full', lg: '245px' }}
		mx="auto"
		textAlign="center"
	>
		<Box>
			<Link>
				<Link display="flex" flexDir="column" alignItems="center" justifyContent="center">
					<Image src="https://cdn.shopify.com/s/files/1/2960/5204/products/classic-maintenance_1024x1024_1_1024x1024.png?v=1602810560" />
					<Text as="h2">Classic Maintenance Set</Text>
				</Link>
			</Link>
		</Box>
		<Flex alignItems="center" justifyContent="center">
			<Text>From:</Text>
			<Text>NGN&nbsp;18,400.00</Text>
		</Flex>
		<Flex alignItems="center" justifyContent="center">
			<Button
				h="50px"
				bg="brand.100"
				fontWeight="semibold"
				w={{ base: 'full', lg: '60%' }}
				color="rgb(252, 252, 249)"
				borderRadius={0}
				mx="auto"
				_hover={{
					background: 'brand.500',
				}}
				_active={{
					background: 'brand.500',
				}}
			>
				Add to Cart
			</Button>
		</Flex>
	</VStack>
);

export default ProductItem;
