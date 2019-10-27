import React from 'react';
import renderer from 'react-test-renderer';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { getToken } from 'library/utilities/token';
import SuccessfulDownloadScreen from '../SuccessfulDownloadScreen';
import * as SuccessfulDownloadScreenHandlers from '../SuccessfulDownloadScreen';


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
describe('SuccessfulDownloadScreen', () => {
	it('match to snapshot', () => {
		const tree = renderer
			.create(
				<ApolloProvider client={client}>
					<SuccessfulDownloadScreen
						navigation={
							{
								state: {
									params: { backToScreen: 'test' },
								},
							} as any
						}
					/>
				</ApolloProvider>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('match to snapshot11', () => {
		const tree = renderer
			.create(
				<ApolloProvider client={client}>
					<SuccessfulDownloadScreen
						navigation={
							{
								state: {
									params: null,
								},
							} as any
						}
					/>
				</ApolloProvider>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('test getParams', () => {
		const navigation = { state: { params: { backToScreen: 'test'} } }
		jest.spyOn(SuccessfulDownloadScreenHandlers, 'getParams')

		SuccessfulDownloadScreenHandlers.getParams({ navigation })
		expect(SuccessfulDownloadScreenHandlers.getParams).toReturnWith({ backToScreen: 'test'})
	})
});
