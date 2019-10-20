import React from 'react';
import renderer from 'react-test-renderer';

import SampleList from '../SampleList';

describe('SampleList', () => {
	it('match to snapshot', () => {
		const tree = renderer
			.create(
				<SampleList
					navigation={{ state: { params: { samples: [{ created: 10, uuid: 'qwe' }] } } } as any}
				/>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
