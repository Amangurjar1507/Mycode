import {Platform, StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'red',
  },
  inputConatiner: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  mainViewList: {
    padding: 8,
  },
  mainViewTouchableOpacity: {
    padding: 10,
    borderBottomWidth: 0.5,
    marginHorizontal: 7,
    flexDirection: 'row',
  },

  forgotStyle: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 20,
  },
  mainViewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    width: '100%',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 5,
    marginTop: 8,
  },
  lableStyle: {
    fontSize: 19,
    lineHeight: 18,
    padding: 6,
    color: color.black,
  },
  inupTextStyle: {
    fontSize: 17,
    fontFamily: font.MontserratBlack,
    lineHeight: 20,
    color: color.black,
  },
  closeViewStyle: {
    alignItems: 'flex-end',
    padding: 10,
    marginHorizontal: 10,
    marginTop: Platform.OS == 'ios' ? 40 : 0,
  },
  closeImageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  mainViewModal: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
    padding: 12,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: font.MontserratBlack,
    margin: 16,
    marginHorizontal: 10,
  },
  countryTextStyle: {
    fontFamily: font.MontserratBlack,
    fontSize: 16,
    marginRight: 10,
    color: color.black,
  },
  textView: {
    paddingTop: 12,
  },
  valueTextStyle: {
    flex: 1,
    fontSize: 16,
    fontFamily: font.MontserratBlack,
    color: color.black,
  },
  arrowDropdownImageStyle: {
    height: 9,
    width: 14,
  },
  mainInputView: {
    height: 55,
  },
});

export default styles;
