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
		fontSize: '$fontSize.mini',
		color: '#9E9E9E',
	},
	text: {
		fontFamily: 'Poppins',
		fontSize: '$fontSize.small',
		color: '$colorBlack',
	},
});
