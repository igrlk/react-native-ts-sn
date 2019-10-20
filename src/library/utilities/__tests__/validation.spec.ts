import { validateEmail } from '../validation';

describe('validateEmail', () => {
	it('should validate email', () => {
		expect(validateEmail('qwe')).toBe(true);
		expect(validateEmail('test@email.com')).toBe(false);
	});
});
