import React from 'react';
import renderer from 'react-test-renderer';

import GoBackIcon from '../GoBackIcon';

describe('GoBackButton', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<GoBackIcon />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
