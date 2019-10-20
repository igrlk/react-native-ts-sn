import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './buttonStyles';

export type ButtonType = 'info' | 'common';

interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	style?: { [key: string]: any };
	type: ButtonType;
	icon?: any;
}

Button.defaultProps = {
	type: 'common',
};

export default function Button({ children, onClick, style: extraStyle, type, icon }: ButtonProps) {
	return (
		<TouchableOpacity
			onPress={onClick}
			style={[styles.button, getStylesForWrapperByType(type), extraStyle]}
		>
			{icon ? <View style={styles.buttonMargin}>{icon}</View> : null} 
			<Text style={[styles.buttonText, getStylesForTextByType(type)]}>{children}</Text>
		</TouchableOpacity>
	);
}

export function getStylesForWrapperByType(type: ButtonType) {
	if (type === 'info') {
		return styles.buttonInfo;
	}
}

export function getStylesForTextByType(type: ButtonType) {
	if (type === 'info') {
		return styles.buttonInfoText;
	}
}
