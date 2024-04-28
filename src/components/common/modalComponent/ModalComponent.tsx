import React, {FC, memo} from 'react';
import {Modal, ModalProps, StyleProp, View, ViewStyle} from 'react-native';
import CustomStatusbar from '../customStatusbar/CustomStatusbar';
import styles from './modalComponent.style';

interface ModalComponentProps {
  visible: boolean;
  animationType?: 'none' | 'slide' | 'fade' | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  modalProp?: ModalProps;
  children: any;
  statusBar?: boolean;
}
const ModalComponent: FC<ModalComponentProps> = ({
  children,
  visible,
  animationType,
  containerStyle,
  statusBar,
  modalProp,
}) => {
  return (
    <Modal
      animationType={animationType}
      visible={visible}
      statusBarTranslucent
      transparent
      {...modalProp}>
      {statusBar && <CustomStatusbar />}
      <View style={[styles.container, containerStyle]}>{children}</View>
    </Modal>
  );
};

export default memo(ModalComponent);
ModalComponent.defaultProps = {
  statusBar: false,
};
