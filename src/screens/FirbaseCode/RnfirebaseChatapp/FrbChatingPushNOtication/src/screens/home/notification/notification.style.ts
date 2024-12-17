import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.secondaryBG,
  },
  statusBarContainer: {
    height: 0,
    backgroundColor: color.darkGreen,
  },
  cateryContentContainerStyle: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  cardViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.priceTagBG,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  cardImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 15,
  },
  userMsgTextStyle: {
    fontFamily: font.openSansSemiBold,
    fontSize: 16,
    color: color.black,
    marginBottom: 5,
  },
  userLabelTextStyle: {
    fontFamily: font.openSansRegular,
    fontSize: 14,
    color: color.black,
  },
});

export default styles;
