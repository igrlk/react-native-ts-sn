import React from 'react';
import renderer from 'react-test-renderer';

import LandingLogo from '../LandingLogo';

describe('GoBackButton', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<LandingLogo />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
