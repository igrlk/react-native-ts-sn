import React from 'react';
import renderer from 'react-test-renderer';

import FAQIcon from '../FAQIcon';

describe('GoBackButton', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<FAQIcon />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
