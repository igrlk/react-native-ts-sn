import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';

jest.mock('react-native-gesture-handler', () => {});

import SampleDetail, { updateActiveCrop, updatePathogens } from '../SampleDetail';

describe('SampleDetail', () => {
	it('match to snapshot', () => {
		const tree = renderer
			.create(
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
					<SampleDetail
						navigation={{ state: { params: { sample: { created: 10, uuid: 'qwe' } } } } as any}
					/>
				</ApolloProvider>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

describe('updateActiveCrop', () => {
  it('should do notthing if !data || !data.crops', () => {
    const setCrops = jest.fn();
    const sample = {};
    const setCropSearchValue = jest.fn();
    const setActiveCrop = jest.fn();
    updateActiveCrop({
      data: null,
      setCrops,
      sample,
      setCropSearchValue,
      setActiveCrop,
    })();

    updateActiveCrop({
      data: {},
      setCrops,
      sample,
      setCropSearchValue,
      setActiveCrop,
    })();
  });

  it('should return fn which call setCrops if data', () => {
    const data = { crops: [{ value: 1, name: 'crop 1' }] };
    const setCrops = jest.fn();
    const sample = {};
    const setCropSearchValue = jest.fn();
    const setActiveCrop = jest.fn();
    updateActiveCrop({
      data,
      setCrops,
      sample,
      setCropSearchValue,
      setActiveCrop,
    })();
    expect(setCrops).toHaveBeenCalledWith(
      data.crops.map((crop: any) => ({ ...crop, text: crop.name })),
    );
  });

  it('should return fn which call setCrops if data and setCropSearchValue, setActiveCrop if sample.crop', () => {
    const data = { crops: [{ value: 1, name: 'crop 1', uuid: 'crop-uuid' }] };
    const setCrops = jest.fn();
    const sample = { crop: 'crop-uuid' };
    const setCropSearchValue = jest.fn();
    const setActiveCrop = jest.fn();
    updateActiveCrop({
      data,
      setCrops,
      sample,
      setCropSearchValue,
      setActiveCrop,
    })();
    expect(setCropSearchValue).toHaveBeenCalledWith('crop 1');
    expect(setActiveCrop).toHaveBeenCalledWith(data.crops[0]);
  });

  it('should return fn which call setCrops if data', () => {
    const data = { crops: [{ value: 1, name: 'crop 1', uuid: 'some-uuid' }] };
    const setCrops = jest.fn();
    const sample = { crop: 'crop-uuid' };
    const setCropSearchValue = jest.fn();
    const setActiveCrop = jest.fn();
    updateActiveCrop({
      data,
      setCrops,
      sample,
      setCropSearchValue,
      setActiveCrop,
    })();
  });
});

describe('updatePathogens', () => {
  it('should return fn which call setPathogens', () => {
    updatePathogens({
      data: null,
      pathogens: [],
      sample: {},
      setPathogens: jest.fn(),
    })();

    updatePathogens({
      data: {},
      pathogens: [],
      sample: {},
      setPathogens: jest.fn(),
    })();

    updatePathogens({
      data: { crops: [] },
      pathogens: [],
      sample: {},
      setPathogens: jest.fn(),
    })();

    updatePathogens({
      data: { crops: [] },
      pathogens: [{ uuid: 'qwe', name: 'asd' }],
      sample: {},
      setPathogens: jest.fn(),
    })();

    updatePathogens({
      data: { crops: [] },
      pathogens: [{ uuid: 'qwe', name: 'asd' }],
      sample: { diseases: [] },
      setPathogens: jest.fn(),
    })();

    let setPathogens = jest.fn();
    updatePathogens({
      data: { crops: [] },
      pathogens: [{ uuid: 'qwe', name: 'asd' }],
      sample: { diseases: ['qwe'] },
      setPathogens,
    })();
    expect(setPathogens).toHaveBeenCalledWith([{ name: 'asd', text: 'asd', uuid: 'qwe' }]);

    setPathogens = jest.fn();
    updatePathogens({
      data: { crops: [] },
      pathogens: [{ uuid: 'qwe', name: 'asd' }],
      sample: { diseases: ['123'] },
      setPathogens,
    })();
    expect(setPathogens).toHaveBeenCalledWith([]);
  });
});
