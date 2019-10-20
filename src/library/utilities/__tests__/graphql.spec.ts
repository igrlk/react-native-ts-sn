import { getErrorMessage } from '../graphql';

describe('getErrorMessage', () => {
	it('should cut argument and return result', () => {
		expect(getErrorMessage('[GraphQL error]: Message: INTERNAL_SERVER_ERROR')).toBe(
			'INTERNAL_SERVER_ERROR',
		);
	});
});
