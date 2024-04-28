import {useAuthNavigation} from '@hooks/useAppNavigation';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, {FC, memo, useCallback} from 'react';
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from './header.style';

export interface HeaderProps {
  containerStyle?: ViewStyle;
  backIconsShown?: boolean | undefined;
  lable?: string | undefined;
  lableStyle?: TextStyle;
  description?: string | undefined;
  descriptionStyle?: TextStyle;
  headingText?: string | undefined;
  headingTextStyle?: TextStyle;
  headingDesText?: string | undefined;
  headingDesTextStyle?: TextStyle;
  onPressBackIcon?: () => void;
  rightButtonText?: string | undefined;
  onPressRightButton?: () => void;
}

const Header: FC<HeaderProps> = ({
  containerStyle,
  backIconsShown,
  lable,
  lableStyle,
  description,
  descriptionStyle,
  headingText,
  headingTextStyle,
  headingDesText,
  headingDesTextStyle,
  onPressBackIcon,
  rightButtonText,
  onPressRightButton,
}) => {
  const backNavigation = useAuthNavigation();
  const handleBackNavigation = useCallback(() => {
    if (backIconsShown && lable) {
      onPressBackIcon ? onPressBackIcon?.() : backNavigation?.goBack();
      return;
    } else if (backIconsShown) {
      onPressBackIcon ? onPressBackIcon?.() : backNavigation?.goBack();
      return;
    } else if (lable) {
      return;
    }
  }, [backNavigation]);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleBackNavigation}
          style={styles.lableView}>
          {backIconsShown && (
            <SvgIndex.back height={16} width={16} fill={color.black} />
          )}
          {lable && (
            <Text
              style={[
                styles.lableStyle,
                {marginLeft: backIconsShown ? 15 : 0},
                lableStyle,
              ]}>
              {lable}
            </Text>
          )}
        </TouchableOpacity>
        {rightButtonText && (
          <TouchableOpacity onPress={onPressRightButton} activeOpacity={0.7}>
            <Text style={styles.rightButtonText}>{rightButtonText}</Text>
          </TouchableOpacity>
        )}
      </View>
      {description && (
        <Text style={[styles.descriptionStyle, descriptionStyle]}>
          {description}
        </Text>
      )}
      {headingText && (
        <Text style={[styles.headingStyle, headingTextStyle]}>
          {headingText}
        </Text>
      )}
      {headingDesText && (
        <Text style={[styles.headingDesStyle, headingDesTextStyle]}>
          {headingDesText}
        </Text>
      )}
    </View>
  );
};

export default memo(Header);
Header.defaultProps = {
  backIconsShown: false,
  rightButtonText: '',
};
