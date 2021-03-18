import { Currency } from '@/types';
import React, { useReducer } from 'react';
import CurrencyContext from './CurrencyContext';
import { currencyReducer } from './reducer';
import { CURRENCY_ACTION } from './types';

const CurrencyState: React.FC = ({ children }) => {
	const [currencyState, dispatch] = useReducer(currencyReducer, { currency: Currency.USD });

	const changeCurrency = (currency: Currency) => {
		dispatch({ type: CURRENCY_ACTION.CHANGE_CURRENCY, currency });
	};

	return (
		<CurrencyContext.Provider
			value={{
				currency: currencyState.currency,
				changeCurrency,
			}}
		>
			{children}
		</CurrencyContext.Provider>
	);
};

export default CurrencyState;
