import React from 'react';
import { View } from 'react-native';

import Screen from 'library/common/commonComponents/Screen';
import SuccessConfirmMessage from 'library/common/commonComponents/SuccessConfirmMessage';
import Button from 'library/common/commonComponents/Buttons/Button';
import { getResetNavigation } from 'library/utilities/navigator';

import styles from './forgotPasswordConfirmedStyles';

export default function ForgotPasswordConfirmed() {
	return (
		<Screen isCentered>
			<View style={styles.container}>
				<SuccessConfirmMessage
					title='Email Sent'
					text='Please check your email to create new password'
				/>
				<Button onClick={getResetNavigation('Login')} style={styles.button}>
					Go Back
				</Button>
			</View>
		</Screen>
	);
}
