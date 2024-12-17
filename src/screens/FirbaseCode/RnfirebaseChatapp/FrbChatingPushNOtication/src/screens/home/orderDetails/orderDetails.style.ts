import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.whiteLight,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderId: {
    fontSize: 18,
    fontWeight: '600',
    color: color.secondaryTexts,
    lineHeight: 21,
    fontFamily: font.openSansBold,
  },
  statusButton: {
    backgroundColor: color.pacificBlue,
    paddingVertical: 5,
    borderRadius: 20,
    paddingHorizontal: 14,
  },
  statusText: {
    color: color.secondaryBG,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '500',
    fontFamily: font.openSansRegular,
  },
  address: {
    fontSize: 14,
    color: color.secondaryText,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: font.openSansRegular,
  },
  section: {
    marginTop: 20,
  },
  sectionRowView: {
    marginTop: 20,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  customerName: {
    fontSize: 16,
    color: color.black,
    lineHeight: 21,
    fontWeight: '700',
    fontFamily: font.openSansSemiBold,
    marginLeft: 12,
  },
  sectionHeader: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
    fontFamily: font.openSansSemiBold,
    color: color.secondaryTexts,
    marginBottom: 8,
    marginLeft: 8,
  },
  centerDetails: {
    fontSize: 14,
    color: color.secondaryTexts,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: font.openSansSemiBold,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 16,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    color: color.black,
    lineHeight: 18,
    fontWeight: '700',
    fontFamily: font.openSansSemiBold,
    marginBottom: 13,
  },
  productQuantity: {
    fontSize: 12,
    color: color.secondaryTexts,
    lineHeight: 18,
    fontWeight: '500',
    fontFamily: font.openSansSemiBold,
    marginBottom: 13,
  },
  deliveryRow: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  price: {
    fontSize: 17,
    color: color.secondaryTexts,
    lineHeight: 21,
    fontWeight: '800',
    fontFamily: font.openSansSemiBold,
    marginLeft: 8,
    marginRight: 8,
  },
  paidStatus: {
    fontSize: 17,
    color: color.viridianGreen,
    lineHeight: 21,
    fontWeight: '700',
    fontFamily: font.openSansSemiBold,
    marginLeft: 8,
  },

  //
  rowView: {
    flexDirection: 'row',
  },
  rowViewFlexPicupIcon: {
    flexDirection: 'row',
    flex: 1,
  },
  iconSbvgSpace: {
    width: 36,
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //  delivery address
  cardNormalStatus: {
    backgroundColor: '#E0F7F1',
    borderRadius: 10,
    flex: 1,
    marginTop: 10,
    padding: 10,
    marginBottom: 20,
  },
  cardNormall: {
    backgroundColor: '#E0F7F1',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  deliveryInfo: {
    flex: 2,
  },
  heading: {
    fontSize: 17,
    color: color.darkGreen,
    lineHeight: 21,
    fontWeight: '700',
    fontFamily: font.openSansSemiBold,
  },

  dateTime: {
    fontSize: 14,
    color: color.secondaryText,
    lineHeight: 17,
    fontWeight: '500',
    fontFamily: font.openSansSemiBold,
    marginTop: 10,
  },
  timeLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: color.lightgray,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  timeLeftText: {
    fontSize: 16,
    color: color.darkGreen,
    lineHeight: 20,
    fontWeight: '900',
    fontFamily: font.openSansSemiBold,
    marginLeft: 5,
  },
  time: {
    fontSize: 16,
    color: color.secondaryText,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: font.openSansSemiBold,
    marginTop: 5,
  },
  updateStatus: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  updateText: {
    fontSize: 16,
    color: color.darkGreen,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: font.openSansSemiBold,
  },

  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  dropdownButton: {
    width: 169,
    padding: 6,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: color.lightgray,
    marginTop: 8,
  },
  buttonText: {
    fontSize: 16,
    color: color.secondaryTexts,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: font.openSansSemiBold,
  },
  modalContent: {
    width: 200,
    backgroundColor: color.secondaryBG,
    borderRadius: 10,
    padding: 10,
    shadowColor: color.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'absolute',
    right: 0,
    top: -40,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: color.transparent,
  },
  optionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },

  // confirm picup
  containerStyleBtn: {
    marginHorizontal: 20,
    backgroundColor: color.darkGreen,
    marginVertical: 10,
  },
});

export default styles;
