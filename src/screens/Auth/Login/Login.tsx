import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import Screen from 'library/common/commonComponents/Screen';
import WithLoader from 'library/common/commonComponents/WithLoader';
import Button from 'library/common/commonComponents/Buttons/Button';
import Input from 'library/common/commonComponents/Inputs/Input';
import LoginLogo from 'resources/images/svg/LoginLogo';
import { getNavigateTo } from 'library/utilities/navigator';
import useLogin from './loginHooks/useLogin';

import styles from './loginStyles';
import { checkTokenForLogin } from 'library/utilities/token';

export default function Login() {
	const [isCheckingToken, setIsCheckingToken] = useState(true);

	const {
		email,
		setEmail,
		emailError,
		password,
		setPassword,
		passwordError,
		makeLogin,
		loading,
	} = useLogin();

	useEffect(() => {
		checkTokenForLogin().then(r => !r && setIsCheckingToken(false));
	}, []);

	return (
		<Screen>
			<WithLoader loading={isCheckingToken}>
				<View style={styles.logo}>
					<LoginLogo />
				</View>

				<WithLoader loading={loading}>
					<Input
						value={email}
						onChange={setEmail}
						label='Email'
						style={styles.inputEmail}
						error={emailError}
					/>
					<Input
						value={password}
						onChange={setPassword}
						label='Password'
						rightLabel={
							<Text style={styles.forgotPassword} onPress={getNavigateTo('ForgotPasswordCreate')}>
								Forgot password
							</Text>
						}
						style={styles.inputPassword}
						error={passwordError}
					/>

					<Button onClick={makeLogin}>Login</Button>

					<View style={styles.orContainer}>
						<View style={styles.orLine} />
						<Text style={styles.orText}>or</Text>
					</View>

					<Button onClick={getNavigateTo('SignUpCreate')}>Create an Account</Button>
				</WithLoader>
			</WithLoader>
		</Screen>
	);
}
