import color from '@theme/color';
import font from '@theme/font';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screenBackgroundStyle: {
    backgroundColor: color.primaryBG,
  },
  headerContainerStyle: {
    paddingBottom: 0,
  },
  inputContentContainers: {
    flex: 1,
    marginTop: 41,
  },
  labelStyle: {
    fontFamily: font.workSansMedium,
    fontSize: 14,
    color: color.primaryText,
    flex: 1,
  },
  valueTextStyle: {
    fontFamily: font.openSansRegular,
    fontSize: 12,
    color: color.secondaryText,
    marginTop: 11,
  },
  bottonView: {
    marginBottom: 12,
  },
  rowViewStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  outLine: {
    marginTop: 20,
    height: 1,
    backgroundColor: color.lightgray,
  },
  cardView: {
    height: 65,
    marginBottom: 30,
  },
});
