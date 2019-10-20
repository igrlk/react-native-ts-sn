import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	containerScroll: {
		width: '100%',
	},
	logo: {
		marginTop: 15,
		marginBottom: 12,
	},
	row: {
		flexDirection: 'row',
	},
	pathogenBlock: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#E1E1E1',
		marginBottom: 8,
	},
	bage: {
		height: 24,
		fontSize: 12,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	},
	orangeBackground: {
		backgroundColor: '#FF8412',
	},
	greenBackground: {
		backgroundColor: '#2FD396',
	},
	bageColor: {
		color: '$colorWhite',
	},
	lastChildMargin: {
		marginBottom: 29,
	},
	text: {
		fontSize: 14,
		fontStyle: 'italic',
		marginBottom: 14,
	},
	button: {
		marginBottom: 14,
	},
});
