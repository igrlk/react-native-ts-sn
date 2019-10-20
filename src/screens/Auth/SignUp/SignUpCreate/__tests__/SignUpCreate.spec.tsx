import React from 'react';
import renderer from 'react-test-renderer';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import SignUpCreate from '../SignUpCreate';
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

describe('SignUpCreate', () => {
	it('match to snapshot', () => {
		const tree = renderer
			.create(
				<ApolloProvider client={client}>
					<SignUpCreate />
				</ApolloProvider>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
