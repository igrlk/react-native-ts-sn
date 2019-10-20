import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'flex-start',
		marginBottom: 18,
		width: 145,
	},
	label: {
		fontFamily: 'Poppins',
		fontSize: 14,
		lineHeight: 21,
		color: '#9E9E9E',
	},
	text: {
		fontFamily: 'Poppins',
		fontSize: 16,
		lineHeight: 24,
		color: '$colorBlack',
	},
});
