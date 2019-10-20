import React from 'react';
import { View, Text } from 'react-native';

import styles from './textWithLabelStyles';

interface TextWithLabelProps {
	text: string;
	label: string;
}

export default function TextWithLabel({ text, label }: TextWithLabelProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
}
