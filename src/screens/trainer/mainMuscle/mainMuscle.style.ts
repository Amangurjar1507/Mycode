import color from '@theme/color';
import font from '@theme/font';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainerStyle: {
    paddingTop: 29,
    paddingBottom: 0,
    backgroundColor: color.secondaryBG
  },
  screenBackgroundStyle: {
    backgroundColor: color.secondaryBG
  },
  inputContentContainers: {
    flex: 1,
    marginTop: 26,
  },
  contentContainerStyle: {
    marginTop: 7,
    flexGrow: 1,
  },
  bottonView: {
    marginBottom: 12,
  },
  cardStyle: {
    height: 40,
    paddingHorizontal: 20,
    flexDirection: 'row'
  },
  cardTextStyle: {
    fontSize: 14,
    fontFamily: font.openSansRegular,
    color: color.primaryText,
    flex: 1,
  },
});
