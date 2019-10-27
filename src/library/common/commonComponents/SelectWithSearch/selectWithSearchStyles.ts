import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	input: {
		height: 40,
		borderRadius: 2,
		borderColor: '#9E9E9E',
		paddingLeft: 10,
		paddingRight: 50,
		color: '$colorBlack',
		fontFamily: 'Poppins',
		fontSize: '$fontSize.small',
		borderWidth: 1,
	},
	inputLabel: {
		marginBottom: 3,
		color: '#9E9E9E',
		fontFamily: 'Poppins',
		fontSize: '$fontSize.mini',
	},
	container: {
		position: 'relative',
	},
	wrapper: {
		marginBottom: 16,
		zIndex: 100,
	},
	loop: {
		position: 'absolute',
		zIndex: 10,
		right: 8,
		top: 8,
	},
	dropdown: {
		position: 'absolute',
		left: 0,
		top: 40,
		width: '100%',
		maxHeight: 200,
	},
	dropdownItem: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 8,
		paddingBottom: 8,
		borderColor: '#9E9E9E',
		borderWidth: 1,
		borderTopWidth: 0,
		backgroundColor: '$colorWhite',
		width: '100%',
	},
	dropdownItemText: {
		width: '100%',
	},
	error: {
		fontFamily: 'Poppins',
		fontSize: '$fontSize.xmini',
		marginBottom: 10,
		color: '$colorRed',
		marginTop: 2,
	},
});
