import React from 'react';
import { mount } from 'enzyme';

import * as token from 'library/utilities/token';
import useSignUpAddPassword, { makeRegistrationHandler } from '../useSignUpAddPassword';
import ApolloTestWrapper from 'library/common/commonComponents/ApolloTestWrapper/ApolloTestWrapper';

function HookWrapper(props: any) {
	const hook = props.hook ? props.hook() : undefined;

	return <div hook={hook} />;
}

describe('useLogin', () => {
	it('should return correct values', () => {
		const component = mount(
			<ApolloTestWrapper>
				<HookWrapper hook={() => useSignUpAddPassword('email@gmail.com', 'some-key')} />
			</ApolloTestWrapper>,
		);
		const {
			hook: { password, setPassword, passwordError, loading, makeRegistration },
		} = component.find('div').props() as any;

		expect(password).toBe('');
		expect(typeof setPassword).toBe('function');
		expect(passwordError).toBe(null);
		expect(loading).toBe(true);
		expect(typeof makeRegistration).toBe('function');
	});
});

describe('makeRegistrationHandler', () => {
	it('should ', async () => {
		const setPasswordError = jest.fn();
		await makeRegistrationHandler({
			password: '',
			setPasswordError,
			updatePasswordMutation: jest.fn(),
			authToken: 'qwe',
			email: 'qwe@gmail.com',
		});
		expect(setPasswordError).toHaveBeenLastCalledWith('Password cannot be blank');
	});

	it('should ', async () => {
		const setPasswordError = jest.fn();
		const data = { authToken: 'qwe', email: 'qwe@gmail.com' };
		const updatePasswordMutation = jest.fn(() => Promise.resolve({ data }));
		Object.defineProperty(token, 'loginUser', { value: jest.fn() });
		await makeRegistrationHandler({
			password: 'qwe',
			setPasswordError,
			updatePasswordMutation,
			authToken: 'qwe',
			email: 'qwe@gmail.com',
		});
		expect(setPasswordError).toHaveBeenLastCalledWith(null);
		expect(updatePasswordMutation).toHaveBeenLastCalledWith({ variables: { password: 'qwe' } });
		expect(token.loginUser).toHaveBeenLastCalledWith({ ...data, showOnboarding: true, uuid: '' });
	});
});
