import React from 'react';
import renderer from 'react-test-renderer';

import OrderDetail from '../OrderDetail';
import { mount } from 'enzyme';
import ApolloTestWrapper from 'library/common/commonComponents/ApolloTestWrapper/ApolloTestWrapper';

describe('OrderDetail', () => {
	it('match to snapshot', () => {
		const tree = renderer
			.create(
				<ApolloTestWrapper>
					<OrderDetail navigation={{ state: { params: {} } } as any} />
				</ApolloTestWrapper>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should renders correctly', () => {
		mount(
			<ApolloTestWrapper>
				<OrderDetail navigation={{ state: { params: {} } } as any} />
			</ApolloTestWrapper>,
		);
	});

	it('should renders correctly', () => {
		mount(
			<ApolloTestWrapper>
				<OrderDetail navigation={{ state: { params: null } } as any} />
			</ApolloTestWrapper>,
		);
	});
});
