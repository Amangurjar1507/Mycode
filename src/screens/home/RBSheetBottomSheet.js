// import React, {FC} from 'react';
// import {Image, TouchableOpacity, Text, View} from 'react-native';
// import RBSheet from 'react-native-raw-bottom-sheet';
// import style from './dateDrop.style';
// import imageIndex from '../../../assets/imageIndex';
// import DateController from './dateDrop.controller';
// import {DateHooksProps} from './dateDrop.interface';
// const DateDrop: FC<DateHooksProps> = () => {
//   const {hide, sethide, refRBSheet} = DateController();
//   return (
//     <View style={style.scrolcontainer}>
//       <RBSheet
//         ref={refRBSheet}
//         bottomSheerColor="#FFFFFF"
//         animationType="slide"
//         customStyles={{
//           wrapper: {
//             backgroundColor: 'grey',
//           },
//           container: {
//             marginTop: 20,
//             borderTopStartRadius: 12,
//             borderTopEndRadius: 12,
//             height: '38%',
//             borderBottomWidth: 1,
//           },
//         }}>
//         <View>
//           {/ <ScrollView> /}
//           <View
//             style={{
//               padding: 20,
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//             }}>
//             <Image source={imageIndex.close} style={{height: 18, width: 18}} />
//           </View>
//           <Text style={style.dateText}>12-14 janv.</Text>
//         </View>
//         <View style={style.availableView}>
//           <Text style={style.availableTextStyle}>Available</Text>
//           <View
//             style={{
//               justifyContent: 'space-between',
//               flexDirection: 'row',
//             }}>
//             {hide ? (
//               <TouchableOpacity onPress={() => sethide(false)}>
//                 <Image
//                   source={imageIndex.closeCircle}
//                   style={style.imageStyle}
//                 />
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity onPress={() => sethide(true)}>
//                 <Image source={imageIndex.redCircle} style={style.imageStyle} />
//               </TouchableOpacity>
//             )}
//             <Image source={imageIndex.yesCircle} style={style.imageStyle} />
//           </View>
//         </View>
//       </RBSheet>
//     </View>
//   );
// };
// export default DateDrop;

