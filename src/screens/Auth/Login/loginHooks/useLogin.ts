import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { loginUser } from 'library/utilities/token';
import { SIGN_MUTATION } from 'library/api/sign';
import { validateEmail } from 'library/utilities/validation';

export default function useLogin() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [emailError, setEmailError] = useState<string | null>(null);
	const [passwordError, setPasswordError] = useState<string | null>(null);

	const [loginMutation, { loading }] = useMutation(SIGN_MUTATION);

	const makeLogin = () =>
		makeLoginHandler({ email, password, setEmailError, setPasswordError, loginMutation });

	return {
		email,
		setEmail,
		password,
		setPassword,
		makeLogin,
		emailError,
		passwordError,
		loading,
	};
}

export async function makeLoginHandler({
	email,
	password,
	setEmailError,
	setPasswordError,
	loginMutation,
}: {
	email: string;
	password: string;
	setEmailError: React.Dispatch<React.SetStateAction<string | null>>;
	setPasswordError: React.Dispatch<React.SetStateAction<string | null>>;
	loginMutation: any;
}) {
	const validationResult = validateLoginFields({
		email,
		password,
		setEmailError,
		setPasswordError,
	});

	if (!validationResult) return;

	try {
		const { data } = await loginMutation({ variables: { email, password } });
		console.log(data.sign);
		if (data.sign && data.sign.authToken) {
			loginUser(data.sign);
		} else {
			setPasswordError('Email or Password are incorrect');
		}
	} catch (ex) {
		setPasswordError('Email or Password are incorrect');
	}
}

export function validateLoginFields({
	email,
	password,
	setEmailError,
	setPasswordError,
}: {
	email: string;
	password: string;
	setEmailError: React.Dispatch<React.SetStateAction<string | null>>;
	setPasswordError: React.Dispatch<React.SetStateAction<string | null>>;
}) {
	let isSuccess = true;
	if (email.trim().length === 0) {
		isSuccess = false;
		setEmailError('Email cannot be blank');
	} else if (validateEmail(email)) {
		isSuccess = false;
		setEmailError('Email is incorrect');
	} else {
		setEmailError(null);
	}

	if (password.trim().length === 0) {
		isSuccess = false;
		setPasswordError('Password cannot be blank');
	} else {
		setPasswordError(null);
	}

	return isSuccess;
}
