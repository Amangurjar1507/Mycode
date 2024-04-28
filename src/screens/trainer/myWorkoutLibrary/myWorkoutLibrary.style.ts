import color from '@theme/color';
import font from '@theme/font';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 10,
    // paddingBottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  ContentContainers: {
    flex: 1,
  },
  keyBoardView: {
    flex: 1,
    backgroundColor: color.secondaryBG,
  },
  searchbarContainer: {
    marginTop: 0,
    marginBottom: 13,
  },
  selectView: {
    height: 352,
    backgroundColor: color.paleLavender,
    borderRadius: 5,
    marginBottom: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectShowView: {
    // height: 352,
    backgroundColor: color.paleLavender,
    borderRadius: 5,
    marginBottom: 21,
    paddingHorizontal: 10,
    paddingVertical: 9,
  },
  selectTextStyle: {
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 30,
    textAlign: 'center',
    color: color.primaryText,
    ...Platform.select({
      ios: {
        shadowColor: color.primaryText,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backTextStyle: {
    flex: 1,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 30,
    color: color.primaryText,
  },
  editIconStyle: {
    marginRight: 10,
  },
  videoImageStyle: {
    width: '100%',
    height: 198,
    borderRadius: 5,
    borderLeftWidth: 1,
    borderLeftColor: color.primary,
    borderTopWidth: 1,
    borderTopColor: color.primary,
  },
  coachTextStyle: {
    marginTop: 8,
    marginBottom: 5,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
    color: color.primaryText,
    paddingHorizontal: 4,
  },
  descriptionTextStyle: {
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 18,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    paddingHorizontal: 4,
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: color.transparentColor,
  },
  modalStyle: {
    width: '100%',
    padding: 20,
    marginHorizontal: 20,
    backgroundColor: color.secondaryBG,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: color.primaryText,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  deleteTitle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: color.primaryText,
    fontFamily: font.openSansRegular,
    marginVertical: 18,
  },
  deleteDescriptionText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: color.primaryText,
    fontFamily: font.openSansRegular,
  },
  manageButtonsStyle: {
    flexDirection: 'row',
    marginTop: 21,
    marginBottom: 3,
  },
  yesButtonStyle: {
    borderRadius: 6,
    backgroundColor: color.warning,
    width: 114,
    height: 39,
    marginRight: 11,
  },
  cancelButtonStyle: {
    borderRadius: 6,
    backgroundColor: color.lightgray,
    width: 114,
    height: 39,
  },
  flatFooterStyle: {
    marginBottom: 50,
  },
  nameTextStyle: {
    color: color.primaryText,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  confirmBtnStyle: {
    backgroundColor: color.warning,
  },
  cancelLableStyle: {
    color: color.primaryText,
  },
});

export default styles;
