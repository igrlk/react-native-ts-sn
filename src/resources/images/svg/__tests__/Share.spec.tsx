import React from 'react';
import renderer from 'react-test-renderer';

import Share from '../Share';

describe('Share', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<Share />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
