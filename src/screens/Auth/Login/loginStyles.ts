import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	orContainer: {
		marginTop: 12,
		marginBottom: 12,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
	},
	orText: {
		color: '#929292',
		fontFamily: 'Poppins',
		fontSize: 13,
		lineHeight: 20,
		paddingLeft: 5,
		paddingRight: 5,
		backgroundColor: '$colorWhite',
	},
	orLine: {
		width: '100%',
		height: 1,
		backgroundColor: '#E1E1E1',
		position: 'absolute',
		top: '50%',
	},
	inputEmail: {
		marginBottom: 25,
	},
	inputPassword: {
		marginBottom: 33,
	},
	forgotPassword: {
		color: '$colorBlue',
		fontSize: 12,
		lineHeight: 18,
		marginBottom: 3,
	},
	logo: {
		marginTop: 59,
		marginBottom: 34,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
