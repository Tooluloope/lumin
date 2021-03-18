import { getInitialState, persistState } from '@/utils/helpers';
import React, { useEffect, useReducer } from 'react';
import { STORAGE_KEY } from '..';
import CartContext from './cartContext';
import { cartReducer } from './reducer';
import { cartItem, CART_ACTION } from './types';

const CartState: React.FC = ({ children }) => {
	const cart = (getInitialState(STORAGE_KEY.CART) ?? []) as cartItem[];

	const [cartState, dispatch] = useReducer(cartReducer, { cart });

	const addProductToCart = (productId: number) => {
		dispatch({ type: CART_ACTION.ADD_PRODUCT, productId });
	};

	const removeProductFromCart = (productId: number) => {
		dispatch({ type: CART_ACTION.REMOVE_PRODUCT, productId });
	};
	const totalQuantity = cartState.cart.reduce((prev, cur) => prev + Number(cur.quantity), 0);

	useEffect(() => persistState(STORAGE_KEY.CART, cartState.cart), [cartState]);

	return (
		<CartContext.Provider
			value={{
				cart: cartState.cart,
				addProductToCart,
				removeProductFromCart,
				totalQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartState;
