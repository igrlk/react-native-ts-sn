import React from 'react';
import renderer from 'react-test-renderer';

import Screen from '../Screen';

describe('Screen', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<Screen isCentered>Some screen content</Screen>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
