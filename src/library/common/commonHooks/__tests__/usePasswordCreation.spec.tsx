import React from 'react';
import { mount } from 'enzyme';

import usePasswordCreation, {
	makeSignUpCreationHandler,
	getEmailError,
} from '../usePasswordCreation';
import ApolloTestWrapper from 'library/common/commonComponents/ApolloTestWrapper/ApolloTestWrapper';

function HookWrapper(props: any) {
	const hook = props.hook ? props.hook() : undefined;

	return <div hook={hook} />;
}

describe('useLogin', () => {
	it('should return correct values', () => {
		const component = mount(
			<ApolloTestWrapper>
				<HookWrapper hook={() => usePasswordCreation('routeName')} />
			</ApolloTestWrapper>,
		);
		const {
			hook: { email, setEmail, emailError, loading, makeSignUpCreation },
		} = component.find('div').props() as any;

		expect(email).toBe('');
		expect(typeof setEmail).toBe('function');
		expect(emailError).toBe(null);
		expect(typeof makeSignUpCreation).toBe('function');
		expect(loading).toBe(false);
	});
});

describe('makeSignUpCreationHandler', () => {
	it('should validate email and send signUpMutation if email is not empty', async () => {
		const setEmailError = jest.fn();
		await makeSignUpCreationHandler({
			email: '',
			setEmailError,
			signUpMutation: jest.fn(),
		});

		expect(setEmailError).toHaveBeenLastCalledWith('Email cannot be blank');
	});

	it('should validate email and send signUpMutation if email is not empty', async () => {
		const setEmailError = jest.fn();
		const signUpMutation = jest.fn(() => Promise.resolve()) as any;
		await makeSignUpCreationHandler({
			email: 'qwe@mail.ru',
			setEmailError,
			signUpMutation,
		});

		expect(setEmailError).toHaveBeenLastCalledWith(null);
		expect(signUpMutation).toHaveBeenLastCalledWith({ variables: { email: 'qwe@mail.ru' } });
	});
});

describe('getEmailError', () => {
	it('should return correct error text', () => {
		expect(getEmailError({ message: '[GraphQL error]: Message: WRONG_PASSWORD' } as any)).toBe(
			'This email is already taken',
		);
		expect(getEmailError({ message: '[GraphQL error]: Message: NON_EXISTING_ERROR' } as any)).toBe(
			'Something went wrong...',
		);
	});
});
