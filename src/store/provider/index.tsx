import { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from '..';

export const ProviderStorage = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const storeRef = useRef<AppStore>();
	if (!storeRef.current) {
		storeRef.current = makeStore();
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
};
