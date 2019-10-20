import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
	container: {
		backgroundColor: '$colorGreen',
		paddingTop: 60,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flex: 1,
	},
	containerScroll: {
		width: '100%',
	},
	innerContainer: {
		alignItems: 'center',
	},
	inner: {
		width: 300,
	},
	hamburger: {
		position: 'absolute',
		top: 0,
		right: 0,
	},
	buttons: {
		marginTop: 114,
	},
	button: {
		marginBottom: 27,
		backgroundColor: '$colorWhite',
		borderRadius: 5,
		padding: 20,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	buttonLogo: {
		marginRight: 17,
	},
	buttonTitle: {
		color: '$colorGreen',
		fontFamily: 'Poppins',
		fontSize: 18,
	},
	buttonText: {
		fontFamily: 'Poppins',
		color: '#605A4A',
		fontSize: 12,
		lineHeight: 18,
	},
	menu: {
		position: 'absolute',
		right: 0,
		top: 0,
		width: '100%',
		height: '100%',
		transform: [
			{
				translateX: Dimensions.get('window').width,
			},
		],
	},
	menuEmptyArea: {
		height: '100%',
	},
	menuOpened: {
		transform: [
			{
				translateX: 0,
			},
		],
	},
	menuContainer: {
		position: 'absolute',
		right: 0,
		top: 0,
		height: '100%',
		backgroundColor: '$colorWhite',
		paddingTop: 60,
		shadowColor: '#000',
		shadowOffset: { width: 1, height: 10 },
		shadowOpacity: 1,
		shadowRadius: 1,
	},
	menuHeader: {
		borderBottomWidth: 1,
		borderBottomColor: '#E1E1E1',
		paddingBottom: 16,
	},
	menuHeaderTitle: {
		marginBottom: 5,
	},
	menuText: {
		fontFamily: 'Poppins',
		fontSize: 16,
		lineHeight: 24,
		color: '$colorBlack',
		paddingLeft: 23,
		paddingRight: 43,
	},
	menuItem: {
		lineHeight: 60,
	},
	list: {
		backgroundColor: '$colorWhite',
		width: '100%',
		padding: 30,
		paddingTop: 17,
		flex: 1,
	},
	listMargin: {
		marginBottom: 8,
	},
	buttonViewAll: {
		marginTop: 10,
	},
	logoText: {
		marginTop: 16,
		marginBottom: 16,
		fontFamily: 'Poppins',
		fontWeight: 'bold',
		fontSize: 16,
		lineHeight: 24,
		color: '$colorWhite',
	},
	alreadyOrdered: {
		color: '$colorBlack',
		fontFamily: 'Poppins',
		textAlign: 'center',
		width: '100%',
	},
});
