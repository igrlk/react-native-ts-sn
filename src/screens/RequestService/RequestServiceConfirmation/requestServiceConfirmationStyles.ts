import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	title: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 26,
		marginTop: 20,
	},
	titleText: {
		marginLeft: 12,
		fontFamily: 'Poppins',
		fontSize: '$fontSize.xlarge',
		marginBottom: 25,
	},
	quantity: {
		flexDirection: 'row',
	},
	text: {
		marginTop: 44,
		marginBottom: 55,
		fontSize: '$fontSize.small',
		fontFamily: 'Poppins',
		color: '#9E9E9E',
		paddingRight: 10,
	},
	button: {
		marginBottom: 20,
	},
});
