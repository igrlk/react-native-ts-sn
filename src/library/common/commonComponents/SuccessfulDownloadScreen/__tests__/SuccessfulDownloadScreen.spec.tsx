import React from 'react';
import renderer from 'react-test-renderer';

import SuccessfulDownloadScreen from '../SuccessfulDownloadScreen';

describe('SuccessfulDownloadScreen', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(
			<SuccessfulDownloadScreen
				navigation={{ state: { params: { backToScreen: 'test'} } } as any}
			 />
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
