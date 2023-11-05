import {StatusBarProps, StyleProp, ViewStyle} from 'react-native';

export interface propType {
  statusBarProps?: StatusBarProps;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  backgroundColor?: string;
  translucent?: boolean | undefined;
  barStyle?: 'default' | 'dark-content' | 'light-content';
}
