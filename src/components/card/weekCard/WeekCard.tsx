import React, { FC, memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import color from '@theme/color';
import { styles } from './weekCard.style';

interface WeekCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
  selectIndex?: number | undefined;
}
interface ItemProps {
  id?: number | undefined;
  title?: number | undefined;
}
const WeekCard: FC<WeekCardProps> = ({ item, index, onPress, selectIndex }) => {
  const isSelected = index === selectIndex;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isSelected ? color.primary : color.secondaryBG,
            borderColor: isSelected ? color.primary : color.lightgray,
          },
        ]}>
        <Text
          style={[
            styles.titleText,
            { color: isSelected ? color.secondaryBG : color.primaryText },
          ]}>
          {item?.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(WeekCard);
