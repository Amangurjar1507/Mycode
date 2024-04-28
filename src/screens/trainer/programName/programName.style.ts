import color from '@theme/color';
import font from '@theme/font';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBG,
  },
  ContentContainerStyleBgc: {
    backgroundColor: color.primaryBG
  },
  ContentContainers: {
    flex: 1,
    marginTop: 22,
  },
  bottonView: {
    marginHorizontal: 60,
    marginTop: 21,
  },
  weekMainView: {
    height: 80,
    backgroundColor: color.secondaryBG,
  },
  weekTextStyle: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.34,
    fontFamily: font.openSansRegular,
    marginBottom: 10,
  },
  clipStyleSecond: {
    borderRadius: 30,
    paddingLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: color.primary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 39,
  },
  clipTextSecond: {
    fontSize: 15,
    lineHeight: 18,
    marginLeft: 10,
    color: color.secondaryBG,
    fontWeight: '600',
    fontFamily: font.openSansRegular,
  },
  sessionsTxtStyle: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.34,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    marginTop: 8,
  },
  sessionMainView: {
    height: 338,
    backgroundColor: color.paleLavender,
    alignItems: 'center',
    paddingTop: 84,
    marginTop: 34,
    borderRadius: 5,
    marginBottom: 57,
  },
  saveButtonStyle: {
    width: '90%',
    backgroundColor: color.secondaryBG,
    borderWidth: 1,
    borderColor: color.primary,
  },
  reviewButtonStyle: {
    width: '90%',
    backgroundColor: color.lightgray
  },
  rowViewManageButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
    marginHorizontal: 20,
    marginTop: 20
  },
  headerContainerStyle: {
    paddingTop: 14.6,
    paddingBottom: 8,
  },
  saveButtonTextStyle: {
    color: color.primary,
  },
  reviewButtonTextStyle: {
    color: color.primaryText,
  },
  weekCardStyleManageBorderStyle: {
    paddingHorizontal: 10,
    paddingTop: 11,
    backgroundColor: color.secondaryBG,
    borderBottomWidth: 1,
    borderBottomColor: color.buttonBG,
  },
  weekCardLastStyle: {
    paddingHorizontal: 10,
    paddingTop: 11,
    backgroundColor: color.secondaryBG,
  },
});

export default styles;
