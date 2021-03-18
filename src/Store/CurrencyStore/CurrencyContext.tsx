/* eslint-disable @typescript-eslint/no-unused-vars */
import { Currency } from '@/types';
import React from 'react';

const CurrencyContext = React.createContext<{
	currency: Currency;
	changeCurrency: (curr: Currency) => void;
}>({
	currency: Currency.USD,
	changeCurrency(curr) {
		// do nothing.
	},
});

export default CurrencyContext;
