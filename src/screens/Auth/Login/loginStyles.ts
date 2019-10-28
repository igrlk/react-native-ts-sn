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
		fontSize: '$fontSize.mini',
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
		marginTop: 30,
		marginBottom: 25,
	},
	inputPassword: {
		marginBottom: 33,
	},
	forgotPassword: {
		color: '$colorBlue',
		fontSize: '$fontSize.xmini',
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
