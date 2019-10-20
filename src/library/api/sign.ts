import { gql } from 'apollo-boost';

export const SIGN_MUTATION = gql`
	mutation sign($email: String!, $password: String!) {
		sign(params: { email: $email, password: $password }) {
			email
			authToken
			samples
			uuid
		}
	}
`;

export const SIGN_BY_KEY_MUTATION = gql`
	mutation signByKey($verifiedKey: String!) {
		signByKey(verifiedKey: $verifiedKey) {
			authToken
		}
	}
`;

export const SIGN_UP_MUTATION = gql`
	mutation sign($email: String!) {
		sign(params: { email: $email }) {
			email
			authToken
			samples
			uuid
		}
	}
`;

export const UPDATE_PASSWORD_MUTATION = gql`
	mutation updatePassword($password: String!) {
		updatePassword(password: $password)
	}
`;
