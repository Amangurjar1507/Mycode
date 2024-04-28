import React, {FC, memo} from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {styles} from './uploadCard.style';

interface UploadCardProps {
  lable?: string;
  optionalLable?: string;
  icon?: any;
  uploadText?: string;
  ratioText?: string;
  containerStyle?: ViewStyle;
  uploadContainerStyle?: ViewStyle;
  onPress?: () => void;
}
const UploadCard: FC<UploadCardProps> = ({
  containerStyle,
  lable,
  optionalLable,
  onPress,
  uploadContainerStyle,
  uploadText,
  ratioText,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {lable && (
        <Text style={styles.lable}>
          {lable}{' '}
          {optionalLable && (
            <Text style={styles.optionalLable}>{optionalLable}</Text>
          )}
        </Text>
      )}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={[styles.uploadContainer, uploadContainerStyle]}>
        {props?.icon && <props.icon />}
        {uploadText && <Text style={styles.uploadText}>{uploadText}</Text>}
        {ratioText && <Text style={styles.ratioText}>{ratioText}</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default memo(UploadCard);
