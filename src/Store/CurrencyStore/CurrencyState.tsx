import { Currency } from '@/types';
import { getInitialState, persistState } from '@/utils/helpers';
import React, { useEffect, useReducer } from 'react';
import { STORAGE_KEY } from '..';
import CurrencyContext from './CurrencyContext';
import { currencyReducer } from './reducer';
import { CURRENCY_ACTION } from './types';

const CurrencyState: React.FC = ({ children }) => {
	const currency = (getInitialState(STORAGE_KEY.CURRENCY) ?? Currency.USD) as Currency;

	const [currencyState, dispatch] = useReducer(currencyReducer, { currency });

	const changeCurrency = (curr: Currency) => {
		dispatch({ type: CURRENCY_ACTION.CHANGE_CURRENCY, currency: curr });
	};
	useEffect(() => persistState(STORAGE_KEY.CURRENCY, currencyState.currency), [currencyState]);

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
