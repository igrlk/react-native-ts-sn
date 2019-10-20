import React from 'react';
import renderer from 'react-test-renderer';

import FAQ from '../FAQ';

describe('FAQ', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<FAQ navigation={{ state: { params: {} } } as any} />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
