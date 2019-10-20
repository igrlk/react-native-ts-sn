import React from 'react';

import Loader from 'library/common/commonComponents/Loader';

interface WithLoaderProps {
	loading: boolean;
	children: React.ReactNode;
}

export default function WithLoader({ loading, children }: WithLoaderProps): any {
	return loading ? <Loader /> : children;
}
