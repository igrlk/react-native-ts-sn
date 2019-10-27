import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	text: {
		fontFamily: 'Poppins',
		fontSize: '$fontSize.xlarge',
	},
	backButton: {
		paddingVertical: 10,
		paddingLeft: 0,
		paddingRight: 21,
	},
});
