import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainerStyle: {
    paddingTop: 13,
    paddingBottom: 10,
    backgroundColor: color.secondaryBG,
  },
  screenBackgroundContainerStyle: {
    backgroundColor: color.secondaryBG,
  },
  keyBoardView: {
    flex: 1,
    backgroundColor: color.secondaryBG,
  },
  searchbarContainer: {
    marginTop: 30,
    marginBottom: 28,
  },
  bottonView: {
    marginBottom: 25,
    marginTop: 20,
  },

  headerContainer: {
    backgroundColor: color.secondaryBG,
  },
  /* Modal Styles */
  modalContainer: {
    backgroundColor: color.primaryText,
    marginTop: 68,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
  modalMainView: {
    flex: 1,
    paddingBottom: 20,
  },
  modalViewTitleStyle: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 18,
    marginBottom: 26,
    alignItems: 'center',
  },
  modalTitleStyle: {
    fontSize: 20,
    fontFamily: font.workSansSemiBold,
    lineHeight: 33,
    color: color.secondaryBG,
    flex: 1,
  },
  modalCloseIconStyle: {
    marginTop: 3,
  },
  videoModalStyle: {
    height: 221,
    width: '100%',
  },
  bodyViewStyle: {
    height: 42,
    backgroundColor: color.primary,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  bodyTextStyle: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: font.openSansSemiBold,
    lineHeight: 16,
    color: color.secondaryBG,
  },
  decriptionStyle: {},
  instructionsStyleText: {
    fontSize: 12,
    fontFamily: font.openSansRegular,
    lineHeight: 14,
    marginBottom: 10,
    color: color.secondaryBG,
    paddingTop: 23,
    marginHorizontal: 20,
  },
  instructionsDescriptionStyleText: {
    fontSize: 12,
    fontFamily: font.openSansRegular,
    lineHeight: 14,
    marginBottom: 10,
    color: color.secondaryBG,
    marginHorizontal: 20,
  },
  variationViewStyle: {
    height: 92,
    width: '100%',
    backgroundColor: color.primary,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  variationTextStyle: {
    fontSize: 15,
    fontFamily: font.workSansMedium,
    lineHeight: 15,
    color: color.secondaryBG,
  },
  variationTextDescriptionStyle: {
    fontSize: 12,
    fontFamily: font.openSansRegular,
    lineHeight: 15.1,
    color: color.secondaryBG,
    marginTop: 5,
  },
});

export default styles;
