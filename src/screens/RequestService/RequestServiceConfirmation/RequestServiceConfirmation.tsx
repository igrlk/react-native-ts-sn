import React from 'react';
import { View, Text } from 'react-native';

import { NavigationParams } from 'library/common/commonTypes/navigation';
import Screen from 'library/common/commonComponents/Screen';
import TextWithLabel from 'library/common/commonComponents/TextWithLabel';
import Button from 'library/common/commonComponents/Buttons/Button';
import { getResetNavigation } from 'library/utilities/navigator';
import SuccessConfirmMessageIcon from 'resources/images/svg/SuccessConfirmMessageIcon';

import styles from './requestServiceConfirmationStyles';

interface RequestServiceConfirmationProps {
	navigation: NavigationParams;
}

export default function RequestServiceConfirmation({
	navigation,
}: RequestServiceConfirmationProps) {
	const params = navigation.state.params || {};
	const date = 'Sep 5, 2019';

	return (
		<Screen>
			<View style={styles.title}>
				<SuccessConfirmMessageIcon />
				<Text style={styles.titleText}>Confirmed</Text>
			</View>

			<View>
				<TextWithLabel label='Name' text={params.fullName} />
			</View>

			<View style={styles.quantity}>
				<TextWithLabel label='Quantity' text={params.selectedSamplesCount} />
				<TextWithLabel label='Date of Request' text={date} />
			</View>

			<Text style={styles.text}>
				Thank you for your request. You will receive a sampling kit, instructions and pre-paid
				return envelope soon. Please be prepared to add sampling location, crop and any diseases of
				concern to the label on the sample bag.
			</Text>

			<Button type='info' onClick={() => {}} style={styles.button}>
				Download Receipt
			</Button>
			<Button onClick={getResetNavigation('Landing')}>OK</Button>
		</Screen>
	);
}
