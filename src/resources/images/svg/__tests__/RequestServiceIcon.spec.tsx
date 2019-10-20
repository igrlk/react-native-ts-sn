import React from 'react';
import renderer from 'react-test-renderer';

import RequestServiceIcon from '../RequestServiceIcon';

describe('GoBackButton', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<RequestServiceIcon />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
