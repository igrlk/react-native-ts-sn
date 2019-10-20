import React from 'react';
import renderer from 'react-test-renderer';

import ForgotPasswordConfirmed from '../ForgotPasswordConfirmed';

describe('ForgotPasswordConfirmed', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<ForgotPasswordConfirmed />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
