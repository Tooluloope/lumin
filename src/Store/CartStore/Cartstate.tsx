import React, { useReducer } from 'react';
import CartContext from './cartContext';
import { cartReducer } from './reducer';
import { CART_ACTION } from './types';

const CartState: React.FC = ({ children }) => {
	const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

	const addProductToCart = (productId: number) => {
		dispatch({ type: CART_ACTION.ADD_PRODUCT, productId });
	};

	const removeProductFromCart = (productId: number) => {
		dispatch({ type: CART_ACTION.REMOVE_PRODUCT, productId });
	};

	return (
		<CartContext.Provider
			value={{
				cart: cartState.cart,
				addProductToCart,
				removeProductFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartState;
