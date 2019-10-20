import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	title: {
		fontFamily: 'Poppins',
		fontSize: 24,
		lineHeight: 36,
		marginTop: 28,
		marginBottom: 25,
		color: '$colorBlack',
		textAlign: 'center',
	},
	text: {
		fontFamily: 'Poppins',
		fontSize: 18,
		textAlign: 'center',
		color: '#9E9E9E',
	},
});
