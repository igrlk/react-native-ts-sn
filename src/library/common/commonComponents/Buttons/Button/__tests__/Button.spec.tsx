import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Button, { getStylesForWrapperByType, getStylesForTextByType } from '../Button';
import styles from '../buttonStyles';

describe('Button', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(<Button onClick={jest.fn()}>Some text in button</Button>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should call navigator.goBack by clicking on touchable opacity', () => {
		const onClick = jest.fn();
		const component = shallow(<Button onClick={onClick}>Text</Button>);
		component.find('TouchableOpacity').simulate('press');
		expect(onClick).toHaveBeenCalled();
	});
});

describe('getStylesForWrapperByType', () => {
	it('should return styles.buttonInfo if type === info, otherwise undefined', () => {
		expect(getStylesForWrapperByType('info')).toEqual(styles.buttonInfo);
		expect(getStylesForWrapperByType('common')).toBe(undefined);
	});
});

describe('getStylesForTextByType', () => {
	it('should return styles.buttonInfoText if type === info, otherwise undefined', () => {
		expect(getStylesForTextByType('info')).toEqual(styles.buttonInfoText);
		expect(getStylesForTextByType('common')).toBe(undefined);
	});
});
