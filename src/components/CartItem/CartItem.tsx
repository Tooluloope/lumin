import CartContext from '@/Store/CartStore/cartContext';
import CurrencyContext from '@/Store/CurrencyStore/CurrencyContext';
import { Box, Flex, VStack, Image, Text, HStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { cartItem } from '../../Store/CartStore/types';

const CartItem = ({ data }: { data: cartItem }) => {
	const { addProductToCart, removeProductFromCart } = useContext(CartContext);
	const { currency } = useContext(CurrencyContext);

	return (
		<Flex bg="white" align="center" justify="space-between" p={6} my={5}>
			<VStack
				flex={1}
				spacing={1}
				align="stretch"
				// maxW={{ base: 'full', lg: '245px' }}
				mx="auto"
				textAlign="left"
			>
				<Text as="h6" fontSize={{ base: '13px' }}>
					{data.title}
				</Text>
				<Box fontSize={{ base: '10px' }}>
					<Text as="span" fontFamily="FF Bau Medium,san-serif" fontWeight="bold" mr={1}>
						MADE FOR:
					</Text>
					Bathroom Set
				</Box>
				<Text fontSize={{ base: '10px' }}>Dry | 25-34</Text>
				<Text fontSize={{ base: '10px' }}>One time purchase of Two Month supply.</Text>
				<Box>
					<HStack align="center" justifyContent="space-between" mt={3}>
						<HStack border="1px solid" borderColor="brand.300" py={1} px={2}>
							<Text cursor="pointer" onClick={() => removeProductFromCart(data.id)} as="span">
								-
							</Text>
							<Text cursor="pointer" as="span" px={2}>
								{data.quantity}
							</Text>
							<Text onClick={() => addProductToCart(data.id)} as="span">
								+
							</Text>
						</HStack>
						<Box fontSize={{ base: '13px' }}>
							<Text as="span" mr={1}>
								{currency}
							</Text>
							{data.price}
						</Box>
					</HStack>
				</Box>
			</VStack>
			<Box w="35%" px={5}>
				<Image height="80px" width="auto" objectFit="contain" mx="auto" src={data.image_url} />
			</Box>
		</Flex>
	);
};

export default CartItem;
