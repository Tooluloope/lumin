export type TDrawer = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	onToggle: () => void;
	isControlled: boolean;
	getButtonProps: (props?: any) => any;
	getDisclosureProps: (props?: any) => any;
};
