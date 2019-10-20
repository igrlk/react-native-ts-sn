import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './screenStyles';

interface ScreenProps {
	style?: { [key: string]: any };
	children: React.ReactNode;
	isCentered?: boolean;
	scrollRef?: React.RefObject<ScrollView>;
}

export default function Screen({
	style: extraStyle,
	children,
	isCentered,
	scrollRef,
}: ScreenProps) {
	return (
		<View style={{ flex: 1 }}>
			<View style={[styles.screen, isCentered && styles.screenCentered, extraStyle]}>
				<View style={styles.screenInner}>
					<ScrollView ref={scrollRef}>{children}</ScrollView>
				</View>
			</View>
		</View>
	);
}

Screen.defaultProps = {
	style: {},
};
