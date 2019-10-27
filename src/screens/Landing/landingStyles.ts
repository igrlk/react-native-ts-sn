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
		width: '100%',
		padding: 30,
	},
	hamburger: {
		position: 'absolute',
		top: 0,
		right: 0,
		marginRight: 30,
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
		fontSize: '$fontSize.medium',
	},
	buttonText: {
		fontFamily: 'Poppins',
		color: '#605A4A',
		fontSize: '$fontSize.xmini',
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
		width: '50%',
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
		marginBottom: 30,
	},
	menuHeaderTitle: {
		marginBottom: 5,
	},
	menuText: {
		fontFamily: 'Poppins',
		fontSize: '$fontSize.small',
		overflow: 'hidden',
		color: '$colorBlack',
		paddingLeft: 23,
		paddingRight: 43,
	},
	menuItem: {
		marginBottom: 30,
	},
	list: {
		backgroundColor: '$colorWhite',
		width: '100%',
		padding: 30,
		paddingTop: 17,
		flex: 1,
	},
	buttonViewAll: {
		marginTop: 10,
	},
	logoText: {
		marginTop: 16,
		marginBottom: 20,
		fontFamily: 'Poppins',
		fontWeight: 'bold',
		fontSize: '$fontSize.small',
		color: '$colorWhite',
	},
	alreadyOrdered: {
		color: '$colorBlack',
		fontFamily: 'Poppins',
		textAlign: 'center',
		width: '100%',
	},
});
