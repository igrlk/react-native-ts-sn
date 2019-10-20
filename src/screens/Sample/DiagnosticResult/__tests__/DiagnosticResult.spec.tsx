import React from 'react';
import renderer from 'react-test-renderer';

import DiagnosticResult from '../DiagnosticResult';

describe('DiagnosticResult', () => {
	it('match to snapshot', () => {
		const tree = renderer
			.create(<DiagnosticResult/>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
