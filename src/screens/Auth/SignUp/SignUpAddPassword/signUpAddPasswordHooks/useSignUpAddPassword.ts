import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { navigateTo } from 'library/utilities/navigator';
import { SIGN_BY_KEY_MUTATION, UPDATE_PASSWORD_MUTATION } from 'library/api/sign';
import { setToken, loginUser } from 'library/utilities/token';
import AsyncStorage from 'library/utilities/asyncStorage';

export default function useSignUpAddPassword(email: string, signUpKey: string) {
	const [password, setPassword] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string | null>(null);

	const [
		signByKeyMutation,
		{ data: signByKeyData, loading: signByKeyLoading, error: signByKeyError },
	] = useMutation(SIGN_BY_KEY_MUTATION);
	if (signByKeyError) navigateTo('Login');

	useEffect(() => {
		if (signByKeyData) {
			setToken(signByKeyData.signByKey.authToken);
			AsyncStorage.setItem('isTokenForRegistration', true);
		}
	}, [signByKeyData]);

	const [
		updatePasswordMutation,
		{ loading: updatePasswordLoading, data, error: updatePasswordError },
	] = useMutation(UPDATE_PASSWORD_MUTATION);

	useEffect(() => {
		signByKeyMutation({ variables: { verifiedKey: signUpKey } });
	}, []);

	const makeRegistration = () =>
		makeRegistrationHandler({
			password,
			setPasswordError,
			updatePasswordMutation,
			authToken: signByKeyData.signByKey.authToken,
			email,
		});

	return {
		password,
		setPassword,
		passwordError,
		loading: signByKeyLoading || updatePasswordLoading,
		makeRegistration,
	};
}

export async function makeRegistrationHandler({
	password,
	setPasswordError,
	updatePasswordMutation,
	authToken,
	email,
}: {
	password: string;
	setPasswordError: React.Dispatch<React.SetStateAction<string | null>>;
	updatePasswordMutation: any;
	authToken: string;
	email: string;
}) {
	if (password.trim().length === 0) {
		return setPasswordError('Password cannot be blank');
	} else {
		setPasswordError(null);
	}

	const result = await updatePasswordMutation({ variables: { password } });
	loginUser({
		authToken,
		email,
		uuid: '',
		showOnboarding: !result.data.updatePassword,
	});
}
