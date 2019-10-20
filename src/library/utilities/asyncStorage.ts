import { AsyncStorage } from 'react-native';

export const prefix = 'EventNetwork/';

export default class Storage {
	static async getItem(name: string) {
		const item = await AsyncStorage.getItem(prefix + name);

		if (item) return JSON.parse(item);

		return null;
	}

	static setItem(name: string, value: any) {
		return AsyncStorage.setItem(prefix + name, JSON.stringify(value));
	}

	static removeItem(name: string) {
		return AsyncStorage.removeItem(prefix + name);
	}
}
