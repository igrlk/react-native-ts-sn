import React from 'react';
import renderer from 'react-test-renderer';

import RequestServiceConfirmation from '../RequestServiceConfirmation';

describe('RequestServiceConfirmation', () => {
	it('match to snapshot', () => {
		const tree = renderer
			.create(
				<RequestServiceConfirmation
					navigation={{ state: { params: { fullName: 'qwe', selectedSamplesCount: 5 } } } as any}
				/>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
