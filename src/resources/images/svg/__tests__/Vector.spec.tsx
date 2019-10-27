import React from 'react';
import renderer from 'react-test-renderer';

import Vector from '../Vector';

describe('Vector', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<Vector />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
