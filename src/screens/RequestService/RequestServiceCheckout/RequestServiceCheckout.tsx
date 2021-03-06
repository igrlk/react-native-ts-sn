import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Screen from 'library/common/commonComponents/Screen';
import GoBackButton from 'library/common/commonComponents/Buttons/GoBackButton';
import Input from 'library/common/commonComponents/Inputs/Input';
import Button from 'library/common/commonComponents/Buttons/Button';
import RequestServiceInfo from 'resources/images/svg/RequestServiceInfo';
import { getNavigateTo } from 'library/utilities/navigator';
import useRequestServiceCheckout from './requestServiceCheckoutHooks/useRequestServiceCheckout';

import styles from './requestServiceCheckoutStyles';

export default function RequestServiceCheckout() {
	const {
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
	} = useRequestServiceCheckout();

	const capitalizeFirstLetter = (str: string) => {
		return str.toLowerCase()
		.split(' ')
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(' ');
	}

	return (
		<Screen>
			<KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
				<GoBackButton>Request Service</GoBackButton>

				<View style={styles.addressForm}>
					<Text style={[styles.title, styles.inputTitle]}>Add Mailing Address</Text>
					<Input
						label='Full Name'
						value={capitalizeFirstLetter(fullName)}
						onChange={setFullName}
						style={styles.input}
						error={fullNameError}
					/>
					<Input
						label='Address'
						value={address}
						onChange={setAddress}
						multiline
						numberOfLines={4}
						style={styles.input}
						error={addressError}
					/>
					<Input
						label='City'
						value={capitalizeFirstLetter(city)}
						onChange={setCity}
						style={styles.input}
						error={cityError}
					/>
					<View style={styles.halfInputs}>
						<View style={styles.halfInputsContainer}>
							<Input
								label='State'
								value={capitalizeFirstLetter(state)}
								onChange={setState}
								style={styles.input}
								error={stateError}
							/>
						</View>

						<View style={styles.halfInputsContainer}>
							<Input
								label='Zip Code'
								value={zipCode}
								onChange={setZipCode}
								style={styles.input}
								error={zipCodeError}
							/>
						</View>
					</View>
				</View>

				<View style={styles.container}>
					<View>
						<Text style={styles.title}>Number of samples</Text>
						<View style={styles.info}>
							<TouchableOpacity onPress={getNavigateTo('FAQ', { toSamples: true })}>
								<RequestServiceInfo />
							</TouchableOpacity>
							<Text style={styles.infoText}>$300/ sample</Text>
						</View>
					</View>

					<View style={styles.controls}>
						<TouchableOpacity style={styles.control} onPress={decrementSelectedSamples}>
							<Text
								style={[styles.controlText, selectedSamplesCount === 1 && styles.controlTextDisabled]}
							>
								-
							</Text>
						</TouchableOpacity>
						<View style={styles.controlCount}>
							<Text style={styles.controlCountText}>{selectedSamplesCount}</Text>
						</View>
						<TouchableOpacity style={styles.control} onPress={incrementSelectedSamples}>
							<Text
								style={[
									styles.controlText,
									selectedSamplesCount === availableSamplesCount && styles.controlTextDisabled,
								]}
							>
								+
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.total}>
					<Text style={styles.totalText}>Total</Text>
					<Text style={styles.totalText}>$ {selectedSamplesCount * 300}</Text>
				</View>

				<Button onClick={makeCheckout}>Checkout</Button>
			</KeyboardAwareScrollView>
		</Screen>
	);
}
