import React from 'react';
import { Text } from 'react-native';

import Screen from 'library/common/commonComponents/Screen';
import WithLoader from 'library/common/commonComponents/WithLoader';
import SuccessConfirmMessage from 'library/common/commonComponents/SuccessConfirmMessage';
import Input from 'library/common/commonComponents/Inputs/Input';
import Button from 'library/common/commonComponents/Buttons/Button';
import { NavigationParams } from 'library/common/commonTypes/navigation';
import useSignUpAddPassword from './signUpAddPasswordHooks/useSignUpAddPassword';

import styles from './signUpAddPasswordStyles';

interface SignUpAddPasswordProps {
	navigation: NavigationParams;
}

export default function SignUpAddPassword({ navigation }: SignUpAddPasswordProps) {
	const email = navigation.state.params && navigation.state.params.signUpEmail;
	const signUpKey = navigation.state.params && navigation.state.params.signUpKey;

	const { password, setPassword, passwordError, loading, makeRegistration } = useSignUpAddPassword(
		email,
		signUpKey,
	);

	return (
		<Screen isCentered>
			<WithLoader loading={loading}>
				<SuccessConfirmMessage title='Your email is verified' text='Enter new password to login' />
				<Text style={styles.label}>Email</Text>
				<Text style={styles.email}>{email}</Text>
				<Input
					label='Password'
					value={password}
					onChange={setPassword}
					error={passwordError}
					style={styles.input}
				/>
				<Button onClick={makeRegistration}>Login</Button>
			</WithLoader>
		</Screen>
	);
}
