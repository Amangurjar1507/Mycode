import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, memo} from 'react';
import {Image, ImageProps, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './programsCard.style';

interface ProgramsCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
  onPressIcon?: () => void;
  deleteIconShown?: boolean;
  infoIconShown?: boolean;
  checkBoxShown?: boolean;
  isSelected?: boolean;
}
interface ItemProps {
  id?: number | undefined;
  image?: ImageProps | undefined;
  title?: string | undefined;
  descriptions?: string | undefined;
  checked?: boolean;
}

const ProgramsCard: FC<ProgramsCardProps> = ({
  item,
  index,
  onPress,
  checkBoxShown,
  infoIconShown,
  deleteIconShown,
  onPressIcon,
  isSelected,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.container,
        {
          marginTop: index !== 0 ? 12 : 0,
          backgroundColor: isSelected ? color.paleLavender : color.priceTagBG,
        },
      ]}>
      <View style={styles.imageView}>
        <Image source={item?.image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.detailsView}>
        <Text style={styles.titleText}>{item?.title}</Text>
        <Text style={styles.desText}>{item?.descriptions}</Text>
      </View>
      {deleteIconShown && (
        <TouchableOpacity
          onPress={onPressIcon}
          activeOpacity={0.5}
          style={styles.deleteIcon}>
          <SvgIndex.calender />
        </TouchableOpacity>
      )}
      {infoIconShown && (
        <TouchableOpacity
          onPress={onPressIcon}
          activeOpacity={0.5}
          style={styles.deleteIcon}>
          <SvgIndex.info />
        </TouchableOpacity>
      )}
      {checkBoxShown && (
        <TouchableOpacity activeOpacity={0.8} style={styles.deleteIcon}>
          {item?.checked ? (
            <SvgIndex.checkboxFilled />
          ) : (
            <SvgIndex.checkboxEmpty />
          )}
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default memo(ProgramsCard);
ProgramsCard.defaultProps = {
  deleteIconShown: false,
  checkBoxShown: false,
  infoIconShown: false,
};
