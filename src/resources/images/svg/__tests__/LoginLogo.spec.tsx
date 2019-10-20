import React from 'react';
import renderer from 'react-test-renderer';

import LoginLogo from '../LoginLogo';

describe('GoBackButton', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<LoginLogo />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
