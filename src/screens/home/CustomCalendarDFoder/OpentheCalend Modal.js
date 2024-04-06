import React, {useState, FC} from 'react';
import {Modal, Text, View, TouchableOpacity, Button, Image} from 'react-native';
import {MoadlType} from './modal.interface';
import styles from './modal.style';
import {
  Calendar,
  LocaleConfig,
  CalendarList,
  Agenda,
} from 'react-native-calendars';
import {color} from '../../theme';
import imageIndex from '../../../assets/imageIndex';
import ModalController from './modal.controller';
const ModalComponent: FC<MoadlType> = props => {
  const {setSelected, selected} = ModalController();
  LocaleConfig.locales['en'] = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    today: 'Today',
  };
  LocaleConfig.defaultLocale = 'en';

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={props.modalShow}>
        <View style={styles.modalContainer}>
          <View style={styles.mancalendarView}>
            <View style={styles.textView}>
              <Text style={styles.changeTextStyle}>Change Date</Text>
              <TouchableOpacity onPress={() => props.closeModal()}>
                <Image
                  source={imageIndex.close}
                  style={styles.closeImageStyle}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.bordeView} />
            <View>
              <Calendar
                onDayPress={day => {
                  setSelected(day.dateString);
                }}
                hideDayNames={false}
                disableMonthChange={true}
                hideExtraDays={false}
                hideArrows={false}
                theme={{
                  backgroundColor: color.white,
                  calendarBackground: color.white,
                  textSectionTitleColor: color.black,
                  selectedDayTextColor: color.white,
                  todayTextColor: color.black,
                  dayTextColor: color.black,
                  textDisabledColor: color.black,
                  textDayFontSize: 17,
                  textInactiveColor: 'red',
                  todayButtonTextColor: 'red',
                  
                  textDayHeaderFontWeight: '500',
                  selectedDotColor: 'red',
                  monthTextColor: color.black,
                  textDayHeaderFontSize: 14,
                  textDayFontWeight: '500',
                  textMonthFontSize: 15,

                  // todayButtonFontSize: 120,
                }}
                markingType={'custom'}
                markedDates={{
                  [selected]: {
                    selected: true,
                    disableTouchEvent: true,
                  },
                }}
                disableAllTouchEventsForDisabledDays={false}
                disableArrowLeft={false}
                disableArrowRight={false}
                style={styles.calendarStyle}></Calendar>
            </View>
            <TouchableOpacity style={styles.doneView}>
              <Text style={styles.doneTextStyle}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;