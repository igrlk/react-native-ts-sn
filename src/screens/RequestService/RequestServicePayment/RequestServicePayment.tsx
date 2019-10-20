import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { NavigationParams } from 'library/common/commonTypes/navigation';
import Screen from 'library/common/commonComponents/Screen';
import GoBackButton from 'library/common/commonComponents/Buttons/GoBackButton';
import Input from 'library/common/commonComponents/Inputs/Input';
import Button from 'library/common/commonComponents/Buttons/Button';
import useCouponCode, { UseCouponCodeParams } from './requestServicePaymentHooks/useCouponCode';

import styles from './requestServicePaymentStyles';
import WithLoader from 'library/common/commonComponents/WithLoader';

interface SignUpAddPasswordProps {
	navigation: NavigationParams;
}

export default function RequestServicePayment({ navigation }: SignUpAddPasswordProps) {
	const params = navigation.state.params || {
		address: '23r2	3',
		city: '234234',
		fullName: '23r',
		selectedSamplesCount: 2,
		state: '123123',
		zipCode: '234',
	};

	const {
		couponCode,
		setCouponCode,
		couponCodeError,
		makeCouponCodeProcessing,
		loading,
	} = useCouponCode(params as UseCouponCodeParams);

	return (
		<Screen>
			<WithLoader loading={loading}>
				<GoBackButton>Payment</GoBackButton>
				<Input
					value={couponCode}
					onChange={setCouponCode}
					label='Promotion code'
					style={styles.input}
					error={couponCodeError}
				/>
				<View style={styles.total}>
					<Text style={styles.totalText}>Total</Text>
					<View style={styles.totalCountWrapper}>
						<Text style={styles.totalCountDashed}>$ {params.selectedSamplesCount * 300}</Text>
						<Text style={styles.totalText}>$ 0</Text>
					</View>
				</View>

				<Button onClick={makeCouponCodeProcessing}>Next</Button>
			</WithLoader>
		</Screen>
	);
}
