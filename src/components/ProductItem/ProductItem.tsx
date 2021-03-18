import CartContext from '@/Store/CartStore/cartContext';
import { TDrawer, TProduct } from '@/types';
import { Box, Image, Link, VStack, Text, Flex, Button } from '@chakra-ui/react';
import { useContext } from 'react';

type TProductItem = Pick<TDrawer, 'onOpen'> & {
	product: TProduct;
};

const ProductItem = ({ onOpen, product }: TProductItem) => {
	const { addProductToCart } = useContext(CartContext);

	const handleAddToCart = () => {
		addProductToCart(product.id);
		onOpen();
	};

	return (
		<VStack
			spacing={4}
			align="stretch"
			fontSize={{ base: '13px', md: '16px' }}
			mx="auto"
			textAlign="center"
			w="full"
		>
			<Box mx="auto" w={{ base: 'full', lg: '80%' }} height="170px">
				<Link h="full" display="flex" flexDir="column" alignItems="center" justifyContent="center">
					<Image
						// flex="1 1 0%"
						maxW="100%"
						objectFit="contain"
						maxHeight="150px"
						src={product.image_url}
					/>
					<Text mt={5} as="h2">
						{product.title}
					</Text>
				</Link>
			</Box>

			<Flex alignItems="center" justifyContent="center">
				<Text mr={1}>From:</Text>
				<Text>NGN&nbsp;{product.price}</Text>
			</Flex>
			<Flex alignItems="center" justifyContent="center">
				<Button
					onClick={handleAddToCart}
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
					fontSize={{ base: '13px', md: '16px' }}
				>
					Add to Cart
				</Button>
			</Flex>
		</VStack>
	);
};

export default ProductItem;
