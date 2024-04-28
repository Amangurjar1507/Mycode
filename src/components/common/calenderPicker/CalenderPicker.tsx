// import SvgIndex from '@svgIndex';
// import color from '@theme/color';
// import font from '@theme/font';
// import moment from 'moment';
// import React, {FC, memo, useState} from 'react';
// import {FlatList, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
// import {Calendar} from 'react-native-calendars';
// import OrLine from '../orLine/OrLine';
// import styles from './calenderPicker.style';
// import useCalenderPicker from './useCalenderPicker';

// interface calenderPickerProps {
//   container?: ViewStyle;
//   label?: string;
//   error?: string;
//   value?: string;
//   placeholder?: string;
//   containerStyle?: ViewStyle;
//   onSelectedDate?: (date: string) => void;
//   minDate?: any;
//   maxDate?: any;
//   handleDayPress?: (day: any) => void;
//   selectedDate?: string | any;
//   experienceYear?: string | any;
//   experienceShow?: boolean;
// }

// const CalenderPicker: FC<calenderPickerProps> = ({
//   container,
//   label,
//   error,
//   value,
//   containerStyle,
//   placeholder,
//   onSelectedDate,
//   minDate,
//   maxDate,
//   experienceShow,
//   experienceYear,
// }) => {
//   const {
//     isFocused,
//     isOpen,
//     setIsOpen,
//     setIsFocused,
//     selectedDate,
//     setSelectedDate,
//     handleDayPress,
//     previousYears,
//     showYears,
//     setShowYears,
//   } = useCalenderPicker();
//   // year handler
//   const [firstValue, setFirstValue] = useState(0);
//   const [secondValue, setSecondValue] = useState(16);
//   const yearsHandler = (index: number) => {
//     if (index === 0) {
//       if (firstValue === 0) {
//         return;
//       } else {
//         setFirstValue(previousValue => previousValue - 16);
//         setSecondValue(previousValue => previousValue - 16);
//       }
//     } else {
//       if (secondValue <= 100) {
//         setFirstValue(previousValue => previousValue + 16);
//         setSecondValue(previousValue => previousValue + 16);
//       }
//     }
//   };

//   //
//   const selectedMoment = moment(value, 'MMMM');
//   const nextMonth = () => selectedMoment.clone().add(1, 'months').format('MMM');
//   const preMonth = () =>
//     selectedMoment.clone().subtract(1, 'months').format('MMM');

//   //
//   const [month, setMonth] = useState('');
//   const [day, setDay] = useState('');
//   const [year, setYear] = useState('');

//   const CustomHeader = ({month: headerMonth, year: headerYear}: any) => {
//     setMonth(moment(headerYear).format('MM'));
//     setYear(moment(headerYear).format('YYYY'));
//     setDay(moment(headerYear).format('DD'));
//     return (
//       <>
//         <TouchableOpacity
//           onPress={() => setShowYears(!showYears)}
//           style={{alignItems: 'center'}}>
//           <Text allowFontScaling={false} style={styles.headerTitle}>
//             {month}
//           </Text>
//           <Text allowFontScaling={false} style={styles.headerTitle}>
//             {moment(selectedDate).format('YYYY')}
//           </Text>
//         </TouchableOpacity>
//       </>
//     );
//   };

//   const CustomDay = ({date, state, marking}: any) => {
//     let customTextStyle: any = {};
//     if (date.dateString == selectedDate) {
//       customTextStyle.color = color.white;
//       customTextStyle.fontFamily = font.OpenSansBold;
//     }
//     return (
//       <TouchableOpacity
//         onPress={() => {
//           if (onSelectedDate) {
//             onSelectedDate(date.dateString);
//             handleDayPress(date);
//             setIsOpen(false);
//           }
//         }}>
//         <View
//           style={[
//             styles.dayStyle,
//             date.dateString == selectedDate && {
//               backgroundColor: color.purple,
//               borderRadius: 60,
//               height: 30,
//               width: 30,
//             },
//           ]}>
//           <Text
//             allowFontScaling={false}
//             style={[
//               styles.dayTextStyle,
//               {
//                 fontFamily: marking?.fontFamily,
//                 color: marking?.selectedTextColor ?? color.black,
//                 ...customTextStyle,
//               },
//             ]}>
//             {date.day}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   const CustomHeaderTitle = () => (
//     <TouchableOpacity
//       activeOpacity={0.8}
//       onPress={() => setShowYears(!showYears)}>
//       <Text style={[styles.headerTitle]}>{moment().format('MMMM YYYY')}</Text>
//     </TouchableOpacity>
//   );

//   const renderItem = ({item, index}: any) => (
//     <TouchableOpacity
//       onPress={() => {
//         const dateFormat: any = moment(
//           `${day}/${month}/${item?.title}`,
//           'DD/MM/YYYY',
//         );
//         onSelectedDate?.(dateFormat);
//         setYear(item?.title);
//         setShowYears(!showYears);
//       }}
//       activeOpacity={0.8}
//       style={{
//         backgroundColor:
//           moment().year()?.toString() === item?.title
//             ? color.purple
//             : color.white,
//         borderRadius: moment().year()?.toString() === item?.title ? 200 : 0,
//         height: 34,
//         width: 70,
//         marginBottom: 32,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <Text
//         style={{
//           fontFamily: font.OpenSansRegular,
//           fontWeight: '600',
//           fontSize: 14,
//           lineHeight: 24,
//           color:
//             moment().year()?.toString() === item?.title
//               ? color.white
//               : color.black,
//         }}>
//         {item?.title}
//       </Text>
//     </TouchableOpacity>
//   );

//   const CustomYears = () => (
//     <FlatList
//       data={previousYears?.slice(firstValue, secondValue)}
//       showsVerticalScrollIndicator={false}
//       renderItem={renderItem}
//       showsHorizontalScrollIndicator={false}
//       numColumns={4}
//       columnWrapperStyle={{justifyContent: 'space-between'}}
//       style={{maxHeight: 260, padding: 16}}
//     />
//   );

//   return (
//     <View style={[styles.container, container]}>
//       <Text
//         style={styles.labelStyle}
//         numberOfLines={1}
//         allowFontScaling={false}>
//         {label}
//       </Text>
//       <View
//         style={[
//           styles.inputContainer,
//           {
//             borderColor: error
//               ? color.warning
//               : !isFocused
//               ? color.lightgray
//               : color.primary,
//             borderWidth: !isFocused && !error ? 1 : 1.5,
//           },
//           containerStyle,
//         ]}>
//         <TouchableOpacity
//           activeOpacity={0.8}
//           onPress={() => {
//             setIsFocused(!isFocused);
//             setIsOpen(!isOpen);
//           }}
//           style={styles.inputStyle}>
//           {!value ? (
//             <Text style={styles.placeholder}>{placeholder}</Text>
//           ) : (
//             <>
//               {experienceShow ? (
//                 <>
//                   {isNaN(experienceYear) ? (
//                     <Text style={styles.placeholder}>{placeholder}</Text>
//                   ) : (
//                     <Text style={styles.calenderValue}>
//                       Since {moment(value).format('DD.MM.YYYY')} (
//                       {experienceYear} Years)
//                     </Text>
//                   )}
//                 </>
//               ) : (
//                 <Text style={styles.calenderValue}>
//                   {moment(value).format('DD MMMM YYYY')}
//                 </Text>
//               )}
//             </>
//           )}
//         </TouchableOpacity>
//         <View>
//           <SvgIndex.calender />
//         </View>
//       </View>
//       {error && !isOpen && <Text style={styles.errorLabel}>{error}</Text>}
//       {isOpen && (
//         <>
//           {showYears && (
//             <View
//               style={{
//                 backgroundColor: color.white,
//                 borderRadius: 12,
//                 elevation: 10,
//                 shadowColor: '#42474C',
//                 shadowOffset: {width: 0, height: 4},
//                 shadowOpacity: 0.1,
//                 shadowRadius: 10,
//               }}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   padding: 16,
//                 }}>
//                 <TouchableOpacity
//                   onPress={() => yearsHandler(0)}
//                   activeOpacity={0.8}
//                   style={{
//                     flex: 1,
//                     alignItems: 'flex-start',
//                   }}>
//                   <View
//                     style={{
//                       height: 40,
//                       width: 40,
//                       borderRadius: 5,
//                       borderWidth: 1,
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                     }}>
//                     <SvgIndex.calenderLeft />
//                   </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() => yearsHandler(1)}
//                   activeOpacity={0.8}
//                   style={{
//                     flex: 1,
//                     alignItems: 'flex-end',
//                   }}>
//                   <View
//                     style={{
//                       height: 40,
//                       width: 40,
//                       borderRadius: 5,
//                       borderWidth: 1,
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                     }}>
//                     <SvgIndex.calenderRight />
//                   </View>
//                 </TouchableOpacity>
//               </View>
//               <OrLine />
//               {<CustomYears />}
//               <OrLine />
//               <View style={styles.todayDateContainer}>
//                 <Text style={styles.dateValue}>
//                   {value
//                     ? moment(value)?.format('DD / MM / YYYY')
//                     : '18 / 08 / 2023'}
//                 </Text>
//               </View>
//             </View>
//           )}
//           {!showYears && (
//             <View style={styles.calenderContent}>
//               <Calendar
//                 headerStyle={{
//                   borderBottomWidth: 0.5,
//                   borderBottomColor: color.borderGray,
//                   opacity: 5,
//                 }}
//                 renderArrow={dir => (
//                   <TouchableOpacity
//                     onPress={() => {
//                       dir == 'right' ? nextMonth : preMonth;
//                     }}>
//                     {dir === 'right' ? (
//                       <SvgIndex.calenderRight />
//                     ) : (
//                       <SvgIndex.calenderLeft />
//                     )}
//                   </TouchableOpacity>
//                 )}
//                 onDayPress={day => {
//                   setIsOpen(false);
//                 }}
//                 hideExtraDays
//                 theme={{
//                   arrowColor: color.black15,
//                   arrowStyle: styles.arrowContainer,
//                   textDayHeaderFontSize: 13,
//                   textDayHeaderFontFamily: font.OpenSansRegular,
//                   textDayHeaderFontWeight: '600',
//                 }}
//                 markedDates={{[selectedDate]: {selected: true}}}
//                 firstDay={1}
//                 dayComponent={({date, state, marking}) => (
//                   <CustomDay date={date} state={state} marking={marking} />
//                 )}
//                 hideDayNames={showYears}
//                 customHeaderTitle={<CustomHeaderTitle />}
//                 renderHeader={date => (
//                   <CustomHeader
//                     month={date.toString('MMM')}
//                     year={date?.toString()}
//                   />
//                 )}
//                 date={selectedDate?.toString()}
//               />
//               <OrLine />
//               <View style={styles.todayDateContainer}>
//                 <Text style={styles.dateValue}>
//                   {value
//                     ? moment(value)?.format('DD / MM / YYYY')
//                     : '18 / 08 / 2023'}
//                 </Text>
//               </View>
//             </View>
//           )}
//         </>
//       )}
//     </View>
//   );
// };

// export default memo(CalenderPicker);

import {View, Text} from 'react-native';
import React from 'react';

const CalenderPicker = () => {
  return (
    <View>
      <Text>CalenderPicker</Text>
    </View>
  );
};

export default CalenderPicker;
