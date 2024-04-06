// import React, {useState} from 'react';
// import {View, Text} from 'react-native';
// import {Calendar, LocaleConfig} from 'react-native-calendars';

// LocaleConfig.locales['en'] = {
//   monthNames: [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ],
//   monthNamesShort: [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
//   ],
//   dayNames: [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ],
//   dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
// };

// LocaleConfig.defaultLocale = 'en';

// const CustomDayComponent = ({date, state, marking, onPress}) => {
//   return (
//     <View>
//       <Text style={{color: marking?.dotColor || 'red'}}>{date.day}</Text>
//       {marking?.dots && (
//         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//           {marking.dots.map((dot, index) => (
//             <View
//               key={index}
//               style={{
//                 width: 6,
//                 height: 6,
//                 borderRadius: 3,
//                 backgroundColor: dot.color,
//                 marginTop: 2,
//               }}
//             />
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// const CustomCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState('');

//   const isTenth = dateString => {
//     return dateString === '2024-01-10';
//   };

//   const isNinth = dateString => {
//     return dateString === '2024-01-09';
//   };
//   const eigtht = dateString => {
//     return dateString === '2024-01-18';
//   };

//   const isEighth = dateString => {
//     return dateString === '2024-01-08';
//   };
//   const isEeighth = dateString => {
//     return dateString === '2024-01-18';
//   };
//   const isOne = dateString => {
//     return dateString === '2024-01-01';
//   };
//   const isFifty = dateString => {
//     return dateString === '2024-01-15';
//   };
//   const twantyTwo = dateString => {
//     return dateString === '2024-01-22';
//   };
//   const twentyNine = dateString => {
//     return dateString === '2024-01-29';
//   };
//   const twentyFour = dateString => {
//     return dateString === '2024-01-24';
//   };
//   const eleven = dateString => {
//     return dateString === '2024-01-11';
//   };
//   const isToday = dateString => {
//     const today = new Date().toDateString();
//     return dateString === today;
//   };

//   const onDayPress = day => {
//     setSelectedDate(day.dateString);
//   };

//   const getMarkedDates = () => {
//     let markedDates = {};
//     for (let i = 1; i <= 31; i++) {
//       const dateString = `2024-01-${i < 10 ? '0' + i : i}`;
//       markedDates[dateString] = {
//         selected: selectedDate === dateString,
//         dots: [],
//         marked: true,
//         selectedColor: '#00a896',
//         selectedTextColor: 'white',
//         dotColor: 'white',
//       };
//       // if (isTenth(dateString)) {
//       //   markedDates[dateString].dots.push({color: '#00a896'});
//       //   markedDates[dateString].dots.push({color: '#d3dcff'});
//       //   markedDates[dateString].dots.push({color: '#d70f64'});
//       // }
//       if (isNinth(dateString)) {
//         markedDates[dateString].dots.push({color: '#00a896'});
//         markedDates[dateString].dots.push({color: '#d3dcff'});
//         markedDates[dateString].dots.push({color: '#d70f64'});
//       }
//       if (isEighth(dateString)) {
//         markedDates[dateString].dots.push({color: '#D8F3DC'});
//         markedDates[dateString].dots.push({color: '#F3BF6F'});

//         // markedDates[dateString].dots.push({color: '#D3DCFF'});
//         // markedDates[dateString].dots.push({color: '#d70f64'});
//       }
//       if (isEeighth(dateString)) {
//         // markedDates[dateString].dots.push({color: '#F3BF6F'});
//       }
//       if (isOne(dateString)) {
//         markedDates[dateString].dots.push({color: '#F3BF6F'});
//         markedDates[dateString].dots.push({color: '#D8F3DC'});
//       }
//       if (isFifty(dateString)) {
//         markedDates[dateString].dots.push({color: '#D8F3DC'});
//       }
//       if (twantyTwo(dateString)) {
//         markedDates[dateString].dots.push({color: '#D8F3DC'});
//         markedDates[dateString].dots.push({color: '#00A896'});
//       }
//       if (twentyNine(dateString)) {
//         markedDates[dateString].dots.push({color: '#00A896'});
//         markedDates[dateString].dots.push({color: '#D8F3DC'});
//       }
//       if (twentyFour(dateString)) {
//         markedDates[dateString].dots.push({color: '#F3BF6F'});
//       }
//       if (eleven(dateString)) {
//         markedDates[dateString].dots.push({color: '#F3BF6F'});
//       }
//       if (eigtht(dateString)) {
//         markedDates[dateString].dots.push({color: '#00A896'});
//       }
//     }

//     return markedDates;
//   };

//   const calendarTheme = {
//     backgroundColor: '#2E2F34',
//     calendarBackground: '#ffffff',
//     textSectionTitleColor: '#2E2F34',
//     todayTextColor: 'white',
//     todayBackgroundColor: '#00a896',
//     dayTextColor: '#2E2F34',
//     textDisabledColor: '#2E2F34',
//     selectedDayTextColor: 'white',
//     selectedDayBackground: '#00a896',
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: 'white',
//       }}>
//       <Calendar
//         onDayPress={onDayPress}
//         markedDates={getMarkedDates()}
//         theme={calendarTheme}
//         hideArrows={true}
//         markingType="multi-dot"
//         hideExtraDays={true}
//         renderHeader={() => null}
//         disabledDatesTextStyle={{}}
//         renderDayContent={({date, marking}) => (
//           <CustomDayComponent date={date} marking={marking} />
//         )}
//       />
//     </View>
//   );
// };

// export default CustomCalendar;

// import React, {useState} from 'react';
// import {View, Text} from 'react-native';
// import {Calendar, LocaleConfig} from 'react-native-calendars';

// LocaleConfig.locales['en'] = {
//   monthNames: [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ],
//   monthNamesShort: [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
//   ],
//   dayNames: [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ],
//   dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
// };

// LocaleConfig.defaultLocale = 'en';

// const CustomDayComponent = ({date, state, marking, onPress}) => {
//   return (
//     <View>
//       <Text style={{color: marking?.dotColor || 'black'}}>{date.day}</Text>
//     </View>
//   );
// };

// const CustomMonthComponent = ({month, year, onMonthChange, firstDay}) => {
//   return (
//     <View>
//       <Text style={{color: 'red', fontSize: 33}}>{`${month} ${year}`}</Text>
//     </View>
//   );
// };

// const CustomCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState('');

//   const isMonday = dateString => {
//     const day = new Date(dateString).getDay();
//     return day === 1;
//   };

//   const onDayPress = day => {
//     setSelectedDate(day.dateString);
//   };

//   const getMarkedDates = () => {
//     let markedDates = {};

//     for (let i = 1; i <= 31; i++) {
//       const dateString = `2024-01-${i < 10 ? '0' + i : i}`;
//       markedDates[dateString] = {
//         selected: selectedDate === dateString,
//         dotColor: isMonday(dateString) ? 'red' : undefined,
//         marked: true,
//       };
//     }

//     return markedDates;
//   };

//   const calendarTheme = {
//     monthTextColor: '#2E2F34',
//     backgroundColor: '#2E2F34',
//     calendarBackground: '#ffffff',
//     textSectionTitleColor: '#2E2F34',
//     todayTextColor: '#2E2F34',
//     dayTextColor: '#2E2F34',
//     textDisabledColor: '#2E2F34',
//     selectedDayTextColor: 'green',
//   };

//   return (
//     <View>
//       <Calendar
//         onDayPress={onDayPress}
//         markedDates={getMarkedDates()}
//         theme={calendarTheme}
//         hideArrows={true}
//         hideExtraDays={true}
//         renderHeader={() => null} // This will hide the default header
//         renderDayContent={(date, state, marking) => (
//           <CustomDayComponent date={date} state={state} marking={marking} />
//         )}
//         renderMonthHeader={({month, year, onMonthChange, firstDay}) => (
//           <CustomMonthComponent
//             month={month}
//             year={year}
//             onMonthChange={onMonthChange}
//             firstDay={1}
//           />
//         )}
//       />
//     </View>
//   );
// };

// export default CustomCalendar;

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

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
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'en';

const CustomDayComponent = ({date, state, marking, onPress}) => {
  return (
    <View>
      <Text style={{color: marking?.dotColor || 'black'}}>{date.day}</Text>
    </View>
  );
};

const CustomMonthComponent = ({month, year, onMonthChange, firstDay}) => {
  return (
    <View>
      <Text style={{color: 'red', fontSize: 33}}>{`${month} ${year}`}</Text>
    </View>
  );
};

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const isMonday = dateString => {
    const day = new Date(dateString).getDay();
    return day === 1;
  };

  const onDayPress = day => {
    setSelectedDate(day.dateString);
  };

  const getMarkedDates = () => {
    let markedDates = {};

    for (let i = 1; i <= 31; i++) {
      const dateString = `2024-01-${i < 10 ? '0' + i : i}`;
      markedDates[dateString] = {
        selected: selectedDate === dateString,
        dotColor: isMonday(dateString) ? 'red' : undefined,
        marked: true,
      };
    }

    return markedDates;
  };

  const calendarTheme = {
    monthTextColor: '#2E2F34',
    backgroundColor: '#2E2F34',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#2E2F34',
    todayTextColor: '#2E2F34',
    dayTextColor: '#2E2F34',
    textDisabledColor: '#2E2F34',
    selectedDayTextColor: 'green',
  };

  return (
    <View>
      <Calendar
        onDayPress={onDayPress}
        markedDates={getMarkedDates()}
        theme={calendarTheme}
        hideArrows={true}
        hideExtraDays={true}
        renderHeader={() => null} // This will hide the default header
        renderDayContent={(date, state, marking) => (
          <CustomDayComponent date={date} state={state} marking={marking} />
        )}
        renderMonthHeader={({month, year, onMonthChange, firstDay}) => (
          <CustomMonthComponent
            month={month}
            year={year}
            onMonthChange={onMonthChange}
            firstDay={1}
          />
        )}
      />
    </View>
  );
};

export default CustomCalendar;

