import React from 'react';
import renderer from 'react-test-renderer';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import SignUpAddPassword from '../SignUpAddPassword';
import { getToken } from 'library/utilities/token';

const client = new ApolloClient({
	uri: 'http://sentinel.oioio.ru:8889/graphql',
	fetch: jest.fn(),
	request: async operation => {
		const authToken = await getToken();
		operation.setContext({
			headers: {
				authorization: authToken ? `Bearer ${authToken}` : '',
			},
		});
	},
});
describe('SignUpAddPassword', () => {
	it('match to snapshot', () => {
		const tree = renderer
			.create(
				<ApolloProvider client={client}>
					<SignUpAddPassword
						navigation={
							{
								state: {
									params: { email: 'some-email@gmail.com', signUpKey: 'some-signup-key' },
								},
							} as any
						}
					/>
				</ApolloProvider>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
