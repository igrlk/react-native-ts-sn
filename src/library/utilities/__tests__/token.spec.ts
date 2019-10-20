import AsyncStorage from 'library/utilities/asyncStorage';
import {
	name,
	setToken,
	removeToken,
	getToken,
	checkTokenForLogin,
	logout,
	loginUser,
} from '../token';
import * as navigator from 'library/utilities/navigator';

describe('setToken', () => {
	it('should save token in storage', () => {
		AsyncStorage.setItem = jest.fn();
		const token = 'some-token';
		setToken(token);

		expect(AsyncStorage.setItem).toHaveBeenCalledWith(name, token);
	});
});

describe('removeToken', () => {
	it('should remove token from storage', async () => {
		AsyncStorage.removeItem = jest.fn();
		await removeToken();

		expect(AsyncStorage.removeItem).toHaveBeenCalledWith(name);
	});
});

describe('getToken', () => {
	it('should return token from storage', () => {
		AsyncStorage.getItem = jest.fn();
		getToken();

		expect(AsyncStorage.getItem).toHaveBeenCalledWith(name);
	});
});

describe('checkTokenForLogin', () => {
	it('should get authToken from storage, and reset navigation to landing and return true', async () => {
		AsyncStorage.getItem = jest.fn(() => Promise.resolve('qwe'));
		Object.defineProperty(navigator, 'resetNavigation', { value: jest.fn() });
		const result = await checkTokenForLogin();

		expect(result).toBe(true);
		expect(navigator.resetNavigation).toHaveBeenLastCalledWith('Landing');
	});

	it('should get authToken from storage, and return false because token is null', async () => {
		AsyncStorage.getItem = jest.fn(() => Promise.resolve(null));
		await removeToken();
		Object.defineProperty(navigator, 'resetNavigation', { value: jest.fn() });
		const result = await checkTokenForLogin();

		expect(result).toBe(false);
	});
});

describe('logout', () => {
	it('should remove token from storage and reset navigation to login', () => {
		AsyncStorage.removeItem = jest.fn();
		Object.defineProperty(navigator, 'resetNavigation', { value: jest.fn() });
		logout();

		expect(AsyncStorage.removeItem).toHaveBeenLastCalledWith(name);
		expect(navigator.resetNavigation).toHaveBeenLastCalledWith('Login');
	});
});

describe('loginUser', () => {
	it('should save token and email to storage, resetNavigation to landing, set wasLoggedIn', async () => {
		const setItem = jest.spyOn(AsyncStorage, 'setItem');
		const authToken = 'some-auth-token';
		const email = 'some-email';
		Object.defineProperty(navigator, 'resetNavigation', { value: jest.fn() });
		await loginUser({ authToken, email, uuid: 'qwe' });

		expect(navigator.resetNavigation).toHaveBeenCalledWith('Landing');
		setItem.mockClear();
	});

	it('should save token and email to storage, resetNavigation to landing, set wasLoggedIn', async () => {
		const setItem = jest.spyOn(AsyncStorage, 'setItem');
		const authToken = 'some-auth-token';
		const email = 'some-email';
		AsyncStorage.getItem = jest.fn(() => Promise.resolve(true));
		Object.defineProperty(navigator, 'resetNavigation', { value: jest.fn() });
		await loginUser({ authToken, email, showOnboarding: true, uuid: 'qwe' });

		expect(navigator.resetNavigation).toHaveBeenCalledWith('Onboarding');
		setItem.mockClear();
	});
});
