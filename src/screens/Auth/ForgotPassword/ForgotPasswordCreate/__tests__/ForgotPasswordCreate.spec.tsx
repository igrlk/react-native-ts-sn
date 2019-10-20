import React from 'react';
import renderer from 'react-test-renderer';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import ForgotPasswordCreate from '../ForgotPasswordCreate';
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

describe('ForgotPasswordCreate', () => {
	it('match to snapshot', () => {
		const tree = renderer
			.create(
				<ApolloProvider client={client}>
					<ForgotPasswordCreate />
				</ApolloProvider>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
