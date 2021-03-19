import CartContext from '@/Store/CartStore/cartContext';
import CurrencyContext from '@/Store/CurrencyStore/CurrencyContext';
import { fireEvent, render, screen } from '@testing-library/react';
import { Currency, TProduct } from '@/types';
import Cart from './Cart';
import { cartItem } from '../../Store/CartStore/types';

const cart = [
	{
		quantity: 2,
		productId: 1,
	},
	{
		quantity: 1,
		productId: 2,
	},
	{
		quantity: 3,
		productId: 3,
	},
] as cartItem[];
const data = {
	products: [
		{
			id: 1,
			title: 'Premium-Grade Moisturizing Balm',
			image_url:
				'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png',
			price: 29,
		},
		{
			id: 2,
			title: 'No-Nonsense Charcoal Cleanser',
			image_url:
				'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/charcoal-cleanser.png',
			price: 16,
		},
		{
			id: 42,
			title: 'Clarifying Body Wash',
			image_url:
				'https://i.shgcdn.com/b44f5ef8-6bc0-4a4a-8eef-1f7ced30503d/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
			price: 10,
		},
		{
			id: 3,
			title: 'Keratin Recovery Shampoo',
			image_url:
				'https://i.shgcdn.com/4c9671b2-8161-4e58-b3b5-cefa74b74a05/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
			price: 12,
		},
	] as TProduct[],
};

const Providers: React.FC = ({ children }) => (
	<CartContext.Provider
		value={{
			cart,
			addProductToCart: jest.fn(),
			removeProductFromCart: jest.fn(),
			removeProductTotallyFromCart: jest.fn(),
			totalQuantity: 6,
		}}
	>
		<CurrencyContext.Provider
			value={{
				currency: Currency.USD,
				changeCurrency: jest.fn(),
			}}
		>
			{children}
		</CurrencyContext.Provider>
	</CartContext.Provider>
);

describe('<Cart />', () => {
	const defaultProps = {
		onOpen: jest.fn(),
		isOpen: true,
		onClose: jest.fn(),
		data: {
			products: [],
		},
	};
	it('Should render properly', () => {
		render(<Cart {...defaultProps} />);
	});
	it('Should render text when no item as been added', () => {
		render(<Cart {...defaultProps} />);

		expect(screen.getByText(/there are no items in your cart/i)).toBeInTheDocument();
		expect(screen.getByText(/subtotal/i)).toBeInTheDocument();
	});

	it('Should render items in cart', () => {
		render(
			<Providers>
				<Cart {...{ ...defaultProps, data }} />
			</Providers>,
		);

		expect(screen.queryByText(/there are no items in your cart/i)).not.toBeInTheDocument();
		expect(screen.getAllByTestId('cart-item')).toHaveLength(3);
	});
});
