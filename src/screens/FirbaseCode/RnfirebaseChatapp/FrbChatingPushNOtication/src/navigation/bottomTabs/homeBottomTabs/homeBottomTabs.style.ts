import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 75,  
    backgroundColor: color.secondaryBG,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 15,
    shadowColor: color.darkGreen,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  rowView: {
    flex: 1,
    alignItems: 'center',
  },
  nameText: {
    marginTop: 4,  
    fontFamily: font.openSansRegular,
    fontWeight: '600',
    fontSize: 12,  
    lineHeight: 16,
    color: color.secondaryText,
  },
});
