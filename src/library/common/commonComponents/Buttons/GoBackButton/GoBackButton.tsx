import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import GoBackIcon from 'resources/images/svg/GoBackIcon';
import { goBack } from 'library/utilities/navigator';

import styles from './goBackButtonStyles';

interface GoBackButtonProps {
	children: React.ReactNode;
}

export default function GoBackButton({ children }: GoBackButtonProps) {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={goBack}>
				<GoBackIcon />
			</TouchableOpacity>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
}
