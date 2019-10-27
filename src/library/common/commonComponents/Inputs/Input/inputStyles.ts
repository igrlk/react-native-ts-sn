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
		fontSize: '$fontSize.xmini',
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
		fontSize: '$fontSize.small',
		borderWidth: 1,
	},
	label: {
		fontFamily: 'Poppins',
		fontSize: '$fontSize.xmini',
	},
	labelDark: {
		marginBottom: -3,
		color: '#9E9E9E',
		fontFamily: 'Poppins',
		fontSize: '$fontSize.mini',
	},
	labelContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	error: {
		fontFamily: 'Poppins',
		fontSize: '$fontSize.xmini',
		marginBottom: 10,
		color: '$colorRed',
		marginTop: 2,
	},
	textArea: {
		height: 86,
	},
});
