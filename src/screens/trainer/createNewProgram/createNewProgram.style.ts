import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainerStyle: {
    paddingTop: 14,
    paddingBottom: 8,
    backgroundColor: color.primaryBG,
  },
  inputContentContainers: {
    backgroundColor: color.primaryBG,
    flex: 1,
  },
  inputContent: {
    backgroundColor: color.primaryBG,
    flex: 1,
    marginTop: 4,
  },
  ContentContainerStyleBgc: {backgroundColor: color.primaryBG},
  ProgramNameInputStyle: {
    borderWidth: 0,
    backgroundColor: color.secondaryBG,
    height: 36,
  },
  programDescription: {
    borderWidth: 0,
    backgroundColor: color.secondaryBG,
    height: 121,
    alignItems: 'flex-start',
    paddingTop: 10,
    borderRadius: 5,
  },
  dropDownContainerStyle: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
  },
  dropDownRowView: {
    flexDirection: 'row',
    marginBottom: 10,
    flex: 1,
  },
  rowHorizantal: {
    marginTop: 15,
  },
  imageText: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
  },
  imageRowViewMain: {
    marginTop: 22,
  },
  trailerVideoRowViewMain: {
    marginTop: 13,
  },
  imageUploadContanier: {
    backgroundColor: color.secondaryBG,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 84,
    width: 84,
  },
  uploadTextRegular: {
    textAlign: 'center',
    fontSize: 8,
    lineHeight: 10.7,
    fontFamily: font.openSansRegular,
    color: color.secondaryText,
  },
  imageUploadRation: {
    marginLeft: 20,
    backgroundColor: color.secondaryBG,
    alignItems: 'center',
    borderRadius: 5,
    width: 164.74,
    justifyContent: 'center',
    height: 84,
  },
  imageUploadRowViewStyle: {
    flexDirection: 'row',
    marginTop: 10,
  },
  optionalTextStyle: {
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    fontWeight: '300',
  },
  videoUploadContanier: {
    backgroundColor: color.secondaryBG,
    width: 208,
    height: 117,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  bottonView: {marginTop: 21, marginBottom: 22},
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalInnerContainer: {
    width: 315,
    height: 249,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
    paddingVertical: 20,
  },
  imageStyle: {
    alignSelf: 'center',
  },
  modalTitleText: {
    marginTop: 13,
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19.07,
    color: color.primaryText,
    paddingHorizontal: 71,
  },
  modalDesText: {
    marginTop: 31,
    paddingHorizontal: 46,
    textAlign: 'center',
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.07,
    color: color.primaryText,
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 28,
    marginTop: 34,
  },
  btnContainer: {
    width: 114,
    backgroundColor: color.primary,
    height: 39,
    borderRadius: 10,
    marginTop: 0,
    paddingTop: 0,
  },
  btnSolidContainer: {
    width: 114,
    backgroundColor: color.lightgray,
    height: 39,
    borderRadius: 10,
    marginTop: 0,
    paddingTop: 0,
  },
  nameTextStyle: {
    fontSize: 14,
    color: color.secondaryBG,
    lineHeight: 19,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
  },
  namesSolidButtonTextStyle: {
    fontSize: 14,
    color: color.primaryText,
    lineHeight: 19,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
  },
  containerStyle: {
    backgroundColor: color.secondaryBG,
  },
  inputTextStyle: {
    padding: 0,
    fontFamily: font.openSansRegular,
    fontSize: 12,
    fontWeight: '400',
  },
  inputLabelStyle: {
    fontSize: 15,
    fontWeight: '500',
  },
  dropDownLabelTextStyle: {
    fontFamily: font.openSansRegular,
    fontSize: 14.8,
    color: color.primaryText,
    fontWeight: '500',
  },
  dropDownPlaceholderStyle: {
    color: color.primaryText,
    fontSize: 11.5,
  },
  inputMainStyle: {
    marginBottom: 0,
    marginTop: 15,
  },
  dropDownSpaceManage: {
    width: 21,
  },
});

export default styles;
