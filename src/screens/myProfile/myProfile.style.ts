import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  mainContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  statusBarStyle: {
    height: 0,
  },
  backgroundImageStyle: {
    width: '100%',
    height: 115,
  },
  userViewImage: {
    height: 73,
    width: 73,
    borderRadius: 50,
    backgroundColor: color.secondaryBG,
    marginTop: -35,
    marginLeft: 20,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    height: 71,
    width: 71,
  },
  editText: {
    fontFamily: font.openSansSemiBold,
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 22,
    marginRight: 4,
    color: color.primary,
  },
  editRowView: {
    flexDirection: 'row',
    marginRight: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerView: {
    paddingHorizontal: 20,
    flex: 1,
  },
  userNameStyle: {
    fontSize: 20,
    fontFamily: font.workSansMedium,
    color: color.primaryText,
    marginTop: 19,
    marginBottom: 5,
  },
  userSubscribersStyle: {
    fontSize: 10,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
  },
  cardRowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardStyleView: {
    height: 115,
    backgroundColor: color.buttonBG,
    marginTop: 19,
    borderRadius: 10,
    flexDirection: 'row',
    paddingTop: 16,
    paddingLeft: 9,
  },
  cardTextStyle: {
    fontSize: 12,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
  },
  cardTextStyleInsta: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: color.primaryText,
    marginLeft: 7,
  },
  tiktokViewStyle: {
    marginLeft: 22,
  },
  aboutText: {
    marginTop: 23,
    fontFamily: font.workSansRegular,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 25,
    color: color.primaryText,
    letterSpacing: 0.5,
  },
  aboutDeceptionText: {
    marginBottom: 21,
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: color.primaryText,
  },
  borderClipText: {
    textTransform: 'capitalize',
    color: color.primary,
  },
  borderClipStyle: {
    borderColor: color.primary,
    marginBottom: 10,
    marginLeft: 0,
    marginHorizontal: 10,
  },
  borderClipColorText: {
    textTransform: 'capitalize',
    color: color.secondaryBG,
  },
  borderClipColorStyle: {
    borderColor: color.primary,
    marginBottom: 10,
    marginLeft: 0,
    marginHorizontal: 10,
    backgroundColor: color.primary,
  },
  clipRowViewStyle: {
    flexDirection: 'row',
    marginTop: 21,
  },
  rowViewSpach: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  rowTextPicks: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21.11,
    fontFamily: font.workSansMedium,
    color: color.primaryText,
    flex: 1,
  },
  showAllView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showAllTextStyle: {
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13.62,
    fontFamily: font.openSansRegular,
    marginRight: 5,
    color: color.primaryText,
  },
  contentContainerStyle: {
    flexGrow: 1,
    marginTop: 5,
  },
  contentContainerStyleOverview: {
    flexGrow: 1,
    marginTop: 5,
    marginBottom: 50,
  },
  reviewsStyle: {
    marginTop: 28,
    fontSize: 15,
    fontFamily: font.workSansRegular,
    color: color.primaryText,
  },
  ratingViewStyle: {
    fontFamily: font.openSansRegular,
    fontSize: 8,
    color: color.primaryText,
    textAlign: 'center',
    marginBottom: 21,
  },
  reviewRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  reviewTextStyle: {
    marginLeft: 7,
    fontSize: 12,
    fontFamily: font.openSansBold,
    color: color.primaryText,
  },
  ratingTextStyle: {
    marginLeft: 4,
    fontSize: 12,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    marginRight: 2,
  },
});

export default styles;
