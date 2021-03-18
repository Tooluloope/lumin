import { State, Action, CART_ACTION } from './types';

const addProductToCart = (productId: number, state: State) => {
	const updatedCart = [...state.cart];
	const updatedItemIndex = updatedCart.findIndex((item) => item.productId === productId);

	if (updatedItemIndex < 0) {
		updatedCart.push({ ...updatedCart[updatedItemIndex], productId, quantity: 1 });
	} else {
		const updatedItem = {
			...updatedCart[updatedItemIndex],
		};
		updatedItem.quantity += 1;
		updatedCart[updatedItemIndex] = updatedItem;
	}

	return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId: number, state: State) => {
	const updatedCart = [...state.cart];
	const updatedItemIndex = updatedCart.findIndex((item) => item.productId === productId);

	const updatedItem = {
		...updatedCart[updatedItemIndex],
	};
	updatedItem.quantity -= 1;
	if (updatedItem.quantity <= 0) {
		updatedCart.splice(updatedItemIndex, 1);
	} else {
		updatedCart[updatedItemIndex] = updatedItem;
	}

	return { ...state, cart: updatedCart };
};

export const cartReducer = (state: State, action: Action) => {
	switch (action.type) {
		case CART_ACTION.ADD_PRODUCT:
			return addProductToCart(action.productId, state);

		case CART_ACTION.REMOVE_PRODUCT:
			return removeProductFromCart(action.productId, state);

		default:
			return state;
	}
};
