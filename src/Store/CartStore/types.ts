import { TProduct } from '@/types';

export type cartItem = TProduct & {
	quantity: number;
	productId: number;
};

export type State = {
	cart: cartItem[];
};
export type Action = {
	type: CART_ACTION;
	productId: number;
};
// eslint-disable-next-line no-shadow
export enum CART_ACTION {
	ADD_PRODUCT = 'ADD_PRODUCT',
	REMOVE_PRODUCT = 'REMOVE_PRODUCT',
	REMOVE_PRODUCT_TOTALLY = 'REMOVE_PRODUCT_TOTALLY',
}
