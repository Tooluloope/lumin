import { Skeleton, Stack } from '@chakra-ui/react';

const ProductLoader = () => (
	<Stack
		spacing={4}
		align="stretch"
		fontSize={{ base: '13px', md: '16px' }}
		mx="auto"
		textAlign="center"
		w="full"
	>
		<Skeleton startColor="#e0e2e0" endColor="#cdd1ce" height="180px" />
		<Skeleton startColor="#e0e2e0" endColor="#cdd1ce" height="30px" />
		<Skeleton startColor="#e0e2e0" endColor="#cdd1ce" height="20px" />
		<Skeleton startColor="#e0e2e0" endColor="#cdd1ce" height="50px" />
	</Stack>
);

export default ProductLoader;
