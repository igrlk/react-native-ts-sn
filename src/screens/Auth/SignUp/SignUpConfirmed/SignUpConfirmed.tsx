import React from 'react';
import { View } from 'react-native';

import Screen from 'library/common/commonComponents/Screen';
import SuccessConfirmMessage from 'library/common/commonComponents/SuccessConfirmMessage';

import styles from './signUpConfirmedStyles';

export default function SignUpConfirmed() {
	return (
		<Screen isCentered>
			<View style={styles.container}>
				<SuccessConfirmMessage
					title='Confirmation sent'
					text='Please check your email for verfication'
				/>
			</View>
		</Screen>
	);
}
