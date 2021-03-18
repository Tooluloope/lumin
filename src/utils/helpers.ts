export const persistState = (storageKey: string, state: unknown): void => {
	window.localStorage.setItem(storageKey, JSON.stringify(state));
};

export const getInitialState = (storageKey: string): unknown | undefined => {
	if (typeof localStorage === 'undefined') {
		return undefined;
	}
	const savedState = window.localStorage.getItem(storageKey);
	try {
		if (!savedState) {
			return undefined;
		}
		return JSON.parse(savedState ?? '{}');
	} catch (e) {
		return undefined;
	}
};
