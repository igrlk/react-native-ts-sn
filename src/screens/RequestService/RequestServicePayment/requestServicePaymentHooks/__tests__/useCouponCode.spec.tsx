import * as navigator from 'library/utilities/navigator';
import { validateCouponCode, makeCouponCodeProcessingHandler } from '../useCouponCode';

describe('makeCouponCodeProcessingHandler', () => {
	it('should call navigateTo if validationResult === true', async done => {
		const addSamplesMutation = jest.fn(() => Promise.resolve({ data: {} }));

		expect(
			await makeCouponCodeProcessingHandler({
				couponCode: '',
				setCouponCodeError: jest.fn(),
				params: { value: 'some-value' } as any,
				addSamplesMutation,
			}),
		).toBe(undefined);
		done();
	});

	it('should call navigateTo if validationResult === true', async () => {
		Object.defineProperty(navigator, 'navigateTo', { value: jest.fn() });
		const addSamplesMutation = jest.fn(() => Promise.resolve({ data: {} }));
		await makeCouponCodeProcessingHandler({
			couponCode: 'sentinel',
			setCouponCodeError: jest.fn(),
			params: { value: 'some-value' } as any,
			addSamplesMutation,
		});

		expect(navigator.navigateTo).toHaveBeenCalledWith('RequestServiceConfirmation', {
			couponCode: 'sentinel',
			value: 'some-value',
		});
	});
});

describe('validateCouponCode', () => {
	it('should validate couponCode', () => {
		const setCouponCodeError = jest.fn();
		expect(validateCouponCode({ couponCode: '', setCouponCodeError })).toBe(false);
		expect(setCouponCodeError).toHaveBeenCalledWith('Coupon code cannot be blank');
	});

	it('should validate couponCode', () => {
		const setCouponCodeError = jest.fn();
		expect(validateCouponCode({ couponCode: 'wrong-coupon-code', setCouponCodeError })).toBe(false);
		expect(setCouponCodeError).toHaveBeenCalledWith('Coupon code is incorrect');
	});

	it('should validate couponCode', () => {
		const setCouponCodeError = jest.fn();
		expect(validateCouponCode({ couponCode: 'sentinel', setCouponCodeError })).toBe(true);
		expect(setCouponCodeError).toHaveBeenCalledWith(null);
	});
});
