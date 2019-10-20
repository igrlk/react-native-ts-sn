import React from 'react';
import { mount } from 'enzyme';

import * as token from 'library/utilities/token';
import useLogin, { validateLoginFields, makeLoginHandler } from '../useLogin';
import ApolloTestWrapper from 'library/common/commonComponents/ApolloTestWrapper/ApolloTestWrapper';

function HookWrapper(props: any) {
	const hook = props.hook ? props.hook() : undefined;

	return <div hook={hook} />;
}

describe('useLogin', () => {
	it('should return correct values', () => {
		const component = mount(
			<ApolloTestWrapper>
				<HookWrapper hook={() => useLogin()} />
			</ApolloTestWrapper>,
		);
		const {
			hook: {
				email,
				setEmail,
				password,
				setPassword,
				makeLogin,
				emailError,
				passwordError,
				loading,
			},
		} = component.find('div').props() as any;

		expect(email).toBe('');
		expect(typeof setEmail).toBe('function');
		expect(password).toBe('');
		expect(typeof setPassword).toBe('function');
		expect(typeof makeLogin).toBe('function');
		expect(emailError).toBe(null);
		expect(passwordError).toBe(null);
		expect(loading).toBe(false);
	});
});

describe('validateLoginFields', () => {
	it('should validate login fields', () => {
		const setEmailError = jest.fn();
		const setPasswordError = jest.fn();
		expect(
			validateLoginFields({
				email: '',
				password: '',
				setEmailError,
				setPasswordError,
			}),
		).toBe(false);
		expect(setEmailError).toHaveBeenCalledWith('Email cannot be blank');
		expect(setPasswordError).toHaveBeenCalledWith('Password cannot be blank');
	});

	it('should validate login fields', () => {
		const setEmailError = jest.fn();
		const setPasswordError = jest.fn();
		expect(
			validateLoginFields({
				email: '',
				password: '',
				setEmailError,
				setPasswordError,
			}),
		).toBe(false);
		expect(setEmailError).toHaveBeenCalledWith('Email cannot be blank');
		expect(setPasswordError).toHaveBeenCalledWith('Password cannot be blank');
	});

	it('should validate login fields', () => {
		const setEmailError = jest.fn();
		const setPasswordError = jest.fn();
		expect(
			validateLoginFields({
				email: 'qwe',
				password: 'qwe',
				setEmailError,
				setPasswordError,
			}),
		).toBe(false);
		expect(setEmailError).toHaveBeenCalledWith('Email is incorrect');
		expect(setPasswordError).toHaveBeenCalledWith(null);
	});
});

describe('makeLoginHandler', () => {
	it('should return undefined if validatedResult === false', async () => {
		expect(
			await makeLoginHandler({
				email: '',
				password: '',
				setEmailError: jest.fn(),
				setPasswordError: jest.fn(),
				loginMutation: jest.fn(),
			}),
		).toBe(undefined);
	});

	it('should call loginMutation and token.loginUser', async () => {
		Object.defineProperty(token, 'loginUser', { value: jest.fn() });
		const loginMutation = jest.fn(() => Promise.resolve({ data: { sign: { authToken: 'qwe' } } }));
		await makeLoginHandler({
			email: 'qwe@mail.ru',
			password: 'qwe',
			setEmailError: jest.fn(),
			setPasswordError: jest.fn(),
			loginMutation,
		});

		expect(loginMutation).toHaveBeenLastCalledWith({
			variables: { email: 'qwe@mail.ru', password: 'qwe' },
		});
		expect(token.loginUser).toHaveBeenLastCalledWith({ authToken: 'qwe' });
	});

	it('should call loginMutation and setPasswordError', async () => {
		const loginMutation = jest.fn(() => Promise.resolve({ data: { sign: { authToken: null } } }));
		const setPasswordError = jest.fn();
		await makeLoginHandler({
			email: 'qwe@mail.ru',
			password: 'qwe',
			setEmailError: jest.fn(),
			setPasswordError,
			loginMutation,
		});

		expect(setPasswordError).toHaveBeenLastCalledWith('Email or Password are incorrect');
	});

	it('should call setPasswordError', async () => {
		const loginMutation = jest.fn(() => Promise.reject());
		const setPasswordError = jest.fn();
		await makeLoginHandler({
			email: 'qwe@mail.ru',
			password: 'qwe',
			setEmailError: jest.fn(),
			setPasswordError,
			loginMutation,
		});

		expect(setPasswordError.mock.calls).toEqual([[null], ['Email or Password are incorrect']]);
	});
});
