import imageIndex from '@imageIndex';
import SvgIndex from '@svgIndex';
import React, {FC, memo} from 'react';
import {
  ImageBackground,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './topPicksCard.style';

interface TopPicksCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
  nameStyle?: StyleProp<TextStyle> | undefined;
}
interface ItemProps {}

const TopPicksCard: FC<TopPicksCardProps> = ({item, index, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <ImageBackground
        source={imageIndex.frame}
        style={styles.backgroundStyleImage}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Crossfit</Text>
        </View>
        <View style={styles.followerShowView}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>4.7</Text>
            <SvgIndex.starPurpal />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>16k</Text>
            <SvgIndex.userPurpal />
          </View>
        </View>
        <View style={styles.blurView}>
          <View style={styles.rowView}>
            <View style={styles.blurContainer}>
              <Text style={styles.textStyle}>BODYWEIGHT ONLY</Text>
              <Text style={styles.textStyle2}>12 Weeks, Intermediate</Text>
              <Text style={styles.textStyle3}>Alex Margot</Text>
            </View>
            <View style={styles.priceContainer}>
              <View style={styles.priceIcon}>
                <SvgIndex.shop />
              </View>
              <Text style={styles.priceText}>12.99$</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default memo(TopPicksCard);
