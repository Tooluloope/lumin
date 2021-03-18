import { Currency } from '@/types';
import { State, Action, CURRENCY_ACTION } from './types';

const changeCurrency = (currency: Currency, state: State) => ({ ...state, currency });

export const currencyReducer = (state: State, action: Action) => {
	switch (action.type) {
		case CURRENCY_ACTION.CHANGE_CURRENCY:
			return changeCurrency(action.currency, state);

		default:
			return state;
	}
};
