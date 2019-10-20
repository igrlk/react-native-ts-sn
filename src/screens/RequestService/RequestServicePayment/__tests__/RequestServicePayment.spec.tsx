import React from 'react';
import renderer from 'react-test-renderer';

import RequestServicePayment from '../RequestServicePayment';
import ApolloTestWrapper from 'library/common/commonComponents/ApolloTestWrapper/ApolloTestWrapper';

describe('RequestServicePayment', () => {
	it('match to snapshot', () => {
		const tree = renderer
			.create(
				<ApolloTestWrapper>
					<RequestServicePayment
						navigation={
							{
								state: {
									params: {
										address: '23r2	3',
										city: '234234',
										fullName: '23r',
										selectedSamplesCount: 2,
										state: '123123',
										zipCode: '234',
									},
								},
							} as any
						}
					/>
				</ApolloTestWrapper>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
