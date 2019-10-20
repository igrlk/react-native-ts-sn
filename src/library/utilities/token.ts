import AsyncStorage from 'library/utilities/asyncStorage';

import { resetNavigation, navigateTo } from './navigator';

export const name = 'authToken';

export const setToken = (authToken: string) => AsyncStorage.setItem(name, authToken);

export const getToken = async () => {
	const token = await AsyncStorage.getItem(name);
	if (await AsyncStorage.getItem('isTokenForRegistration')) {
		AsyncStorage.removeItem('isTokenForRegistration');
		AsyncStorage.removeItem(name);
	}

	return token;
};

export const checkTokenForLogin = async () => {
	const authToken = await getToken();

	if (authToken) {
		resetNavigation('Landing');

		return true;
	}

	return false;
};

export const removeToken = async () => AsyncStorage.removeItem(name);

export const loginUser = async ({
	authToken,
	email,
	uuid,
	showOnboarding,
}: {
	authToken: string;
	email: string;
	uuid: string;
	showOnboarding?: boolean;
}) => {
	await Promise.all([
		AsyncStorage.setItem(name, authToken),
		AsyncStorage.setItem('email', email),
		AsyncStorage.setItem('uuid', uuid),
	]);
	if (showOnboarding) {
		resetNavigation('Onboarding');
	} else {
		resetNavigation('Landing');
	}
};

export const logout = () => {
	AsyncStorage.removeItem(name);
	resetNavigation('Login');
};
