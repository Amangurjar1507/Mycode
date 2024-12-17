import {StyleSheet} from 'react-native';
import font from '../../../theme/font';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.secondaryBG,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: color.black,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 1,
  },
  orderInfo: {
    flex: 1,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: color.black,
    lineHeight: 20,
    fontFamily: font.openSansSemiBold,
  },
  orderAddress: {
    fontSize: 14,
    fontWeight: '600',
    color: color.secondaryText,
    lineHeight: 17,
    fontFamily: font.openSansRegular,
  },
  statusContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    color: color.secondaryBG,
    lineHeight: 15,
    fontFamily: font.openSansRegular,
    textTransform: 'capitalize',
  },
  delivered: {
    backgroundColor: color.viridianGreen,
  },
  failed: {
    backgroundColor: color.warning,
  },
  outofDeliverd: {
    backgroundColor: color.pacificBlue,
  },
  pickupPending: {
    backgroundColor: color.yelloColor,
  },
});
export default styles;
