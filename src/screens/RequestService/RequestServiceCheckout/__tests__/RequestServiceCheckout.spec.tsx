import React from 'react';
import renderer from 'react-test-renderer';

import RequestServiceCheckout from '../RequestServiceCheckout';

describe('RequestServiceCheckout', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<RequestServiceCheckout />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
