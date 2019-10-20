import { useState, useEffect } from 'react';

import { navigateTo } from 'library/utilities/navigator';
import AsyncStorage from 'library/utilities/asyncStorage';

export default function useRequestServiceCheckout() {
	const [fullName, setFullName] = useState<string>('');
	const [address, setAddress] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [state, setState] = useState<string>('');
	const [zipCode, setZipCode] = useState<string>('');

	const [fullNameError, setFullNameError] = useState<string | null>(null);
	const [addressError, setAddressError] = useState<string | null>(null);
	const [cityError, setCityError] = useState<string | null>(null);
	const [stateError, setStateError] = useState<string | null>(null);
	const [zipCodeError, setZipCodeError] = useState<string | null>(null);

	const [availableSamplesCount, setAvailableSamplesCount] = useState<number>(1);
	useEffect(() => {
		AsyncStorage.getItem('samples').then((r: number) =>
			setAvailableSamplesCount(5 - r < 0 ? 0 : 5 - r),
		);
	}, []);

	const [selectedSamplesCount, setSelectedSamplesCount] = useState<number>(1);
	const decrementSelectedSamples = () =>
		decrementSelectedSamplesHandler({ setSelectedSamplesCount, selectedSamplesCount });

	const incrementSelectedSamples = () =>
		incrementSelectedSamplesHandler({
			setSelectedSamplesCount,
			selectedSamplesCount,
			availableSamplesCount,
		});

	const makeCheckout = () =>
		makeCheckoutHandler({
			fullName,
			address,
			city,
			state,
			zipCode,
			setFullNameError,
			setAddressError,
			setCityError,
			setStateError,
			setZipCodeError,
			selectedSamplesCount,
		});

	return {
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
	};
}

export function decrementSelectedSamplesHandler({
	setSelectedSamplesCount,
	selectedSamplesCount,
}: {
	setSelectedSamplesCount: React.Dispatch<React.SetStateAction<number>>;
	selectedSamplesCount: number;
}) {
	setSelectedSamplesCount(selectedSamplesCount === 1 ? 1 : selectedSamplesCount - 1);
}

export function incrementSelectedSamplesHandler({
	setSelectedSamplesCount,
	selectedSamplesCount,
	availableSamplesCount,
}: {
	setSelectedSamplesCount: React.Dispatch<React.SetStateAction<number>>;
	selectedSamplesCount: number;
	availableSamplesCount: number;
}) {
	setSelectedSamplesCount(
		selectedSamplesCount === availableSamplesCount
			? availableSamplesCount
			: selectedSamplesCount + 1,
	);
}

export function makeCheckoutHandler({
	fullName,
	address,
	city,
	state,
	zipCode,
	setFullNameError,
	setAddressError,
	setCityError,
	setStateError,
	setZipCodeError,
	selectedSamplesCount,
}: any) {
	const validationResult = validateCheckoutFields({
		fullName,
		address,
		city,
		state,
		zipCode,
		setFullNameError,
		setAddressError,
		setCityError,
		setStateError,
		setZipCodeError,
	});

	if (!validationResult) return;

	navigateTo('RequestServicePayment', {
		fullName,
		address,
		city,
		state,
		zipCode,
		selectedSamplesCount,
	});
}

export function validateCheckoutFields({
	fullName,
	address,
	city,
	state,
	zipCode,
	setFullNameError,
	setAddressError,
	setCityError,
	setStateError,
	setZipCodeError,
}: {
	fullName: string;
	address: string;
	city: string;
	state: string;
	zipCode: string;
	setFullNameError: React.Dispatch<React.SetStateAction<string | null>>;
	setAddressError: React.Dispatch<React.SetStateAction<string | null>>;
	setCityError: React.Dispatch<React.SetStateAction<string | null>>;
	setStateError: React.Dispatch<React.SetStateAction<string | null>>;
	setZipCodeError: React.Dispatch<React.SetStateAction<string | null>>;
}) {
	const trimmedFields = {
		fullName: fullName.trim(),
		address: address.trim(),
		city: city.trim(),
		state: state.trim(),
		zipCode: zipCode.trim(),
	};
	setFullNameError(trimmedFields.fullName.length === 0 ? 'Full Name cannot be blank' : null);
	setAddressError(trimmedFields.address.length === 0 ? 'Address cannot be blank' : null);
	setCityError(trimmedFields.city.length === 0 ? 'City cannot be blank' : null);
	setStateError(trimmedFields.state.length === 0 ? 'State cannot be blank' : null);
	setZipCodeError(trimmedFields.zipCode.length === 0 ? 'Zip Code cannot be blank' : null);

	return Object.values(trimmedFields).filter(value => value.length === 0).length === 0;
}
