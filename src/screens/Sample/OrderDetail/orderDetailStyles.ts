import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	textWithLabel: {
		marginTop: 20,
	},
	sampleStatusTitle: {
		marginBottom: 12,
		color: '#9E9E9E',
		fontFamily: 'Poppins',
		fontSize: 14,
		lineHeight: 21,
	},
	sampleStatusContainer: {
		marginBottom: 40,
	},
	sampleStatusItem: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingBottom: 20,
		position: 'relative',
	},
	sampleStatusItemLine: {
		width: 1,
		height: '100% + 1',
		maxHeight: 77,
		backgroundColor: '#E3E3E3',
		position: 'absolute',
		left: 5,
		top: 11,
	},
	sampleStatusItemLineWhite: {
		backgroundColor: '$colorWhite',
	},
	sampleStatusText: {
		fontFamily: 'Poppins',
		fontSize: 12,
		lineHeight: 18,
		color: '#9E9E9E',
		marginTop: -3,
	},
	sampleStatusTextRed: {
		color: '$colorRed',
	},
	sampleStatusTextOrange: {
		color: '$colorOrange',
	},
	sampleStatusTextBlue: {
		color: '$colorBlue',
	},
	sampleStatusTextPurple: {
		color: '$colorPurple',
	},
	sampleStatusTextGreen: {
		color: '$colorGreen',
	},
	sampleStatusDate: {
		color: '$colorBlack',
		fontFamily: 'Poppins',
		fontSize: 12,
		lineHeight: 18,
	},
	circle: {
		width: 11,
		height: 11,
		borderRadius: 100,
		marginRight: 4,
		backgroundColor: '#9E9E9E',
	},
	circleRed: {
		backgroundColor: '$colorRed',
	},
	circleOrange: {
		backgroundColor: '$colorOrange',
	},
	circleBlue: {
		backgroundColor: '$colorBlue',
	},
	circlePurple: {
		backgroundColor: '$colorPurple',
	},
	circleGreen: {
		backgroundColor: '$colorGreen',
	},
});
