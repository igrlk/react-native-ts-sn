import React from 'react';
import { View, Text } from 'react-native';

import SuccessConfirmMessageIcon from 'resources/images/svg/SuccessConfirmMessageIcon';
import styles from './successConfirmMessageStyles';

interface SuccessConfirmMessageProps {
	title: string;
	text: string;
}

export default function SuccessConfirmMessage({ title, text }: SuccessConfirmMessageProps) {
	return (
		<View style={styles.container}>
			<SuccessConfirmMessageIcon />
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
}
