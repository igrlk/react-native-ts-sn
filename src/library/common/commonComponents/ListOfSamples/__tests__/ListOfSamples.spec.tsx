import React from 'react';
import renderer from 'react-test-renderer';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { getToken } from 'library/utilities/token';
import ListOfSamples from '../ListOfSamples';
import * as ListOfSamplesHandlers from '../ListOfSamples';

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

describe('ListOfSamples', () => {
	it('match to snapshot', () => {
        const samples = [{
            status: 'Completed',
            number: null,
            created: '1112222121',
        }];
		const tree = renderer.create(
        <ApolloProvider client={client}>
            <ListOfSamples samples={samples} />
        </ApolloProvider>,).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('check call function getNumberOfSample with New Request sample', () => {
        jest.spyOn(ListOfSamplesHandlers, 'getNumberOfSample');
        const sample = {
            uuid: 1,
            status: 'Completed',
            number: null,
            created: '1112222121',
        };

		ListOfSamplesHandlers.getNumberOfSample(sample);
		expect(ListOfSamplesHandlers.getNumberOfSample).toReturnWith('New Request')
    });
    
    it('check call function getNumberOfSample', () => {
        jest.spyOn(ListOfSamplesHandlers, 'getNumberOfSample');
        const sample = {
            uuid: 1,
            status: 'Completed',
            number: 702,
            created: '1112222121',
        };

		ListOfSamplesHandlers.getNumberOfSample(sample);
		expect(ListOfSamplesHandlers.getNumberOfSample).toReturnWith(702)
	});
});