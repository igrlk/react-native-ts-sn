import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import Screen from 'library/common/commonComponents/Screen';

import styles from './onboardingStyles';
import Button from 'library/common/commonComponents/Buttons/Button';
import { getNavigateTo } from 'library/utilities/navigator';

export default function Onboarding() {
	return (
		<Screen>
			<View style={styles.container}>
				<Text style={styles.title}>1. Select Service</Text>
				<Text style={styles.text}>
					Sign up on our app, select number of samples to be diagnosed, add mailing address and pay.
				</Text>

				<Text style={styles.title}>2. Ship Us Samples</Text>
				<Text style={styles.text}>
					Complete information on sample labels. Ship us samples in our pre-paid envelope.
				</Text>

				<Text style={styles.title}>3. Get Results</Text>
				<Text style={styles.text}>You can review the diagnosis report in less than a week. </Text>

				<Button style={styles.button} onClick={getNavigateTo('Landing')}>
					Get Started
				</Button>
			</View>
		</Screen>
	);
}
