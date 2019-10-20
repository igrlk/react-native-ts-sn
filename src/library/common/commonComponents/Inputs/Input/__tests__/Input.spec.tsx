import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Input from '../Input';

describe('Input', () => {
	let props = {
		label: 'some-label',
		value: 'some-value',
		onChange: jest.fn(),
		rightLabel: 'some-right-label',
		error: 'some-error',
		multiline: true,
		numberOfLines: 4,
	};
	beforeEach(
		() =>
			(props = {
				label: 'some-label',
				value: 'some-value',
				onChange: jest.fn(),
				rightLabel: 'some-right-label',
				error: 'some-error',
				multiline: true,
				numberOfLines: 4,
			}),
	);
	it('match to snapshot', () => {
		const tree = renderer.create(<Input {...props} />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should call navigator.goBack by clicking on touchable opacity', () => {
		const onClick = jest.fn();
		const component = shallow(<Input {...props} />);
		component.find('TextInput').simulate('changeText');
		expect(props.onChange).toHaveBeenCalled();
	});
});
