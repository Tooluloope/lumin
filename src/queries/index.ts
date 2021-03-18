import { gql } from '@apollo/client';

export const ALL_PRODUCTS = gql`
	query GetProducts($currency: Currency!) {
		products {
			id
			title
			image_url
			price(currency: $currency)
			product_options {
				title
				prefix
				options {
					id
					value
				}
			}
		}
	}
`;
