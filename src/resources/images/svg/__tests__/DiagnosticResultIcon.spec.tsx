import React from 'react';
import renderer from 'react-test-renderer';

import DiagnosticResultIcon from '../DiagnosticResultIcon';

describe('DiagnosticResultIcon', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<DiagnosticResultIcon />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
