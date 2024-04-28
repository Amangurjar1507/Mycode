import moment from 'moment';
import {useEffect, useState} from 'react';

const useCalenderPicker = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );
  const [previousYears, setPreviousYears] = useState([]);
  const [showYears, setShowYears] = useState(false);

  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };
  const minDate = moment().subtract(1, 'months').format('YYYY-MM-DD'); // One month before the current date
  const maxDate = moment().add(1, 'months').format('YYYY-MM-DD'); // One month after the current date

  //** Generate back 100 years*/
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const yearsArray: any = [];
    for (let i = currentYear - 30; i <= currentYear; i++) {
      yearsArray.push({id: i, title: `${i}`});
    }
    setPreviousYears(yearsArray);
  };

  useEffect(() => {
    generateYears();
  }, []);

  return {
    isFocused,
    isOpen,
    setIsFocused,
    setIsOpen,
    selectedDate,
    setSelectedDate,
    handleDayPress,
    minDate,
    maxDate,
    previousYears,
    showYears,
    setShowYears,
  };
};

export default useCalenderPicker;
