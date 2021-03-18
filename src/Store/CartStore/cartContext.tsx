/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { cartItem } from './types';
import { getInitialState } from '../../utils/helpers';

const CartContext = React.createContext<{
	cart: cartItem[];
	addProductToCart: (productId: number) => void;
	removeProductFromCart: (productId: number) => void;
	removeProductTotallyFromCart: (productId: number) => void;

	totalQuantity: number;
	subTotal: number;
}>({
	cart: [],
	addProductToCart(productId) {
		// do nothing.
	},
	removeProductFromCart(productId) {
		// do nothing.
	},
	removeProductTotallyFromCart(productId) {
		// do nothing.
	},
	totalQuantity: 0,
	subTotal: 0,
});

export default CartContext;
