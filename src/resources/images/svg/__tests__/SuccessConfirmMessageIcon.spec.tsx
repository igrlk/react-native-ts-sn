import React from 'react';
import renderer from 'react-test-renderer';

import SuccessConfirmMessageIcon from '../SuccessConfirmMessageIcon';

describe('GoBackButton', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<SuccessConfirmMessageIcon />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
