import React from 'react';
import { View } from 'react-native';

import Screen from 'library/common/commonComponents/Screen';
import SuccessConfirmMessage from 'library/common/commonComponents/SuccessConfirmMessage';
import Button from 'library/common/commonComponents/Buttons/Button';
import { getNavigateTo } from 'library/utilities/navigator';
import { NavigationParams } from 'library/common/commonTypes/navigation';

import styles from './SuccessfulDownloadScreenStyles';

interface SuccessfulDownloadScreenProps {
    navigation: NavigationParams;
} 

export default function SuccessfulDownloadScreen({ navigation }: SuccessfulDownloadScreenProps) {
	const params = getParams({ navigation });

	return (
		<Screen isCentered>
			<View style={styles.container}>
				<SuccessConfirmMessage
					title='Loading is complete'
					text=''
				/>
				<Button onClick={getNavigateTo(params.backToScreen)} style={styles.button}>
					Go Back
				</Button>
			</View>
		</Screen>
	);
}

export const getParams = ({ navigation }: any) => {
	return navigation.state.params || {};
}