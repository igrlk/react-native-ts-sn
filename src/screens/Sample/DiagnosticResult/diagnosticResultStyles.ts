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
		width: 110,
		fontSize: '$fontSize.xmini',
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
		fontSize: '$fontSize.mini',
		fontStyle: 'italic',
		marginBottom: 14,
	},
	button: {
		marginBottom: 14,
	},
	diseaseBlock: {
		marginBottom: 20,
	}
});
