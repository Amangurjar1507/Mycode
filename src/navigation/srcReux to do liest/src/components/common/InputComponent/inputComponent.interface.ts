import {
  ImageSourcePropType,
  KeyboardTypeOptions,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface InputComponentProps {
  inputStyle?: StyleProp<TextStyle> | undefined;
  inputContainer?: StyleProp<ViewStyle> | undefined;
  lableStyle?: StyleProp<TextStyle> | undefined;
  label?: string | undefined;
  imageHide?: boolean | undefined;
  imageShow?: boolean | undefined;
  currentlocation?: boolean | undefined;
  value?: string | undefined;
  inputProps?: TextInputProps;
  placeholder?: string | undefined;
  placeholderTextColor?: string | undefined;
  onChangeText?: (value: string) => void;
  input?: StyleProp<ViewStyle> | undefined;
  imageFirst?: ImageSourcePropType | any;
  secureText?: any;
  returnKeyboardType?: any;
  clickImage?: () => void;
  hideClike?: () => void;
  passwordHide?: boolean | undefined;
  hideText?: boolean;
  secureTextEntry?: boolean;
  mainInputView?: StyleProp<ViewStyle> | undefined;
  type?: 'normal' | 'google';
  multiline?: boolean;
  textAlignVertical?: 'top' | 'auto' | 'center' | 'bottom' | undefined;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  rightIcon?: ImageSourcePropType;
  lock?: boolean;
  hideshow?: boolean;
  error?: string;
  errorTwo?: StyleProp<TextStyle> | undefined;
  numberOfLines?: number;
  editable?: boolean;
  countryView?: any;
}
