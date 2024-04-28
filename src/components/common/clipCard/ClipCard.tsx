import SvgIndex from '@svgIndex';
import React, {FC, memo} from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './clipCard.style';

interface ClipCardProps {
  title: string;
  onPress?: () => void;
  nameStyle?: StyleProp<TextStyle> | undefined;
  container?: ViewStyle;
  plusIconShow?: boolean | undefined;
}

const ClipCard: FC<ClipCardProps> = ({
  onPress,
  nameStyle,
  title,
  container,
  plusIconShow,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, container]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.priceText, nameStyle]}>{title}</Text>
      {plusIconShow && <SvgIndex.plus />}
    </TouchableOpacity>
  );
};

export default memo(ClipCard);
