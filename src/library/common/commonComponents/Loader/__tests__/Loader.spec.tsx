import React from 'react';
import renderer from 'react-test-renderer';

import Loader from '../Loader';

describe('Loader', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<Loader />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
