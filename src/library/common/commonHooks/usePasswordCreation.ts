import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ApolloError } from 'apollo-boost';

import { navigateTo } from 'library/utilities/navigator';
import { SIGN_UP_MUTATION } from 'library/api/sign';

import { GraphqlMutation } from 'library/common/commonTypes/graphql';
import { getErrorMessage } from 'library/utilities/graphql';
import { validateEmail } from 'library/utilities/validation';

export default function useForgotPasswordCreation(route: string) {
	const [email, setEmail] = useState<string>('');
	const [emailError, setEmailError] = useState<string | null>(null);

	const [signUpMutation, { data, loading, error }] = useMutation(SIGN_UP_MUTATION);
	if (data) navigateTo(route);
	if (error && !emailError) setEmailError(getEmailError(error));

	const makeSignUpCreation = () =>
		makeSignUpCreationHandler({ email, setEmailError, signUpMutation });

	return { email, setEmail, emailError, makeSignUpCreation, loading };
}

export async function makeSignUpCreationHandler({
	email,
	setEmailError,
	signUpMutation,
}: {
	email: string;
	setEmailError: React.Dispatch<React.SetStateAction<string | null>>;
	signUpMutation: GraphqlMutation;
}) {
	if (email.trim().length === 0) {
		return setEmailError('Email cannot be blank');
	} else if (validateEmail(email)) {
		return setEmailError('Email is incorrect');
	} else {
		setEmailError(null);
	}

	await signUpMutation({ variables: { email } });
}

export function getEmailError(error: ApolloError) {
	switch (getErrorMessage(error.message)) {
		case 'WRONG_PASSWORD':
			return 'This email is already taken';
		default:
			return 'Something went wrong...';
	}
}
