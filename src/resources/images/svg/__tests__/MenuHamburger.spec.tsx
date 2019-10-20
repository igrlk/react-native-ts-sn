import React from 'react';
import renderer from 'react-test-renderer';

import MenuHamburger from '../MenuHamburger';

describe('GoBackButton', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<MenuHamburger />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
