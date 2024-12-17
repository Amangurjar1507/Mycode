import React from 'react';
import {ActivityIndicator, Modal, Text, View} from 'react-native';
import styles from './spinner.style';
import color from '../../../theme/color';
interface SpinnerProps {
  visible: boolean;
  label?: string;
}
const Spinner: React.FC<SpinnerProps> = ({visible, label}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.container}>
        {label && (
          <Text
            numberOfLines={1}
            allowFontScaling={false}
            style={styles.labelText}>
            {label}
          </Text>
        )}
        <ActivityIndicator size={'small'} color={color.secondaryBG} />
      </View>
    </Modal>
  );
};

export default Spinner;
