import EStyleSheet from 'react-native-extended-stylesheet';

import normalizeFontSize from './normalizeFontSize';

EStyleSheet.build({
	$colorWhite: '#FFFFFF',
	$colorGreen: '#3BB54A',
	$colorBlue: '#0075FF',
	$colorPurple: '#9352DA',
	$colorOrange: '#FF9A40',
	$colorRed: '#EA4640',
	$colorBlack: '#000000',
	$colorGrey: '#333333',

	$fontSize: {
		xmini: normalizeFontSize(12),
		mini: normalizeFontSize(14),
		small: normalizeFontSize(16),
		medium: normalizeFontSize(18),
		large: normalizeFontSize(20),
		xlarge: normalizeFontSize(24),
	},
});
