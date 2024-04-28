import {useCallback, useState} from 'react';

const useCustomDatePicker = () => {
  const [pickerInfo, setPickerInfo] = useState({
    selectedDate: '',
    visiblePicker: false,
  });

  //** Handle state change values */
  const handleChangeValue = useCallback(
    (value: any, state: string) => {
      setPickerInfo(prevState => ({...prevState, [state]: value}));
    },
    [pickerInfo],
  );

  //** On toggle picker */
  const onToggle = () => {
    handleChangeValue(!pickerInfo?.visiblePicker, 'visiblePicker');
  };

  return {
    pickerInfo,
    handleChangeValue,
    onToggle,
  };
};

export default useCustomDatePicker;
