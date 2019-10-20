import Storage, { prefix } from '../asyncStorage';
import { AsyncStorage } from 'react-native';

describe('setItem', () => {
	it('should save item in async storage', async () => {
		AsyncStorage.setItem = jest.fn();
		const name = 'some-name';
		const value = { value: 'some-value' };
		await Storage.setItem(name, value);

		expect(AsyncStorage.setItem).toHaveBeenCalledWith(prefix + name, JSON.stringify(value));
	});
});

describe('getItem', () => {
	it('should return item from async storage', async () => {
		const value = { value: 'some-value' };
		AsyncStorage.getItem = jest.fn(() => Promise.resolve(JSON.stringify(value)));
		const name = 'some-name';
		const result = await Storage.getItem(name);

		expect(result).toEqual(value);
		expect(AsyncStorage.getItem).toHaveBeenCalledWith(prefix + name);
	});

	it('should return item from async storage', async () => {
		AsyncStorage.getItem = jest.fn(() => Promise.resolve(null));
		const name = 'some-name';
		const result = await Storage.getItem(name);

		expect(result).toEqual(null);
		expect(AsyncStorage.getItem).toHaveBeenCalledWith(prefix + name);
	});
});

describe('removeItem', () => {
	it('should remove item from async storage', async () => {
		const name = 'some-name';
		AsyncStorage.removeItem = jest.fn();
		await Storage.removeItem(name);

		expect(AsyncStorage.removeItem).toHaveBeenCalledWith(prefix + name);
	});
});
