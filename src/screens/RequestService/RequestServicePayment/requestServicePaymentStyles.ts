import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
	total: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 25,
	},
	totalText: {
		fontFamily: 'Poppins',
		fontSize: '$fontSize.xlarge',
		color: '$colorBlack',
	},
	totalCountWrapper: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	totalCountDashed: {
		marginRight: 11,
		color: '$colorBlack',
		fontFamily: 'Poppins',
		fontSize: '$fontSize.mini',
		textDecorationLine: 'line-through',
	},
	input: {
		marginTop: 25,
		marginBottom: 26,
	},
});
