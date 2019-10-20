import React from 'react';
import renderer from 'react-test-renderer';

import RequestServiceInfo from '../RequestServiceInfo';

describe('GoBackButton', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<RequestServiceInfo />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
