import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	button: {
		backgroundColor: '$colorGreen',
		width: '100%',
		borderRadius: 5,
		height: 40,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: '$colorWhite',
		fontSize: 14,
		fontFamily: 'Poppins',
	},
	buttonInfo: {
		borderColor: '#E0E0E0',
		borderWidth: 1,
		backgroundColor: '$colorWhite',
	},
	buttonInfoText: {
		color: '#9E9E9E',
	},
	buttonMargin: {
		marginRight: 5,
	},
});
