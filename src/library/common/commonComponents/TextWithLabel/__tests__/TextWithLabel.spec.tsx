import React from 'react';
import renderer from 'react-test-renderer';

import TextWithLabel from '../TextWithLabel';

describe('TextWithLabel', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<TextWithLabel text='text' label='label' />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
