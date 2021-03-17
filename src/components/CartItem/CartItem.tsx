import { Box, Flex, VStack, Image, Text } from '@chakra-ui/react';

const CartItem = () => (
	<Flex bg="white" align="center" justify="space-between" p={10} my={5}>
		<VStack
			flex={1}
			spacing={4}
			align="stretch"
			// maxW={{ base: 'full', lg: '245px' }}
			mx="auto"
			textAlign="left"
		>
			<Text>Modern Bathroom Set</Text>

			<Text>MADE FOR: Bathroom Set</Text>
			<Text>Dry | 25-34</Text>
			<Text>One time purchase of Two Month supply.</Text>
		</VStack>
		<Box w="35%">
			<Image src="https://cdn.shopify.com/s/files/1/2960/5204/products/classic-maintenance_1024x1024_1_1024x1024.png?v=1602810560" />
		</Box>
	</Flex>
);

export default CartItem;
