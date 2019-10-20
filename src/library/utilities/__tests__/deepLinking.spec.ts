import * as navigator from 'library/utilities/navigator';
import {
	handleDeepLinking,
	getUrl,
	getParamsForSignUp,
	bindDeepLinkingHandlers,
} from '../deepLinking';

describe('handleDeepLinking', () => {
	it('should call getUrl, return undefined', () => {
		expect(handleDeepLinking(null)).toBe(undefined);
	});

	it('should call getUrl, navigateTo Signup', () => {
		Object.defineProperty(navigator, 'navigateTo', { value: jest.fn() });
		handleDeepLinking('sentinelapp://signup/email/code');

		expect(navigator.navigateTo).toHaveBeenCalledWith('SignUpAddPassword', {
			signUpEmail: 'email',
			signUpKey: 'code',
		});
	});

	it('should call getUrl, do nothing', () => {
		Object.defineProperty(navigator, 'navigateTo', { value: jest.fn() });
		handleDeepLinking('sentinelapp://invalid-string/');
	});
});

describe('getUrl', () => {
	it('should parse argument and return url without deep-linking prefix', () => {
		expect(getUrl('sentinelapp://signup')).toBe('signup');
		expect(getUrl({ url: 'sentinelapp://signup' })).toBe('signup');
	});

	it('should parse argument and return undefined', () => {
		expect(getUrl('')).toBe(undefined);
	});
});

describe('getParamsForSignUp', () => {
	it('should parse argument and return signUpKey and signUpEmail', () => {
		const email = 'some-email';
		const key = 'some-key';
		const url = `signup/${email}/${key}`;
		expect(getParamsForSignUp(url)).toEqual({ signUpEmail: email, signUpKey: key });
	});
});

describe('bindDeepLinkingHandlers', () => {
	it('should return function which uses Linking.getInitialUrl and Linking.addEventListener', () => {
		const Linking = {
			getInitialURL: jest.fn(() => Promise.resolve()),
			addEventListener: jest.fn(),
		};
		const fn = bindDeepLinkingHandlers(Linking as any);
		fn();
		expect(Linking.getInitialURL).toHaveBeenCalled();
		expect(Linking.addEventListener).toHaveBeenCalled();
	});
});
