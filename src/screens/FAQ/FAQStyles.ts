import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		paddingTop: 20,
	},
	title: {
		fontWeight: 'bold',
		fontSize: '$fontSize.medium',
		paddingBottom: 0,
	},
	text: {
		fontFamily: 'Poppins',
		fontSize: '$fontSize.mini',
		paddingBottom: 20,
	},
	button: {
		display: 'flex',
		alignItems: 'flex-end',
		marginBottom: 40,
	},
});
