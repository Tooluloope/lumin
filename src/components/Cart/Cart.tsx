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
} from '@chakra-ui/react';

import { CartItem } from '../CartItem';

const Cart = ({ onOpen, isOpen, onClose }) => {
	const b = '';
	return (
		<Drawer placement="right" onClose={onClose} isOpen={isOpen} size="lg">
			<DrawerOverlay>
				<DrawerContent bg="rgb(242, 242, 239)">
					<DrawerCloseButton
						top="30px"
						left={10}
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
					<DrawerHeader display="flex" justifyContent="center" alignItems="center">
						<Text> Your Cart</Text>
					</DrawerHeader>
					<DrawerBody pt={10} pl={10}>
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
					</DrawerBody>
					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button color="blue">Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
};

export default Cart;
