import React from 'react';
import { View } from 'react-native';

import Screen from 'library/common/commonComponents/Screen';
import GoBackButton from 'library/common/commonComponents/Buttons/GoBackButton';
import WithLoader from 'library/common/commonComponents/WithLoader';
import Button from 'library/common/commonComponents/Buttons/Button';
import Input from 'library/common/commonComponents/Inputs/Input';
import usePasswordCreation from 'library/common/commonHooks/usePasswordCreation';

import styles from './signUpCreateStyles';

export default function SignUpCreate() {
	const { email, setEmail, emailError, makeSignUpCreation, loading } = usePasswordCreation(
		'SignUpConfirmed',
	);

	return (
		<Screen>
			<WithLoader loading={loading}>
				<GoBackButton>Create an Account</GoBackButton>
				<View style={styles.input}>
					<Input value={email} onChange={setEmail} label='Email' error={emailError} />
				</View>
				<Button onClick={makeSignUpCreation}>Sign Up</Button>
			</WithLoader>
		</Screen>
	);
}
