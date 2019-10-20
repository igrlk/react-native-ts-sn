import React from 'react';
import renderer from 'react-test-renderer';

import DownloadArrow from '../DownloadArrow';

describe('DownloadArrow', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<DownloadArrow />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
