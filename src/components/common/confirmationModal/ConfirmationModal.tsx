import React, {FC, memo} from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  Modal,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './confirmationModal.style';
import CustomStatusbar from '../customStatusbar/CustomStatusbar';

interface ModalComponentProps {
  containerStyle?: ViewStyle;
  modalInnerContainerStyle?: ViewStyle;
  visible: boolean;
  animationType?: 'slide' | 'fade';
  image?: ImageProps;
  imageStyle?: ImageStyle;
  titleText?: string;
  titleTextStyle?: TextStyle;
  desText?: string;
  desTextStyle?: TextStyle;
  confirmLabel?: string;
  confirmLableStyle?: TextStyle;
  cancelLabel?: string;
  cancelLableStyle?: TextStyle;
  confirmBtnStyle?: ViewStyle;
  cancelBtnStyle?: ViewStyle;
  onClose?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  btnViewStyle?: ViewStyle;
}

const ConfirmationModal: FC<ModalComponentProps> = ({
  containerStyle,
  modalInnerContainerStyle,
  visible,
  animationType,
  image,
  imageStyle,
  titleText,
  titleTextStyle,
  desText,
  desTextStyle,
  confirmLabel,
  confirmLableStyle,
  cancelLabel,
  cancelLableStyle,
  onClose,
  onConfirm,
  confirmBtnStyle,
  onCancel,
  cancelBtnStyle,
  btnViewStyle,
}) => {
  return (
    <Modal
      visible={visible}
      animationType={animationType}
      transparent
      onRequestClose={onClose}>
      <View style={[styles.modalContainer, containerStyle]}>
        <View style={[styles.modalInnerContainer, modalInnerContainerStyle]}>
          {image && (
            <Image
              source={image}
              resizeMode="contain"
              style={[styles.imageStyle, imageStyle]}
            />
          )}
          {titleText && (
            <Text style={[styles.modalTitleText, titleTextStyle]}>
              {titleText}
            </Text>
          )}
          {desText && (
            <Text style={[styles.modalDesText, desTextStyle]}>{desText}</Text>
          )}
          <View style={[styles.btnView, btnViewStyle]}>
            {onConfirm && confirmLabel && (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.btnContainer, confirmBtnStyle]}
                onPress={onConfirm}>
                <Text style={[styles.nameTextStyle, confirmLableStyle]}>
                  {confirmLabel}
                </Text>
              </TouchableOpacity>
            )}
            <View style={{marginHorizontal: 5}} />
            {onCancel && cancelLabel && (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.btnContainer, cancelBtnStyle]}
                onPress={onCancel}>
                <Text style={[styles.nameTextStyle, cancelLableStyle]}>
                  {cancelLabel}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default memo(ConfirmationModal);
