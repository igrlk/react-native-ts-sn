import React from 'react';
import renderer from 'react-test-renderer';

import WithLoader from '../WithLoader';
import { shallow } from 'enzyme';

describe('WithLoader', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<WithLoader loading={false}>Some content</WithLoader>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render loader if loading', () => {
		const component = shallow(<WithLoader loading>Some content</WithLoader>);
		expect(component.find('Loader').length).toBe(1);
	});
});
