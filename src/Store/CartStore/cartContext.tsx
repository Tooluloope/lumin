/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { cartItem } from './types';

const CartContext = React.createContext<{
	cart: cartItem[];
	addProductToCart: (productId: number) => void;
	removeProductFromCart: (productId: number) => void;
}>({
	cart: [],
	addProductToCart(productId) {
		// do nothing.
	},
	removeProductFromCart(productId) {
		// do nothing.
	},
});

export default CartContext;
