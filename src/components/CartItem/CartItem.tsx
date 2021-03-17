import { Box, Flex, VStack, Image, Text, HStack } from '@chakra-ui/react';

const CartItem = () => (
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
				Modern Bathroom Set
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
						<Text as="span">-</Text>
						<Text as="span" px={2}>
							1
						</Text>
						<Text as="span">+</Text>
					</HStack>
					<Box fontSize={{ base: '13px' }}>
						<Text as="span" mr={1}>
							NGN
						</Text>
						28,000.00
					</Box>
				</HStack>
			</Box>
		</VStack>
		<Box w="35%">
			<Image src="https://cdn.shopify.com/s/files/1/2960/5204/products/classic-maintenance_1024x1024_1_1024x1024.png?v=1602810560" />
		</Box>
	</Flex>
);

export default CartItem;
