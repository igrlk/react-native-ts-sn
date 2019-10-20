import React from 'react';
import renderer from 'react-test-renderer';

import SuccessConfirmMessage from '../SuccessConfirmMessage';

describe('SuccessConfirmMessage', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<SuccessConfirmMessage text='text' title='title' />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
