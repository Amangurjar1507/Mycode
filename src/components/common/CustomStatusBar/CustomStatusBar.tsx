import color from '@theme/color';
import React, {FC, memo} from 'react';
import {
  StatusBar,
  StatusBarProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface CustomStatusBarProps {
  statusBarProps?: StatusBarProps;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  backgroundColor?: string;
  animated?: boolean | undefined;
  translucent?: boolean | undefined;
  barStyle?: 'default' | 'dark-content' | 'light-content';
  hidden?: boolean | undefined;
}
const CustomStatusBar: FC<CustomStatusBarProps> = ({
  containerStyle,
  backgroundColor,
  barStyle,
  animated,
  translucent,
  hidden,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          height: insets.top,
          backgroundColor: backgroundColor ?? color.primaryBG,
        },
        containerStyle,
      ]}>
      <StatusBar
        animated={animated}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent={translucent}
        hidden={hidden}
        {...props}
      />
    </View>
  );
};
export default memo(CustomStatusBar);

CustomStatusBar.defaultProps = {
  backgroundColor: color.primaryBG,
  barStyle: 'dark-content',
  animated: true,
};
