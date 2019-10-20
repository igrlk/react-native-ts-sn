import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  description: {
    marginTop: 7,
    marginBottom: 17,
    color: '$colorBlack',
    fontSize: 14,
    lineHeight: 21,
    fontStyle: 'italic',
  },
  textWithLabelContainer: {
    flexDirection: 'row',
  },
  input: {
    marginBottom: 24,
  },
  addMore: {
    color: '$colorBlue',
    fontFamily: 'Poppins',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 80,
  },
  button: {
    marginBottom: 40,
  },
  screen: {
    paddingTop: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  screenInner: {
    width: 300,
  },
});
