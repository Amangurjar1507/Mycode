import {StyleSheet} from 'react-native';
import color from '../../theme/color';
import font from '../../theme/font';

export const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  profileInfo: {
    marginLeft: 15,
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    color: color.darkGreen,
    fontFamily: font.openSansBold,
  },
  profilePhone: {
    fontSize: 14,
    color: color.viridianGreen,
    lineHeight: 20,
    fontFamily: font.openSansBold,
    fontWeight: '500',
  },
  profileEmail: {
    fontSize: 14,
    color: color.secondaryText,
    lineHeight: 20,
    fontFamily: font.openSansBold,
    fontWeight: '500',
  },

  optionsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  optionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    lineHeight: 22,
    fontFamily: font.openSansBold,
    color: color.darkGreen,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: color.lightgray,
  },
  drawerItemLabel: {
    marginLeft: 15,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: font.openSansBold,
    fontWeight: '500',
    color: color.secondaryTexts,
  },
});
