import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React, { FC, Fragment, memo, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { styles } from './customDatePicker.style';
import useCustomDatePicker from './useCustomDatePicker';

interface CustomDatePickerProps {
  placeholder?: string;
  label?: string;
  value?: string;
  onDateChange?: (date: Date) => void;
  error?: string;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({
  placeholder,
  label,
  value,
  onDateChange,
  error,
}) => {
  const { pickerInfo, handleChangeValue, onToggle } = useCustomDatePicker();

  //** date handler */
  const handleDateChange = useCallback(
    (date: Date) => {
      // handleChangeValue(date, 'selectedDate');
      handleChangeValue(!pickerInfo?.visiblePicker, 'visiblePicker');
      onDateChange?.(date);
    },
    [pickerInfo],
  );

  return (
    <Fragment>
      <View
        style={[styles.container, pickerInfo?.visiblePicker && styles.isFoucs]}>
        <View style={styles.labelView}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
        {!value ? (
          <Text style={styles.placeholderText}>{placeholder}</Text>
        ) : (
          <Text style={styles.dateText}>{value}</Text>
        )}
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onToggle}
          style={styles.iconView}>
          <SvgIndex.calender />
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.errorLabel}>{error}</Text>}
      {pickerInfo?.visiblePicker && (
        <DatePicker
          date={new Date()}
          modal
          open={pickerInfo?.visiblePicker}
          mode="date"
          onConfirm={handleDateChange}
          onCancel={onToggle}
          theme={'light'}
          cancelText="Cancel"
          confirmText="Confirm"
          buttonColor={color.primary}
          dividerColor={color.primary}
        // minimumDate={}
        // maximumDate={}
        />
      )}
    </Fragment>
  );
};

export default memo(CustomDatePicker);
