import {
	Box,
	Text,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerFooter,
	Button,
	Flex,
	Select,
} from '@chakra-ui/react';

import { CartItem } from '../CartItem';

const Cart = ({ onOpen, isOpen, onClose }) => {
	const b = '';
	return (
		<Drawer placement="right" onClose={onClose} isOpen={isOpen} size="lg">
			<DrawerOverlay>
				<DrawerContent bg="rgb(242, 242, 239)">
					<DrawerCloseButton
						top="20px"
						left={6}
						border="1px solid rgb(198, 204, 199)"
						w="1.5rem"
						h="1.5rem"
						borderRadius="100%"
					>
						<Box
							transform="rotateY(-180deg)"
							width="12px"
							height="12px"
							as="svg"
							viewBox="0 0 256 512"
							focusable="false"
							role="presentation"
						>
							<path
								fill="currentColor"
								d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
							/>
						</Box>
					</DrawerCloseButton>
					<DrawerHeader textAlign="center">
						<Text> Your Cart</Text>
						<Select
							border="0px solid #ACAFAD"
							borderRadius={0}
							w="80px"
							h="28px"
							fontSize="12px"
							bg="white"
							mt={2}
						>
							<option>NGN</option>
						</Select>
					</DrawerHeader>
					<DrawerBody>
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
					</DrawerBody>
					<DrawerFooter
						display="block"
						borderTop="1px solid #d0d0d0"
						boxShadow="0 -4px 12px rgb(0 0 0 / 15%)"
						py={10}
					>
						<Flex justify="space-between">
							<Text>Subtotal</Text>
							<Box fontSize={{ base: '13px', md: '16px' }}>
								<Text as="span" mr={1}>
									NGN
								</Text>
								28,000.00
							</Box>
						</Flex>

						<Button
							onClick={onOpen}
							h="50px"
							bg="white"
							fontWeight="normal"
							border="1px solid"
							borderColor="brand.100"
							w="full"
							color="brand.100"
							borderRadius={0}
							mx="auto"
							textTransform="uppercase"
							mt={10}
							_hover={{
								background: 'white',
							}}
							_active={{
								background: 'white',
							}}
							letterSpacing="0.2rem"
							fontSize={{ base: '12px', md: '12px' }}
						>
							Proceed to checkout
						</Button>

						<Button
							onClick={onOpen}
							mt={15}
							h="50px"
							bg="brand.100"
							fontWeight="normal"
							w="full"
							color="rgb(252, 252, 249)"
							borderRadius={0}
							mx="auto"
							textTransform="uppercase"
							_hover={{
								background: 'brand.500',
							}}
							_active={{
								background: 'brand.500',
							}}
							letterSpacing="0.2rem"
							fontSize={{ base: '12px', md: '12px' }}
						>
							Proceed to checkout
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
};

export default Cart;
