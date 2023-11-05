import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';

export interface PropsTypes {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  colortext?: string;
  buttonTextStyle?: StyleProp<TextStyle> | undefined;
  buttonContainer?: StyleProp<ViewStyle> | undefined;
  isLoading?: boolean;
  activityProps?: any;
}
