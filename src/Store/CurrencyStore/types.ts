import { Currency } from '@/types';

export type State = {
	currency: Currency;
};
// eslint-disable-next-line no-shadow
export enum CURRENCY_ACTION {
	CHANGE_CURRENCY = 'CHANGE_CURRENCY',
}
export type Action = {
	type: CURRENCY_ACTION;
	currency: Currency;
};
