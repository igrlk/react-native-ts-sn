import React from 'react';
import renderer from 'react-test-renderer';

import Onboarding from '../Onboarding';

describe('Onboarding', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<Onboarding />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
