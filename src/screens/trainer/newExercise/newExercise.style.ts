import color from '@theme/color';
import font from '@theme/font';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  KeyboardView: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 11,
  },
  mainContainers: {
    flex: 1,
  },
  inputBoxStyle: {
    height: 36,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.lightgray,
    paddingHorizontal: 10,
    backgroundColor: color.secondaryBG,
    ...Platform.select({
      ios: {
        shadowColor: color.primaryText,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 40,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  inputContainerStyle: {
    marginBottom: 0,
  },
  dropDownView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftFlex: {
    flex: 1,
    marginRight: 10,
  },
  rightFlex: {
    flex: 1,
    marginLeft: 10,
  },
  mainViewStyle: {
    marginTop: 16,
  },
  containerStyle: {
    height: 48,
    borderWidth: 1,
    backgroundColor: color.secondaryBG,
    borderRadius: 8,
    borderColor: color.lightgray,
  },
  manageDropDown: {
    marginRight: 8,
  },
  imageRowViewMain: {
    marginTop: 24,
    marginBottom: 20,
  },
  imageText: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 22,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    marginBottom: 12,
  },
  videoUploadContanier: {
    backgroundColor: color.buttonBG,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 209,
  },
  uploadTextRegular: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    fontFamily: font.workSansMedium,
    color: color.secondaryText,
    marginTop: 5,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primaryBG,
    height: 91,
    marginBottom: 10,
  },
  bottonView: {
    width: 257,
    height: 46,
    alignSelf: 'center',
  },
  inputLabelStyle: {
    fontFamily: font.workSansMedium,
    fontSize: 15,
    color: color.primaryText,
  },
  inputContenerStyle: {
    marginHorizontal: 20,
  },
  dropDownMainViewStyle: {
    marginLeft: 0,
    marginRight: 0,
  },
});

export default styles;
