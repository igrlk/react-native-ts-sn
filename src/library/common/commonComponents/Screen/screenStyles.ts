import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	screen: {
		paddingTop: 40,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flex: 1,
	},
	screenInner: {
		width: '100%',
		padding: 30,
	},
	screenCentered: {
		justifyContent: 'center',
	},
});
