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
import styles from './myProgramsCard.style';
import color from '@theme/color';
import LinearGradient from 'react-native-linear-gradient';

interface MyProgramsCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
  onSelect?: () => void;
  nameStyle?: StyleProp<TextStyle> | undefined;
}
interface ItemProps {
  id?: number | undefined;
  title?: string | undefined;
  status?: string | undefined;
  amount?: string | undefined;
  followers?: string | undefined;
  rating?: string | undefined;
  tradingUp?: string | undefined;
}

const MyProgramsCard: FC<MyProgramsCardProps> = ({item, onPress, index}) => {
  const marginTop = index ? 12 : 0;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, {marginTop: marginTop}]}>
      <ImageBackground source={imageIndex.programsBG} style={styles.imageBg}>
        <ImageBackground source={imageIndex.shodowCard} style={styles.shadowBg}>
          <View style={styles.tagsContainer}>
            {item?.status === 'Deactivated' ? (
              <LinearGradient
                colors={color.packageBG}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.tagLinearColor}>
                <Text style={styles.tagPackageText}>{item?.title}</Text>
                <SvgIndex.packageIcon />
              </LinearGradient>
            ) : (
              <View style={styles.tag}>
                <Text style={styles.tagText}>{item?.title}</Text>
              </View>
            )}
            <View
              style={[
                styles.statusContainer,
                {
                  backgroundColor:
                    item?.status === 'Active'
                      ? color.forestGreen
                      : item?.status === 'Deactivated'
                      ? color.deactivatedBG
                      : item?.status === 'Draft'
                      ? color.secondaryBG
                      : item?.status === 'Deleted'
                      ? color.lightRed
                      : color.buttonBG,
                },
              ]}>
              <View
                style={[
                  styles.statusDot,
                  {
                    borderColor:
                      item?.status === 'Active'
                        ? color.viridianGreen
                        : item?.status === 'Deactivated'
                        ? color.primaryText
                        : item?.status === 'Draft'
                        ? color.secondaryText
                        : item?.status === 'Deleted'
                        ? color.warning
                        : color.black,
                  },
                ]}
              />
              <Text
                style={[
                  styles.statusText,
                  {
                    color:
                      item?.status === 'Active'
                        ? color.viridianGreen
                        : item?.status === 'Deactivated'
                        ? color.primaryText
                        : item?.status === 'Draft'
                        ? color.secondaryText
                        : item?.status === 'Deleted'
                        ? color.warning
                        : color.primaryText,
                  },
                ]}>
                {item?.status}
              </Text>
            </View>
          </View>
          <Text style={styles.title}>BODYWIGHT ONLY {'\n'}BEGINNER</Text>
          <View>
            <View style={styles.infoContainer}>
              <View>
                <View style={styles.infoRow}>
                  <SvgIndex.user />
                  <Text style={styles.infoText}>{item?.followers}</Text>
                  <SvgIndex.network />
                  <Text style={[styles.infoText, styles.textView]}>
                    Intermediate
                  </Text>
                  <SvgIndex.star />
                  <Text style={styles.infoText}>{item?.rating}</Text>
                </View>
                <View style={styles.infoRow}>
                  <SvgIndex.time />
                  <Text style={styles.infoText}>12 week</Text>
                  <SvgIndex.trading />
                  <Text style={styles.infoText}>{item?.tradingUp}</Text>
                </View>
              </View>
              <View style={styles.priceContainer}>
                <View style={styles.priceIcon}>
                  <SvgIndex.dollor />
                </View>
                <Text style={styles.priceText}>{item?.amount}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default memo(MyProgramsCard);
