import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
	title: {
		fontFamily: 'Poppins',
		fontSize: 18,
		lineHeight: 27,
		color: '$colorBlack',
	},
	info: {
		marginTop: -4,
		display: 'flex',
		flexDirection: 'row',
	},
	infoText: {
		paddingLeft: 6,
		fontFamily: 'Poppins',
		fontSize: 12,
		lineHeight: 18,
		color: '#9E9E9E',
	},
	container: {
		marginTop: 22,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginBottom: 24,
	},
	controls: {
		flexDirection: 'row',
	},
	control: {
		width: 24,
		height: 30,
		borderWidth: 1,
		borderColor: '#E1E1E1',
		justifyContent: 'center',
		alignItems: 'center',
	},
	controlText: {
		color: '#9E9E9E',
		fontSize: 14,
		fontFamily: 'Poppins',
	},
	controlCount: {
		width: 40,
		height: 30,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#E1E1E1',
		justifyContent: 'center',
		alignItems: 'center',
	},
	controlCountText: {
		fontFamily: 'Poppins',
		fontSize: 16,
		color: '$colorBlack',
	},
	controlCountTextDisabled: {
		color: '#E1E1E1',
	},
	input: {
		marginBottom: 15,
	},
	inputTitle: {
		marginBottom: 10,
	},
	halfInputs: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	halfInputsContainer: {
		width: 140,
	},
	total: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 15,
	},
	totalText: {
		fontFamily: 'Poppins',
		fontSize: 24,
		lineHeight: 36,
		color: '$colorBlack',
	},
});
