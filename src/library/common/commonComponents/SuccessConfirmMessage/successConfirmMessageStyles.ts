import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	title: {
		fontFamily: 'Poppins',
		fontSize: '$fontSize.xlarge',
		marginTop: 28,
		marginBottom: 25,
		color: '$colorBlack',
		textAlign: 'center',
	},
	text: {
		fontFamily: 'Poppins',
		fontSize: '$fontSize.medium',
		textAlign: 'center',
		color: '#9E9E9E',
	},
});
