import React from 'react';
import renderer from 'react-test-renderer';

import SignUpConfirmed from '../SignUpConfirmed';

describe('SignUpConfirmed', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<SignUpConfirmed />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
