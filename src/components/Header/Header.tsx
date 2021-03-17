import {
	Box,
	Flex,
	Button,
	Image,
	Text,
	Select,
	Link,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const navbar = useRef<HTMLDivElement | null>(null);
	const anchorRef = useRef<HTMLDivElement | null>(null);

	const [isVisible, setIsVisible] = useState<boolean>(false);
	// options

	const handleScroll: IntersectionObserverCallback = (entries) => {
		const spotIsVisible = entries[0].boundingClientRect.y < 0;
		if (navbar.current) {
			if (spotIsVisible) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		}
	};

	useEffect(() => {
		const scroll: (ref: HTMLDivElement | null) => void = (ref) => {
			const options = {
				root: null, // null means that root element = browser viewport.
				rootMargin: '0px', // margin around the browser viewport.
				threshhold: 0, // see below what 0 means.
			};
			const observer = new IntersectionObserver(handleScroll, options);
			if (ref) {
				observer.observe(ref);
			}
		};
		scroll(anchorRef.current);
	}, []);

	const anchor = {
		position: 'absolute',
		width: '1px',
		height: '1px',
		top: '200px',
		left: '0',
		color: 'white',
	} as React.CSSProperties;
	return (
		<>
			<div ref={anchorRef} style={anchor} id="top-of-site-pixel-anchor absolute text-white" />

			<Box
				ref={navbar}
				as="nav"
				zIndex={1}
				pos={isVisible ? 'fixed' : 'absolute'}
				top="0"
				left="0"
				alignItems="center"
				justifyContent="space-between"
				flexWrap="wrap"
				px="20px"
				py="12px"
				backgroundColor={isVisible ? 'white' : 'brand.200'}
				display="flex"
				w="full"
				boxShadow="0 2px 3px -3px grey"
			>
				<Flex
					align="center"
					mr={5}
					justifyContent="space-between"
					display={{ base: 'none', lg: 'flex' }}
				>
					<Image src="/logo.png" alt="logo" width="154px" height="44px" />
					<Link ml={90} mr={20} display="block" bg="transparent" border="0px" color="black">
						Shop
					</Link>
					<Link mr={20} display="block" bg="transparent" border="0px" color="black">
						Help
					</Link>
					<Link mr={20} display="block" bg="transparent" border="0px" color="black">
						Blog
					</Link>
				</Flex>
				<Button
					_hover={{
						bg: 'transparent',
						color: 'black',
					}}
					_focus={{
						bg: 'transparent',
						color: 'black',
					}}
					color="black"
					bg="transparent"
					justifyContent="center"
					alignItems="center"
					display={{ base: 'flex', lg: 'none' }}
					onClick={onOpen}
					px={0}
				>
					<svg fill="black" width="25px" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</Button>
				<Box flexShrink={0} display={{ base: 'flex' }} alignItems="center" justifyContent="center">
					<Link
						px="16px"
						display="block"
						bg="transparent"
						border="0px"
						color="black"
						fontSize="14px"
					>
						Account
					</Link>
					<Button
						_hover={{
							bg: 'transparent',
							color: 'black',
						}}
						display="flex"
						px="0px"
						color="black"
						bg="transparent"
						w="35px"
					>
						<Image flexShrink={0} src="/cart.png" alt="cart" w="25px" h="21px" />
						<Text as="sup" fontSize="14px" fontWeight="normal">
							3
						</Text>
					</Button>
					<Select
						display="block"
						pl="0px"
						border="1px solid #ACAFAD"
						borderColor="brand.300"
						borderRadius={0}
						ml="1.5rem"
						w="84px"
						h="24px"
						fontSize="12px"
					>
						<option>EN</option>
					</Select>
				</Box>
			</Box>

			<Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
				<DrawerOverlay>
					<DrawerContent bg="rgb(242, 242, 239)" pt={10}>
						<DrawerCloseButton
							top="50px"
							border="1px solid rgb(198, 204, 199)"
							w="1.5rem"
							h="1.5rem"
							borderRadius="100%"
						>
							<Box
								width="12px"
								height="12px"
								as="svg"
								viewBox="0 0 256 512"
								focusable="false"
								role="presentation"
							>
								<path
									fill="currentColor"
									d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
								/>
							</Box>
						</DrawerCloseButton>
						<DrawerHeader display="flex" justifyContent="center" alignItems="center">
							<Link
								mr={10}
								display="block"
								bg="transparent"
								border="0px"
								color="black"
								fontWeight="normal"
								fontSize="11px"
							>
								Shop
							</Link>
							<Link
								ml={10}
								display="block"
								bg="transparent"
								border="0px"
								color="black"
								fontWeight="normal"
								fontSize="11px"
							>
								Help
							</Link>
						</DrawerHeader>
						<DrawerBody pt={10} pl={10}>
							<Link
								mb={7}
								display="block"
								bg="transparent"
								border="0px"
								color="black"
								fontSize="22.4px"
								fontFamily="freight-display-pro,serif"
							>
								Skin
							</Link>
							<Link
								mb={7}
								display="block"
								bg="transparent"
								border="0px"
								color="black"
								fontSize="22.4px"
								fontFamily="freight-display-pro,serif"
							>
								Hair & Body
							</Link>
							<Link
								mb={7}
								display="block"
								bg="transparent"
								border="0px"
								color="black"
								fontSize="22.4px"
								fontFamily="freight-display-pro,serif"
							>
								Sets
							</Link>
							<Link
								mb={7}
								display="block"
								bg="transparent"
								border="0px"
								color="black"
								fontSize="22.4px"
								fontFamily="freight-display-pro,serif"
							>
								Accessories
							</Link>
							<Link
								mb={7}
								display="block"
								bg="transparent"
								border="0px"
								color="black"
								fontSize="22.4px"
								fontFamily="freight-display-pro,serif"
							>
								Shop All
							</Link>
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
};

export default Header;
