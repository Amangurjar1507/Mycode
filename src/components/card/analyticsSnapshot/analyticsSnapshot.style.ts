import color from '@theme/color';
import font from '@theme/font';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  fContainer: {
    height: 92,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: color.primary,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  fContentView: {
    height: 63,
    alignItems: 'center',
  },
  fTitle: {
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 19,
    color: color.secondaryBG,
  },
  fType: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 18,
    color: color.primaryText,
  },
  fAmount: {
    marginTop: 7,
    fontFamily: font.openSansRegular,
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 40,
    color: color.secondaryBG,
  },
  fProgressView: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fProgressValue: {
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 13,
    color: color.secondaryBG,
  },
  fProgressText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13,
    color: color.secondaryBG,
  },
  hContainer: {
    // height: 92,
    backgroundColor: color.primaryBG,
    paddingVertical: 5,
    alignItems: 'flex-start',
    paddingLeft: 8,
    paddingRight: 10,
    borderRadius: 5,
    width: '47.5%',
  },
  hContentView: {
    // height: 63,
    alignItems: 'flex-start',
  },
  hTitle: {
    fontFamily: font.openSansSemiBold,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    color: color.primaryText,
  },
  hAmount: {
    marginTop: 10,
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 25,
    lineHeight: 34,
    color: color.primaryText,
  },
  hProgressView: {
    marginTop: 5,
    flexDirection: 'row',
  },
  hProgressValue: {
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 13,
    color: color.primary,
  },
  hProgressText: {
    fontFamily: font.openSansRegular,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 13,
    color: color.primaryText,
  },
  iconView: {
    height: 13,
    width: 13,
    marginRight: 2,
  },
  isSelected: {
    borderWidth: 1,
    borderColor: color.primary,
  },
});
