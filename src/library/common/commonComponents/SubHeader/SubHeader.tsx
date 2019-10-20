import React from 'react';
import { View, Text } from 'react-native';

import styles from './subHeaderStyles';

interface SubHeaderProps {
	children: React.ReactNode;
}

export default function SubHeader({ children }: SubHeaderProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{children}</Text>
			<View style={styles.line} />
		</View>
	);
}
