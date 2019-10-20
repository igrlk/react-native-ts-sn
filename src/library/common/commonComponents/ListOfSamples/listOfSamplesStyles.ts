import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	sample: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 7,
		marginBottom: 10,
		borderBottomWidth: 1,
		borderColor: '#E1E1E1',
	},
	sampleId: {
		fontFamily: 'Poppins',
		fontSize: 16,
		lineHeight: 24,
		color: '$colorBlack',
	},
	sampleText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	sampleTextValue: {
		fontFamily: 'Poppins',
		fontSize: 12,
		lineHeight: 18,
		color: '#9E9E9E',
	},
	circle: {
		width: 8,
		height: 8,
		backgroundColor: '#FF8412',
		marginRight: 6,
		borderRadius: 100,
	},
});
