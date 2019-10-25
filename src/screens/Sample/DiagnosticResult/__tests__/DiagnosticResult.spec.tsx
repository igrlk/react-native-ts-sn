import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';

import DiagnosticResult from '../DiagnosticResult';

describe('DiagnosticResult', () => {
	it('match to snapshot', () => {
		const tree = renderer.create(
			<ApolloProvider
				client={
					new ApolloClient({
						link: createHttpLink({
							uri: 'some-uri ',
							fetch: jest.fn(() => Promise.resolve() as any),
						}),
						cache: new InMemoryCache(),
					})
				}
			>
				<DiagnosticResult
					navigation={ {state: { params: { sample: { uuid: 'test' } } } } as any}
				/>
			</ApolloProvider>,
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
