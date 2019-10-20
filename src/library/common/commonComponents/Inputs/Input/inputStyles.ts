import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	input: {
		height: 40,
		width: '100%',
		paddingLeft: 12,
		borderRadius: 2,
		borderWidth: 1,
		borderColor: '#EBEBEB',
		backgroundColor: '$colorWhite',
		fontSize: 12,
		color: '$colorBlack',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		zIndex: 0,
	},
	inputDark: {
		height: 40,
		borderRadius: 2,
		borderColor: '#9E9E9E',
		paddingLeft: 10,
		paddingRight: 10,
		color: '$colorBlack',
		fontFamily: 'Poppins',
		fontSize: 16,
		lineHeight: 24,
		borderWidth: 1,
	},
	label: {
		fontFamily: 'Poppins',
		fontSize: 12,
		lineHeight: 18,
	},
	labelDark: {
		marginBottom: -3,
		color: '#9E9E9E',
		fontFamily: 'Poppins',
		fontSize: 14,
		lineHeight: 21,
	},
	labelContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	error: {
		fontFamily: 'Poppins',
		fontSize: 10,
		lineHeight: 15,
		color: '$colorRed',
		marginTop: 2,
	},
	textArea: {
		height: 86,
	},
});
