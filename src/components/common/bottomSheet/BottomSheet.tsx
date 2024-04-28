import color from '@theme/color';
import React, { FC, memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './bottomSheet.style';
import { TextStyle, ViewStyle } from 'react-native';

interface BottomSheetProps {
  item: ItemProps;
  index?: number;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  rowViewStyle?: ViewStyle;
  titleStyle?: TextStyle;
}
interface ItemProps {
  id?: number | undefined;
  title?: string | undefined;
  icon?: any;
}

const BottomSheet: FC<BottomSheetProps> = ({
  item,
  index,
  onPress,
  containerStyle,
  rowViewStyle,
  titleStyle,
}) => {
  const Icon = item?.icon;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.rowView,
          {
            borderTopWidth: index !== 0 ? 1 : 0,
            borderTopColor: color.lightgray,
          },
          ,
          rowViewStyle,
        ]}>
        {item?.icon && <Icon height={24} width={24} />}
        <Text style={[styles.title, titleStyle]}>{item?.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(BottomSheet);
