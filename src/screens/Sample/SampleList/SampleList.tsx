import React from 'react';
import { View } from 'react-native';

import Screen from 'library/common/commonComponents/Screen';
import GoBackButton from 'library/common/commonComponents/Buttons/GoBackButton';
import ListOfSamples from 'library/common/commonComponents/ListOfSamples/ListOfSamples';

import styles from './sampleListStyles';
import { NavigationParams } from 'library/common/commonTypes/navigation';

interface SampleListProps {
	navigation: NavigationParams;
}

export default function SampleList({ navigation }: SampleListProps) {
	return (
		<Screen>
			<GoBackButton>Sample List</GoBackButton>
			<View style={styles.list}>
				<ListOfSamples samples={navigation.state.params && navigation.state.params.samples} />
			</View>
		</Screen>
	);
}
