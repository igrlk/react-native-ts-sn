import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	container: {
		position: 'relative',
		marginBottom: 4,
		alignItems: 'flex-start',
	},
	line: {
		borderColor: '#E1E1E1',
		borderBottomWidth: 1,
		position: 'absolute',
		width: '100%',
		top: '50%',
		left: 0,
	},
	text: {
		backgroundColor: '$colorWhite',
		position: 'relative',
		zIndex: 1,
		fontFamily: 'Poppins',
		fontSize: '$fontSize.medium',
		marginVertical: 15,
		color: '#9E9E9E',
		textTransform: 'uppercase',
		paddingRight: 5,
	},
});
