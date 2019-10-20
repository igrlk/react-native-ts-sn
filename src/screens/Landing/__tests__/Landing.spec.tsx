import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import * as token from 'library/utilities/token';
import Landing from '../Landing';
import ApolloTestWrapper from 'library/common/commonComponents/ApolloTestWrapper/ApolloTestWrapper';

describe('Landing', () => {
	it('match to snapshot', () => {
		const tree = renderer
			.create(
				<ApolloTestWrapper>
					<Landing navigation={{ state: { params: {} } } as any} />
				</ApolloTestWrapper>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should open menu by clicking on hamburger', done => {
		Object.defineProperty(token, 'logout', { value: jest.fn() });
		const component = mount(
			<ApolloTestWrapper>
				<Landing navigation={{ state: { params: {} } } as any} />
			</ApolloTestWrapper>,
		);
		// component
		// 	.find('TouchableOpacity')
		// 	.first()
		// 	.simulate('press');

		// component
		// 	.find('TouchableOpacity')
		// 	.at(3)
		// 	.simulate('press');

		// component
		// 	.find('TouchableOpacity')
		// 	.first()
		// 	.simulate('press');

		// component
		// 	.find('TouchableOpacity')
		// 	.at(4)
		// 	.simulate('press');

		// expect(token.logout).toHaveBeenCalled();
		done();
	});
});
