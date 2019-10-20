import React from 'react';
import { TextInput, Text, View } from 'react-native';

import styles from './inputStyles';

interface InputProps {
	label?: string;
	value: string;
	onChange: (value: string) => void;
	style?: { [key: string]: any };
	rightLabel?: any;
	error?: string | null;
	multiline?: boolean;
	numberOfLines?: number;
	theme?: 'common' | 'dark';
}

export default function Input({
	label,
	value,
	onChange,
	style: extraStyle,
	rightLabel,
	error,
	multiline,
	numberOfLines,
	theme,
}: InputProps) {
	return (
		<View style={extraStyle}>
			<View style={styles.labelContainer}>
				{label && <Text style={[styles.label, theme === 'dark' && styles.labelDark]}>{label}</Text>}
				{rightLabel}
			</View>
			<TextInput
				autoCapitalize='none'
				value={value}
				onChangeText={onChange}
				style={[styles.input, multiline && styles.textArea, theme === 'dark' && styles.inputDark]}
				multiline={multiline}
				numberOfLines={numberOfLines}
			/>
			{error && <Text style={styles.error}>{error}</Text>}
		</View>
	);
}

Input.defaultProps = {
	style: {},
};
