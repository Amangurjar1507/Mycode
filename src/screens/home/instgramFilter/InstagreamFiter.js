// import {
//     Image,
//     ScrollView,
//     StyleSheet,
//     TouchableOpacity,
//     View,
//     TextInput,
//     useWindowDimensions,
//     StatusBar,
//   } from 'react-native';
//   import React, {useEffect, useRef, useState} from 'react';
//   import HeaderImage from '../../components/HeaderImage';
//   import TextFormatted from '../../components/TextFormatted';
//   import {theme} from '../../utils/Constants';
//   import TextInputFormat from '../../components/TextInputFormat';
//   import DropDown from '../../components/DropDown';
//   import moment from 'moment';
//   import RBSheet from 'react-native-raw-bottom-sheet';
//   import Button from '../../components/Button';
//   import {Calendar} from 'react-native-calendars';
//   import Dropdown1 from '../../components/dropdown1';
//   import {useSelector} from 'react-redux';
//   import {
//     EducationList,
//     EthnicityList,
//     genderList,
//     LookingList,
//     SexualList,
//     showMeList,
//     ZodiacList,
//   } from '../../utils/dropDownData';
//   import ButtonView from '../../components/buttonView';
//   import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//   import BottomSheet from '../../components/bottomSheet';
//   import LinearGradient from 'react-native-linear-gradient';
//   import {
//     Brightness,
//     Contrast,
//     Saturate,
//   } from 'react-native-color-matrix-image-filters';
//   import ImagePicker from 'react-native-image-crop-picker';
//   import {
//     BluelightImage,
//     GreenlightImage,
//     PurplelightImage,
//     RedlightImage,
//     YellowlightImage,
//   } from '../../utils/CustomImages';
//   import {STAP} from '../../redux/actions/ActionType';
//   import {useDispatch} from 'react-redux';
//   import Netinforsheet from '../../components/Netinforsheet';
//   import {Slider} from '@miblanchard/react-native-slider';
//   import ViewShot from 'react-native-view-shot';
//   import {useRoute} from '@react-navigation/native';
//   const EditProfile = ({navigation}) => {
//     const ThemeMode = useSelector(state => state.Theme);
//     const Staps = useSelector(state => state.Stap);
//     const {params} = useRoute();
//     const dispatch = useDispatch();
//     const dimension = useWindowDimensions();
//     const [name, setName] = useState(params?.User.user_name);
//     const [surname, setSurname] = useState(params?.User.surname);
//     const [gender, setGender] = useState(params?.User.gender);
//     const [aboutMe, setAboutMe] = useState(params?.User.about);
//     const [showMe, setShowMe] = useState(params?.User.show_me);
//     const [selectedDate, setSelectedDate] = useState(params?.User.dob);
//     const [Sexual, setSexual] = useState(params?.User.sexual_orientation);
//     const [lookingFor, setLookingFor] = useState(params?.User.looking_for);
//     const [education, setEducation] = useState(params?.User.education);
//     const [ethnicity, setEthnicity] = useState(params?.User.ethnicity);
//     const [zodiac, setZodiac] = useState(params?.User.zodiac);
//     const [toggle1, setToggle1] = useState(params?.User.kids);
//     const [toggle2, setToggle2] = useState(params?.User.drink);
//     const [toggle3, setToggle3] = useState(params?.User.smoke);
//     const [pic, setPic] = useState();
//     const [Loading, setLoading] = useState(false);
//     const refRBSheet = useRef();
//     const refRBSheet1 = useRef();
//     const Shotref = useRef();
//     const editsheet = useRef();
//     const [cropImg, setCropImg] = useState('');
//     const [filerimg, setFilerimg] = useState('');
//     const [filterstate, setFilterstate] = useState(0);
//     const [brightness, setBrightness] = useState(1);
//     const [saturate, setSaturate] = useState(1);
//     const [contrast, setContrast] = useState(1);
//     const bight = parseFloat(brightness);
//     const Satr = parseFloat(saturate);
//     const contra = parseFloat(contrast);
//     const pickImage = () => {
//       launchImageLibrary({quality: 1}, response => {
//         if (!response.didCancel) {
//           setPic(response.assets[0]);
//           setCropImg('');
//           editsheet.current.open();
//         }
//       });
//     };
//     const picCamera = () => {
//       launchCamera({}, response => {
//         if (!response.didCancel) {
//           setPic(response.assets[0]);
//           setCropImg('');
//           editsheet.current.open();
//         }
//       });
//     };

//     const Crop_img = () => {
//       ImagePicker.openCropper({
//         path: pic?.uri,
//         width: 240,
//         height: 240,
//         maxFiles: 1,
//         showCropFrame: false,
//       }).then(image => {
//         setCropImg(image.path);
//       });
//     };
//     const Snapshot = () => {
//       Shotref.current?.capture().then(uri => {
//         setFilerimg(uri);
//       });
//     };

//     async function Update_profile() {
//       try {
//         const body = new FormData();
//         body.append('user_id', Staps.id);
//         body.append('user_name', name);
//         body.append('surname', surname);
//         filerimg == null
//           ? body.append('image', {
//               name: pic?.fileName,
//               type: pic?.type,
//               uri: pic?.uri,
//             })
//           : body.append('image', {
//               name: filerimg?.substring(
//                 filerimg?.lastIndexOf('/') + 1,
//                 filerimg?.length,
//               ),
//               type: pic.type,
//               uri: filerimg,
//             });
//         body.append('dob', selectedDate);
//         body.append('looking_for', lookingFor);
//         body.append('education', education);
//         body.append('ethnicity', ethnicity);
//         body.append('zodiac', zodiac);
//         body.append('smoke', toggle3);
//         body.append('kids', toggle1);
//         body.append('drink', toggle2);
//         body.append('gender', gender);
//         body.append('about', aboutMe);
//         body.append('show_me', showMe);
//         body.append('sexual_orientation', Sexual);
//         setLoading(true);
//         const res = await fetch(
//           'https://technorizen.com/Dating/webservice/update_profile',
//           {
//             method: 'post',
//             headers: {
//               'content-type': 'multipart/form-data',
//             },
//             body: body,
//           },
//         );
//         const rslt = await res.json();
//         //console.log('bodybody =>', body);
//         if (rslt.status == 1) {
//           setLoading(false);
//           // dispatch({type: STAP, payload: {user: rslt.result}});
//           navigation.navigate('myProfile');
//           console.log(rslt.result);
//         } else {
//           setLoading(false);
//           console.log(rslt.message);
//         }
//       } catch (e) {
//         alert('An error occured.');
//         console.log(e);
//       }
//     }

//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: ThemeMode.selectedTheme
//             ? theme.colors.primary
//             : theme.colors.primaryBlack,
//         }}>
//         <View>
//           <HeaderImage height={240} marginBottom={20}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 marginHorizontal: 20,
//               }}>
//               <View style={{flex: 1, marginLeft: 40}}>
//                 <TextFormatted
//                   style={{
//                     fontSize: 22,
//                     fontWeight: '700',
//                     color: theme.colors.primary,
//                     textAlign: 'center',
//                     marginTop: 17,
//                   }}>
//                   My profile
//                 </TextFormatted>
//                 <TextFormatted
//                   style={{
//                     fontSize: 16,
//                     fontWeight: '400',
//                     color: theme.colors.primary,
//                     textAlign: 'center',
//                     marginTop: 3,
//                   }}>
//                   Edit account
//                 </TextFormatted>
//               </View>
//               <TouchableOpacity onPress={() => navigation.goBack()}>
//                 <Image
//                   source={
//                     ThemeMode.selectedTheme
//                       ? require('../../assets/icons/close.png')
//                       : require('../../assets/icons/close_dark.png')
//                   }
//                   style={{height: 40, width: 40, resizeMode: 'contain'}}
//                 />
//               </TouchableOpacity>
//             </View>
//           </HeaderImage>
//           <View
//             style={{
//               height: 140,
//               width: 140,
//               backgroundColor: theme.colors.primary,
//               borderRadius: 40,
//               justifyContent: 'center',
//               alignItems: 'center',
//               alignSelf: 'center',
//               position: 'absolute',
//               bottom: 0,
//               shadowColor: '#000',
//               shadowOffset: {
//                 width: 0,
//                 height: 1,
//               },
//               shadowOpacity: 0.2,
//               shadowRadius: 1.41,
//               elevation: 2,
//             }}>
//             <Image
//               source={
//                 / filerimg == '' ? {uri: uri.uri} : {uri: filerimg} /
//                 filerimg == ''
//                   ? / require('../../assets/images/image.png') /
//                     {uri: params?.User.image}
//                   : {uri: filerimg}
//               }
//               style={{
//                 height: 147,
//                 width: 147,
//                 resizeMode: 'contain',
//                 borderRadius: 40,
//               }}
//             />

//             <TouchableOpacity
//               style={{
//                 position: 'absolute',
//                 right: 0,
//                 bottom: 0,
//                 height: 30,
//                 width: 30,
//                 borderRadius: 10,
//                 alignItems: 'center',
//                 backgroundColor:
//                   ThemeMode.themecolr == 'Red'
//                     ? theme.colors.red
//                     : ThemeMode.themecolr == 'Blue'
//                     ? theme.colors.Blue
//                     : ThemeMode.themecolr == 'Green'
//                     ? theme.colors.Green
//                     : ThemeMode.themecolr == 'Purple'
//                     ? theme.colors.Purple
//                     : ThemeMode.themecolr == 'Yellow'
//                     ? theme.colors.Yellow
//                     : theme.colors.red,
//                 paddingVertical: 5,
//               }}
//               onPress={() => refRBSheet1.current.open()}>
//               <Image
//                 source={require('../../assets/icons/edit_pen.png')}
//                 style={{height: 20, width: 20, resizeMode: 'contain'}}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <ScrollView>
//           <TextInputFormat
//             label={'Name'}
//             value={name}
//             onChangeText={setName}
//             containerStyle={{marginTop: 20}}
//             labelColor={
//               ThemeMode.selectedTheme
//                 ? theme.colors.primaryBlack
//                 : theme.colors.primary
//             }
//           />

//           <TextInputFormat
//             label={'Surname'}
//             labelColor={
//               ThemeMode.selectedTheme
//                 ? theme.colors.primaryBlack
//                 : theme.colors.primary
//             }
//             placeholder={'Insert your surname'}
//             value={surname}
//             onChangeText={setSurname}
//             containerStyle={{marginTop: 20}}
//           />
//           <TextFormatted
//             style={{
//               fontSize: 14,
//               fontWeight: '600',
//               color: ThemeMode.selectedTheme
//                 ? theme.colors.primaryBlack
//                 : theme.colors.primary,
//               flex: 1,
//               marginLeft: 40,
//               marginTop: 20,
//             }}>
//             Birthday date
//           </TextFormatted>
//           <TouchableOpacity
//             onPress={() => {
//               refRBSheet.current.open();
//             }}
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               backgroundColor: ThemeMode.selectedTheme
//                 ? theme.colors.primary
//                 : theme.colors.primaryBlack,
//               marginHorizontal: 20,
//               borderRadius: 20,
//               paddingHorizontal: 20,
//               borderColor: '#EA4A5A',
//               marginTop: 5,
//               elevation: 2,
//               height: 50,
//               shadowColor: '#8490ae85',
//               shadowOffset: {
//                 width: 0,
//                 height: 1,
//               },
//               shadowOpacity: 0.22,
//               shadowRadius: 2.22,
//               elevation: 10,
//             }}>
//             <TextFormatted
//               style={{
//                 fontSize: 14,
//                 fontWeight: '400',
//                 color:
//                   selectedDate == null
//                     ? '#8490AE'
//                     : ThemeMode.selectedTheme
//                     ? theme.colors.primaryBlack
//                     : theme.colors.primary,
//                 flex: 1,
//               }}>
//               {selectedDate == null
//                 ? 'Select your birthday date'
//                 : moment(selectedDate).format('DD-MM-yyyy')}
//             </TextFormatted>
//             <Image
//               source={require('../../assets/icons/calendar.png')}
//               style={{height: 20, width: 18, resizeMode: 'contain'}}
//             />
//           </TouchableOpacity>
//           <Dropdown1
//             data={genderList}
//             value={gender}
//             onChange={item => setGender(item.value)}
//             title={'Gender'}
//             height={150}
//           />
//           <Dropdown1
//             data={showMeList}
//             value={showMe}
//             onChange={item => setShowMe(item.value)}
//             title={'Show Me'}
//             height={150}
//           />

//           <TextFormatted
//             style={{
//               fontSize: 14,
//               fontWeight: '600',
//               color: ThemeMode.selectedTheme
//                 ? theme.colors.primaryBlack
//                 : theme.colors.primary,
//               marginLeft: 40,
//               marginTop: 20,
//             }}>
//             About me
//           </TextFormatted>
//           <View
//             style={{
//               height: Staps.about?.length < 38 || Staps.about == null ? 50 : 130,
//               backgroundColor: ThemeMode.selectedTheme
//                 ? theme.colors.primary
//                 : theme.colors.primaryBlack,
//               borderRadius: 20,
//               paddingHorizontal: 20,
//               marginTop: 5,
//               shadowColor: '#8490ae85',
//               shadowOffset: {
//                 width: 0,
//                 height: 1,
//               },
//               shadowOpacity: 0.22,
//               shadowRadius: 2.22,
//               elevation: 10,
//               marginHorizontal: 20,
//             }}>
//             <TextInput
//               placeholderTextColor={
//                 ThemeMode.selectedTheme
//                   ? theme.colors.primaryBlack
//                   : theme.colors.primary
//               }
//               value={aboutMe}
//               onChangeText={setAboutMe}
//               multiline={aboutMe?.length < 38 ? false : true}
//               style={{
//                 flex: 1,
//                 fontSize: 14,
//                 fontFamily: 'Rubik-Regular',
//                 color: ThemeMode.selectedTheme
//                   ? theme.colors.primaryBlack
//                   : theme.colors.primary,
//                 textAlignVertical: 'top',
//                 paddingVertical: 16,
//               }}
//             />
//           </View>
//           <Dropdown1
//             data={SexualList}
//             value={Sexual}
//             onChange={item => setSexual(item.value)}
//             title={'Sexual orientation'}
//           />
//           <Dropdown1
//             data={LookingList}
//             value={lookingFor}
//             onChange={item => setLookingFor(item.value)}
//             title={'Looking for'}
//             height={160}
//           />
//           <Dropdown1
//             data={EducationList}
//             value={education}
//             onChange={item => setEducation(item.value)}
//             title={'Education'}
//           />
//           <Dropdown1
//             data={EthnicityList}
//             value={ethnicity}
//             onChange={item => setEthnicity(item.value)}
//             title={'Ethnicity'}
//           />
//           <Dropdown1
//             data={ZodiacList}
//             value={zodiac}
//             onChange={item => setZodiac(item.value)}
//             title={'Zodiac'}
//           />
//           <SwitchBox
//             Name={'Has Kids'}
//             onPress={() => setToggle1(!toggle1)}
//             toggle={toggle1}
//           />
//           <SwitchBox
//             Name={'Drinks'}
//             onPress={() => setToggle2(!toggle2)}
//             toggle={toggle2}
//           />
//           <SwitchBox
//             Name={'Smokes'}
//             onPress={() => setToggle3(!toggle3)}
//             toggle={toggle3}
//           />

//           <View style={{height: 30}} />
//         </ScrollView>

//         <ButtonView>
//           <Button
//             // opacity={
//             //   user.name != name ||
//             //   user.surname != surname ||
//             //   user.selectedDate != selectedDate ||
//             //   user.gender != gender ||
//             //   user.showMe != showMe ||
//             //   user.aboutMe != aboutMe ||
//             //   user.Sexual != Sexual ||
//             //   user.lookingFor != lookingFor ||
//             //   user.education != education ||
//             //   user.ethnicity != ethnicity ||
//             //   user.zodiac != zodiac ||
//             //   user.has != has ||
//             //   user.drink != drink ||
//             //   user.smoke != smoke
//             //     ? // user.toggle1 != toggle1 ||
//             //       // user.toggle2 != toggle2 ||
//             //       // user.toggle3 != toggle3
//             //       1
//             //     : 0.5
//             // }
//             onPress={() => Update_profile() / navigation.goBack() /}
//             buttonName={'Save'}
//             Loading={Loading}
//             marginTop={1}
//             // disabled={
//             //   user.name != name ||
//             //   user.surname != surname ||
//             //   user.selectedDate != selectedDate ||
//             //   user.gender != gender ||
//             //   user.showMe != showMe ||
//             //   user.aboutMe != aboutMe ||
//             //   user.Sexual != Sexual ||
//             //   user.lookingFor != lookingFor ||
//             //   user.education != education ||
//             //   user.ethnicity != ethnicity ||
//             //   user.zodiac != zodiac
//             //     ? // user.toggle1 != toggle1 ||
//             //       // user.toggle2 != toggle2 ||
//             //       // user.toggle3 != toggle3
//             //       false
//             //     : true
//             // }
//           />
//         </ButtonView>
//         <Bottom
//           refRBSheet={refRBSheet}
//           selectedDate={selectedDate}
//           setSelectedDate={setSelectedDate}
//         />
//         <Option
//           refRBSheet1={refRBSheet1}
//           onPress={() => {
//             picCamera();
//             refRBSheet1.current.close();
//           }}
//           onPress1={() => {
//             pickImage();
//             refRBSheet1.current.close();
//           }}
//         />
//         <BottomSheet
//           //onClose={() => Snapshot()}
//           closeOnPressBack={false}
//           closeOnPressMask={false}
//           closeOnDragDown={false}
//           refRBSheet={editsheet}
//           height={dimension.width * 1.7}>
//           {filterstate === 0 && (
//             <ViewShot
//               ref={Shotref}
//               style={{
//                 / height: 240, width: 240, / alignSelf: 'center',
//                 marginTop: 30,
//               }}
//               options={{
//                 fileName: 'UserProfile',
//                 format: 'jpg',
//                 quality: 0.9,
//               }}>
//               <Brightness amount={bight}>
//                 <Contrast amount={contra}>
//                   <Saturate amount={Satr}>
//                     <Image
//                       resizeMode="cover"
//                       source={cropImg == '' ? {uri: pic?.uri} : {uri: cropImg}}
//                       style={{
//                         height: 240,
//                         width: 240,
//                         alignSelf: 'center',
//                         borderRadius: 40,
//                       }}
//                     />
//                   </Saturate>
//                 </Contrast>
//               </Brightness>
//             </ViewShot>
//           )}

//           {filterstate === 1 && (
//             <View style={{marginVertical: 10, marginHorizontal: 20}}>
//               <Brightness amount={bight}>
//                 <Contrast amount={contra}>
//                   <Saturate amount={Satr}>
//                     <Image
//                       resizeMode="cover"
//                       source={cropImg == '' ? {uri: pic?.uri} : {uri: cropImg}}
//                       style={{
//                         alignSelf: 'center',
//                         width: 240,
//                         height: 240,
//                         marginVertical: 20,
//                         borderRadius: 40,
//                       }}
//                     />
//                   </Saturate>
//                 </Contrast>
//               </Brightness>

//               <Imgfilter
//                 Filtername={'Brightness'}
//                 RangeValue={brightness}
//                 onPress={() => setFilterstate(0)}
//                 value={bight}
//                 onValueChange={v => setBrightness(v)}
//               />
//             </View>
//           )}

//           {filterstate === 2 && (
//             <View style={{marginVertical: 10, marginHorizontal: 20}}>
//               <Brightness amount={bight}>
//                 <Contrast amount={contra}>
//                   <Saturate amount={Satr}>
//                     <Image
//                       resizeMode="cover"
//                       source={cropImg == '' ? {uri: pic?.uri} : {uri: cropImg}}
//                       style={{
//                         alignSelf: 'center',
//                         width: 240,
//                         height: 240,
//                         marginVertical: 20,
//                         borderRadius: 40,
//                       }}
//                     />
//                   </Saturate>
//                 </Contrast>
//               </Brightness>

//               <Imgfilter
//                 Filtername={'Contrast'}
//                 RangeValue={contrast}
//                 onPress={() => setFilterstate(0)}
//                 value={contra}
//                 onValueChange={v => setContrast(v)}
//               />
//             </View>
//           )}

//           {filterstate === 3 && (
//             <View style={{marginVertical: 10, marginHorizontal: 20}}>
//               <Brightness amount={bight}>
//                 <Contrast amount={contra}>
//                   <Saturate amount={Satr}>
//                     <Image
//                       resizeMode="cover"
//                       source={cropImg == '' ? {uri: pic?.uri} : {uri: cropImg}}
//                       style={{
//                         alignSelf: 'center',
//                         width: 240,
//                         height: 240,
//                         marginVertical: 20,
//                         borderRadius: 40,
//                       }}
//                     />
//                   </Saturate>
//                 </Contrast>
//               </Brightness>

//               <Imgfilter
//                 Filtername={'Saturation'}
//                 RangeValue={saturate}
//                 onPress={() => setFilterstate(0)}
//                 value={Satr}
//                 onValueChange={v => setSaturate(v)}
//               />
//             </View>
//           )}
//           {filterstate === 0 && (
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-evenly',
//                 marginTop: 40,
//               }}>
//               <TouchableOpacity
//                 onPress={() => {
//                   setFilterstate(1);
//                 }}>
//                 <Image
//                   source={require('../../assets/icons/brightness.png')}
//                   style={{
//                     height: 24,
//                     width: 24,
//                     resizeMode: 'contain',
//                     alignSelf: 'center',
//                     tintColor: ThemeMode.selectedTheme
//                       ? theme.colors.darkGrey
//                       : theme.colors.primary,
//                   }}
//                 />
//                 <TextFormatted
//                   style={{
//                     fontSize: 14,
//                     fontWeight: '600',
//                     color: ThemeMode.selectedTheme
//                       ? theme.colors.darkGrey
//                       : theme.colors.primary,
//                     marginTop: 11,
//                   }}>
//                   Brightness
//                 </TextFormatted>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 onPress={() => {
//                   setFilterstate(2);
//                 }}>
//                 <Image
//                   source={require('../../assets/icons/contrast.png')}
//                   style={{
//                     height: 24,
//                     width: 24,
//                     resizeMode: 'contain',
//                     alignSelf: 'center',
//                     tintColor: ThemeMode.selectedTheme
//                       ? theme.colors.darkGrey
//                       : theme.colors.primary,
//                   }}
//                 />
//                 <TextFormatted
//                   style={{
//                     fontSize: 14,
//                     fontWeight: '600',
//                     color: ThemeMode.selectedTheme
//                       ? theme.colors.darkGrey
//                       : theme.colors.primary,
//                     marginTop: 11,
//                   }}>
//                   Contrast
//                 </TextFormatted>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => {
//                   setFilterstate(3);
//                 }}>
//                 <Image
//                   source={require('../../assets/icons/saturationIco.png')}
//                   style={{
//                     height: 24,
//                     width: 24,
//                     resizeMode: 'contain',
//                     alignSelf: 'center',
//                     tintColor: ThemeMode.selectedTheme
//                       ? theme.colors.darkGrey
//                       : theme.colors.primary,
//                   }}
//                 />
//                 <TextFormatted
//                   style={{
//                     fontSize: 14,
//                     fontWeight: '600',
//                     color: ThemeMode.selectedTheme
//                       ? theme.colors.darkGrey
//                       : theme.colors.primary,
//                     marginTop: 10,
//                   }}>
//                   Saturation
//                 </TextFormatted>
//               </TouchableOpacity>
//             </View>
//           )}

//           <View
import {View, Text} from 'react-native';
import React from 'react';

export default function InstagreamFiter() {
  return (
    <View>
      <Text>InstagreamFiter</Text>
    </View>
  );
}
