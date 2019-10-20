import React from 'react';
import { mount } from 'enzyme';

import * as navigator from 'library/utilities/navigator';
import useRequestServiceCheckout, {
	validateCheckoutFields,
	makeCheckoutHandler,
	incrementSelectedSamplesHandler,
	decrementSelectedSamplesHandler,
} from '../useRequestServiceCheckout';
import ApolloTestWrapper from 'library/common/commonComponents/ApolloTestWrapper/ApolloTestWrapper';

function HookWrapper(props: any) {
	const hook = props.hook ? props.hook() : undefined;

	return <div hook={hook} />;
}

describe('useLogin', () => {
	it('should return correct values', () => {
		const component = mount(
			<ApolloTestWrapper>
				<HookWrapper hook={() => useRequestServiceCheckout()} />
			</ApolloTestWrapper>,
		);
		const {
			hook: {
				fullName,
				setFullName,
				address,
				setAddress,
				city,
				setCity,
				state,
				setState,
				zipCode,
				setZipCode,
				availableSamplesCount,
				selectedSamplesCount,
				decrementSelectedSamples,
				incrementSelectedSamples,
				makeCheckout,
				fullNameError,
				addressError,
				cityError,
				stateError,
				zipCodeError,
			},
		} = component.find('div').props() as any;

		expect(fullName).toBe('');
		expect(typeof setFullName).toBe('function');
		expect(address).toBe('');
		expect(typeof setAddress).toBe('function');
		expect(city).toBe('');
		expect(typeof setCity).toBe('function');
		expect(state).toBe('');
		expect(typeof setState).toBe('function');
		expect(zipCode).toBe('');
		expect(typeof setZipCode).toBe('function');
		expect(availableSamplesCount).toBe(1);
		expect(selectedSamplesCount).toBe(1);
		expect(typeof decrementSelectedSamples).toBe('function');
		expect(typeof incrementSelectedSamples).toBe('function');
		expect(typeof makeCheckout).toBe('function');
		expect(fullNameError).toBe(null);
		expect(addressError).toBe(null);
		expect(cityError).toBe(null);
		expect(stateError).toBe(null);
		expect(zipCodeError).toBe(null);
	});
});

describe('validateCheckoutFields', () => {
	it('should return false and set errors', () => {
		const setFullNameError = jest.fn();
		const setAddressError = jest.fn();
		const setCityError = jest.fn();
		const setStateError = jest.fn();
		const setZipCodeError = jest.fn();
		expect(
			validateCheckoutFields({
				fullName: '',
				address: '',
				city: '',
				state: '',
				zipCode: '',
				setFullNameError,
				setAddressError,
				setCityError,
				setStateError,
				setZipCodeError,
			}),
		).toBe(false);

		expect(setFullNameError).toHaveBeenCalledWith('Full Name cannot be blank');
		expect(setAddressError).toHaveBeenCalledWith('Address cannot be blank');
		expect(setCityError).toHaveBeenCalledWith('City cannot be blank');
		expect(setStateError).toHaveBeenCalledWith('State cannot be blank');
		expect(setZipCodeError).toHaveBeenCalledWith('Zip Code cannot be blank');
	});

	it('should return true and set errors with nulls', () => {
		const setFullNameError = jest.fn();
		const setAddressError = jest.fn();
		const setCityError = jest.fn();
		const setStateError = jest.fn();
		const setZipCodeError = jest.fn();
		expect(
			validateCheckoutFields({
				fullName: 'q',
				address: 'w',
				city: 'e',
				state: 'r',
				zipCode: 't',
				setFullNameError,
				setAddressError,
				setCityError,
				setStateError,
				setZipCodeError,
			}),
		).toBe(true);

		expect(setFullNameError).toHaveBeenCalledWith(null);
		expect(setAddressError).toHaveBeenCalledWith(null);
		expect(setCityError).toHaveBeenCalledWith(null);
		expect(setStateError).toHaveBeenCalledWith(null);
		expect(setZipCodeError).toHaveBeenCalledWith(null);
	});
});

describe('makeCheckoutHandler', () => {
	it('should return undefined because of validation fail', () => {
		expect(
			makeCheckoutHandler({
				fullName: '',
				address: 'w',
				city: 'e',
				state: 'r',
				zipCode: 't',
				setFullNameError: jest.fn(),
				setAddressError: jest.fn(),
				setCityError: jest.fn(),
				setStateError: jest.fn(),
				setZipCodeError: jest.fn(),
			}),
		).toBe(undefined);
	});

	it('should call navigateTo with correct args', () => {
		Object.defineProperty(navigator, 'navigateTo', { value: jest.fn() });
		makeCheckoutHandler({
			fullName: 'q',
			address: 'w',
			city: 'e',
			state: 'r',
			zipCode: 't',
			setFullNameError: jest.fn(),
			setAddressError: jest.fn(),
			setCityError: jest.fn(),
			setStateError: jest.fn(),
			setZipCodeError: jest.fn(),
		});
		expect(navigator.navigateTo).toHaveBeenCalledWith('RequestServicePayment', {
			address: 'w',
			city: 'e',
			fullName: 'q',
			selectedSamplesCount: undefined,
			state: 'r',
			zipCode: 't',
		});
	});
});

describe('incrementSelectedSamplesHandler', () => {
	it('should call setSelectedSampleCount', () => {
		const setSelectedSamplesCount = jest.fn();
		incrementSelectedSamplesHandler({
			setSelectedSamplesCount,
			selectedSamplesCount: 1,
			availableSamplesCount: 5,
		});
		expect(setSelectedSamplesCount).toHaveBeenCalledWith(2);
	});

	it('should call setSelectedSampleCount', () => {
		const setSelectedSamplesCount = jest.fn();
		incrementSelectedSamplesHandler({
			setSelectedSamplesCount,
			selectedSamplesCount: 5,
			availableSamplesCount: 5,
		});
		expect(setSelectedSamplesCount).toHaveBeenCalledWith(5);
	});
});

describe('decrementSelectedSamplesHandler', () => {
	it('should call setSelectedSampleCount', () => {
		const setSelectedSamplesCount = jest.fn();
		decrementSelectedSamplesHandler({
			setSelectedSamplesCount,
			selectedSamplesCount: 1,
		});
		expect(setSelectedSamplesCount).toHaveBeenCalledWith(1);
	});

	it('should call setSelectedSampleCount', () => {
		const setSelectedSamplesCount = jest.fn();
		decrementSelectedSamplesHandler({
			setSelectedSamplesCount,
			selectedSamplesCount: 5,
		});
		expect(setSelectedSamplesCount).toHaveBeenCalledWith(4);
	});
});
