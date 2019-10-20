import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { navigateTo } from 'library/utilities/navigator';
import { ADD_SAMPLES_MUTATION } from 'library/api/samples';
import { GraphqlMutation } from 'library/common/commonTypes/graphql';

export interface UseCouponCodeParams {
	address: string;
	city: string;
	fullName: string;
	selectedSamplesCount: number;
	state: string;
	zipCode: string;
}

export default function useCouponCode(params: UseCouponCodeParams) {
	const [couponCode, setCouponCode] = useState<string>('');
	const [couponCodeError, setCouponCodeError] = useState<string | null>(null);

	const [addSamplesMutation, { loading }] = useMutation(ADD_SAMPLES_MUTATION);

	const makeCouponCodeProcessing = () =>
		makeCouponCodeProcessingHandler({ couponCode, setCouponCodeError, params, addSamplesMutation });

	return { couponCode, setCouponCode, couponCodeError, makeCouponCodeProcessing, loading };
}

export async function makeCouponCodeProcessingHandler({
	couponCode,
	setCouponCodeError,
	params,
	addSamplesMutation,
}: {
	couponCode: string;
	setCouponCodeError: React.Dispatch<React.SetStateAction<string | null>>;
	params: UseCouponCodeParams;
	addSamplesMutation: GraphqlMutation;
}) {
	const validationResult = validateCouponCode({ couponCode, setCouponCodeError });
	if (!validationResult) return;

	try {
		const data = await addSamplesMutation({
			variables: { ...params, samplesCount: params.selectedSamplesCount, couponCode },
		});
		console.log(data);
	} catch (ex) {
		console.error(ex);
	}

	navigateTo('RequestServiceConfirmation', { ...params, couponCode });
}

export function validateCouponCode({
	couponCode,
	setCouponCodeError,
}: {
	couponCode: string;
	setCouponCodeError: React.Dispatch<React.SetStateAction<string | null>>;
}) {
	const trimmedCode = couponCode.trim();
	let isSuccess = true;
	if (trimmedCode.length === 0) {
		isSuccess = false;
		setCouponCodeError('Coupon code cannot be blank');
	} else if (trimmedCode !== 'sentinel') {
		isSuccess = false;
		setCouponCodeError('Coupon code is incorrect');
	} else {
		setCouponCodeError(null);
	}

	return isSuccess;
}
