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

// Send your api base64Image pass the api
  // const handleCapture = async () => {
  //   const base64Image: any = await shotRef?.current.capture();
  //   console.log('base64Image image', base64Image);
  //   setTimeout(() => {
  //     setAllFilter(base64Image);
  //   }, 1000);
  // };

  // const handleCapture = async () => {
  //   try {
  //     const base64Image = await shotRef?.current.capture();
  //     console.log('base64Image image', base64Image);
  //     if (base64Image) {
  //       setAllFilter(base64Image);
  //       console.log('filter image');
  //     } else {
  //       console.error('setAllFilter is not defined.');
  //     }
  //   } catch (error) {
  //     console.error('Capture Error:', error);
  //   }
  // };

  // import React, {useContext, useRef, useState} from 'react';
  // import {
  //   FlatList,
  //   Image,
  //   ImageBackground,
  //   Text,
  //   TouchableOpacity,
  //   View,
  //   Dimensions,
  // } from 'react-native';
  // import Video from 'react-native-video';
  // import {default as SvgIndex} from '../../../assets/svgIndex';
  // import {CustomStatusbar, Header, Spinner} from '../../../components';
  // import {LocalizationContext} from '../../../i18n/LocalizationContext';
  // import setTimerController from './setTimer.controller';
  // import style from './setTimer.style';
  // import {ImageFilter} from 'react-native-image-filter-kit';
  // import imageIndex from '../../../assets/imageIndex';
  // import {color} from '../../../theme';
  // import {FILTERS} from './setTimer.const';
  // import {
  //   Brightness,
  //   Contrast,
  //   Saturate,
  //   HueRotate,
  //   LuminanceToAlpha,
  //   Invert,
  //   Grayscale,
  //   Nightvision,
  //   Warm,
  //   Temperature,
  //   Tint,
  //   Threshold,
  //   Technicolor,
  //   Polaroid,
  //   ToBGR,
  //   Kodachrome,
  //   Browni,
  //   Vintage,
  //   Night,
  //   Predator,
  //   Lsd,
  //   ColorTone,
  //   Protanomaly,
  //   Deuteranomaly,
  //   Tritanomaly,
  //   Protanopia,
  //   Deuteranopia,
  //   Tritanopia,
  //   Achromatopsia,
  //   Achromatomaly,
  // } from 'react-native-color-matrix-image-filters';
  // import ViewShot from 'react-native-view-shot';
  
  // const SetTimer: React.FC = () => {
  //   const context = useContext(LocalizationContext);
  //   const [selectedFilterIndex, setIndex] = useState(0);
  //   const [currentImageIndex, setCurrentImageIndex] = useState<{
  //     currentPage: number;
  //   }>({
  //     currentPage: 0,
  //   });
  
  //   const {
  //     goBack,
  //     onNext,
  //     route,
  //     storyImage,
  //     onPost,
  //     changeVideoStatus,
  //     SetImage,
  //     filterImage,
  //     isLoading,
  //     setStoryImage,
  //     trimVideo,
  //     setTrimVideo,
  //     shotRef,
  //     currentFilter,
  //     setCurrentFilter,
  //   } = setTimerController();
  //   const filters = [
  //     {component: Brightness, amount: 3},
  //     {component: Contrast, amount: 5},
  //     {component: Saturate, amount: 4},
  //     {component: HueRotate, degree: 90},
  //     {component: LuminanceToAlpha},
  //     {component: Invert},
  //     {component: Grayscale},
  //     {component: Nightvision},
  //     {component: Warm},
  //     {component: Temperature, amount: 1000},
  //     {component: Tint, amount: 0.5},
  //     {component: Threshold, amount: 9},
  //     {component: Technicolor},
  //     {component: Polaroid},
  //     {component: ToBGR},
  //     {component: Kodachrome},
  //     {component: Browni},
  //     {component: Vintage},
  //     {component: Night},
  //     {component: Predator},
  //     {component: Lsd},
  //     {
  //       component: ColorTone,
  //       desaturation: 0,
  //       toned: 0,
  //       lightColor: color.darkPink,
  //       darkColor: '#0000FF',
  //     },
  //     {component: Protanomaly},
  //     {component: Deuteranomaly},
  //     {component: Tritanomaly},
  //     {component: Protanopia},
  //     {component: Deuteranopia},
  //     {component: Tritanopia},
  //     {component: Achromatopsia},
  //     {component: Achromatomaly},
  //   ];
  //   const handleImagePress = () => {
  //     setCurrentFilter((prevFilter: any) => (prevFilter + 1) % filters?.length);
  //   };
  
  //   const onSelectFilter = (selectedIndex: any) => {
  //     setIndex(selectedIndex);
  //   };
  //   const extractedUri = useRef(
  //     route?.params?.postData[currentImageIndex.currentPage]?.node?.image?.uri,
  //   );
  //   const SelectedFilterComponent = FILTERS[selectedFilterIndex].filterComponent;
  //   const onExtractImage = ({nativeEvent}: any) => {
  //     SetImage(nativeEvent.uri);
  //     extractedUri.current = nativeEvent.uri;
  //   };
  
  //   const renderFilteredImageView = () => {
  //     const filter = filters[currentFilter];
  //     return (
  //       <View>
  //         <ViewShot
  //           ref={shotRef}
  //           style={{alignSelf: 'center'}}
  //           options={{
  //             fileName: 'UserProfile',
  //             format: 'jpg',
  //             quality: 0.9,
  //           }}>
  //           <filter.component
  //             amount={filter.degree || filter.desaturation}
  //             desaturation={filter.desaturation}
  //             toned={filter.toned}
  //             lightColor={filter.lightColor}
  //             darkColor={filter.darkColor}>
  //             <ImageBackground
  //               resizeMode="cover"
  //               source={{
  //                 uri:
  //                   storyImage ??
  //                   route?.params?.postData[0]?.node?.image?.uri ??
  //                   route?.params?.postData,
  //               }}
  //               style={{width: 500, height: 500}}></ImageBackground>
  //           </filter.component>
  //         </ViewShot>
  //       </View>
  //     );
  //   };
  
  //   return (
  //     <View style={style.container}>
  //       <ImageBackground
  //         source={imageIndex.splashBackground}
  //         style={style.imageBackgroundImage}>
  //         <CustomStatusbar
  //           containerStyle={{height: 0}}
  //           translucent={true}
  //           backgroundColor={color.transparent}
  //           barStyle="light-content"
  //         />
  //         <Header
  //           leftIcon={SvgIndex.backArrow}
  //           onLeftIcon={goBack}
  //           rightText={
  //             context?.postType == context.translations.headerTitle.Story
  //               ? 'Post'
  //               : 'Next'
  //           }
  //           onRightText={
  //             context?.postType == context.translations.headerTitle.Story
  //               ? onPost
  //               : onNext
  //           }
  //         />
  //         {context?.postType == 'Video' ? (
  //           <TouchableOpacity
  //             style={{flex: 1}}
  //             onPressIn={() => changeVideoStatus('')}
  //             onPressOut={() => changeVideoStatus('')}
  //             activeOpacity={1}>
  //             {storyImage?.split('.')?.pop()?.split(/\#|\?/)[0] == 'mp4' ? (
  //               <Video
  //                 repeat
  //                 poster={
  //                   route?.params?.postData[0]?.node?.image?.uri ??
  //                   route?.params?.postData
  //                 }
  //                 resizeMode="cover"
  //                 playInBackground={false}
  //                 progressUpdateInterval={1000}
  //                 source={{
  //                   uri:
  //                     route?.params?.postData[0]?.node?.image?.uri ??
  //                     route?.params?.postData,
  //                 }}
  //                 style={style.videoContainer}
  //               />
  //             ) : (
  //               <>
  //                 {typeof route?.params?.postData == 'string' && (
  //                   <SelectedFilterComponent
  //                     onExtractImage={onExtractImage}
  //                     extractImageEnabled={true}
  //                     image={
  //                       <Image
  //                         source={{
  //                           uri:
  //                             storyImage ??
  //                             route?.params?.postData[0]?.node?.image?.uri ??
  //                             route?.params?.postData,
  //                         }}
  //                         style={[style.storyImage]}
  //                       />
  //                     }
  //                   />
  //                 )}
  //               </>
  //             )}
  //           </TouchableOpacity>
  //         ) : context?.postType == context.translations.headerTitle.Story ? (
  //           <>
  //             {
  //               storyImage?.split('.')?.pop()?.split(/\#|\?/)[0] == 'mp4' ||
  //               storyImage?.split('.')?.pop()?.split(/\#|\?/)[0] == 'mov' ? (
  //                 <Video
  //                   repeat
  //                   poster={
  //                     route?.params?.postData[0]?.node?.image?.uri ??
  //                     route?.params?.postData
  //                   }
  //                   resizeMode="cover"
  //                   playInBackground={false}
  //                   progressUpdateInterval={1000}
  //                   source={{
  //                     uri:
  //                       route?.params?.postData[0]?.node?.image?.uri ??
  //                       route?.params?.postData,
  //                   }}
  //                   style={{
  //                     width: '100%',
  //                     height: '100%',
  //                     zIndex: 1,
  //                   }}
  //                   muted={false}
  //                 />
  //               ) : (
  //                 <>
  //                   {currentFilter == 0 ? (
  //                     <TouchableOpacity
  //                       activeOpacity={1}
  //                       style={{flex: 1, justifyContent: 'center'}}
  //                       onPress={handleImagePress}>
  //                       <SelectedFilterComponent
  //                         onExtractImage={onExtractImage}
  //                         extractImageEnabled={true}
  //                         image={
  //                           <Image
  //                             source={{
  //                               uri:
  //                                 storyImage ??
  //                                 route?.params?.postData[0]?.node?.image?.uri ??
  //                                 route?.params?.postData,
  //                             }}
  //                             resizeMode="cover"
  //                             style={{
  //                               width: 500,
  //                               height: 500,
  //                             }}
  //                           />
  //                         }
  //                       />
  //                     </TouchableOpacity>
  //                   ) : (
  //                     <TouchableOpacity
  //                       activeOpacity={1}
  //                       style={{flex: 1, justifyContent: 'center'}}
  //                       onPress={handleImagePress}>
  //                       {renderFilteredImageView()}
  //                     </TouchableOpacity>
  //                   )}
  //                 </>
  //               )
  //               // <>
  //               //   <TouchableOpacity onPress={() => onEdit()} style={style.editIcon}>
  //               //     <SvgIndex.edit />
  //               //   </TouchableOpacity>
  //               /* <TouchableOpacity
  //                 onPress={() => setModalVisible(true)}
  //                 style={style.mentionIcon}>
  //                 <SvgIndex.atSign />
  //               </TouchableOpacity> */
  //               // </>
  //             }
  //           </>
  //         ) : typeof route?.params?.postData == 'string' &&
  //           context?.postType == context.translations.headerTitle.Post ? (
  //           <SelectedFilterComponent
  //             onExtractImage={onExtractImage}
  //             extractImageEnabled={true}
  //             image={
  //               route?.params?.postData[0]?.node?.image?.uri?.includes('mp4') ? (
  //                 <Video
  //                   source={{
  //                     uri:
  //                       storyImage ??
  //                       route?.params?.postData[0]?.node?.image?.uri ??
  //                       route?.params?.postData,
  //                   }}
  //                   style={style.storyImage}
  //                   playInBackground={false}
  //                   progressUpdateInterval={1000}
  //                   repeat
  //                 />
  //               ) : (
  //                 <Image
  //                   source={{
  //                     uri:
  //                       storyImage ??
  //                       route?.params?.postData[0]?.node?.image?.uri ??
  //                       route?.params?.postData,
  //                   }}
  //                   resizeMode="cover"
  //                   style={[style.storyImage]}
  //                 />
  //               )
  //             }
  //           />
  //         ) : (
  //           <FlatList
  //             contentContainerStyle={[style.flatlist]}
  //             data={filterImage}
  //             horizontal={true}
  //             showsHorizontalScrollIndicator={false}
  //             pagingEnabled
  //             renderItem={({item, index}) => {
  //               return (
  //                 <View style={style.imgView} key={index}>
  //                   {item?.node?.image?.uri?.includes('mp4') ? (
  //                     <Video
  //                       source={{
  //                         uri: String(item?.node?.image?.uri),
  //                       }}
  //                       style={style.multiImagePost}
  //                       playInBackground={false}
  //                       progressUpdateInterval={1000}
  //                     />
  //                   ) : (
  //                     <SelectedFilterComponent
  //                       onExtractImage={onExtractImage}
  //                       extractImageEnabled={true}
  //                       image={
  //                         <Image
  //                           source={{uri: String(item?.node?.image?.uri)}}
  //                           style={style.multiImagePost}
  //                           resizeMode="cover"
  //                         />
  //                       }
  //                     />
  //                   )}
  //                 </View>
  //               );
  //             }}
  //           />
  //         )}
  //       </ImageBackground>
  //       <View>
  //         <FlatList
  //           data={filters}
  //           keyExtractor={(item, index) => index.toString()}
  //           showsHorizontalScrollIndicator={false}
  //           horizontal
  //           style={{backgroundColor: '#01061C'}}
  //           renderItem={({item, index}) => (
  //             <TouchableOpacity onPress={() => setCurrentFilter(index)}>
  //               <ViewShot
  //                 ref={shotRef}
  //                 style={{
  //                   marginHorizontal: 5,
  //                   alignItems: 'center',
  //                 }}
  //                 options={{
  //                   fileName: `UserProfile_${index}`,
  //                   format: 'jpg',
  //                   quality: 0.9,
  //                 }}>
  //                 <item.component
  //                   amount={item.amount || item.degree}
  //                   desaturation={item.desaturation}
  //                   toned={item.toned}
  //                   lightColor={item.lightColor}
  //                   darkColor={item.darkColor}>
  //                   <ImageBackground
  //                     resizeMode="cover"
  //                     source={{
  //                       uri:
  //                         storyImage ??
  //                         route?.params?.postData[0]?.node?.image?.uri ??
  //                         route?.params?.postData,
  //                     }}
  //                     style={{
  //                       width: 70,
  //                       height: 70,
  //                     }}></ImageBackground>
  //                 </item.component>
  //               </ViewShot>
  //             </TouchableOpacity>
  //           )}
  //         />
  //       </View>
  //     </View>
  //     /* <MultipleSelection
  //         data={followers}
  //         visible={modalVisible}
  //         onRequestClose={() => setModalVisible(false)}
  //         onSelection={data => {
  //           setMentionPeople(data);
  //         }}
  //         value={mentionPeople}
  //         label={'Tag people'}
  //       /> */
  //   );
  // };
  
  // export default SetTimer;
  
  


//   import React, {useRef, useState} from 'react';
// import {
//   View,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Button,
//   StatusBar,
//   TextInput,
//   ImageBackground,
//   TouchableWithoutFeedback,
//   Keyboard,
//   Dimensions,
// } from 'react-native';
// import Draggable from 'react-native-draggable';
// import {
//   Brightness,
//   Contrast,
//   Saturate,
//   HueRotate,
//   LuminanceToAlpha,
//   Invert,
//   Grayscale,
//   Nightvision,
//   Warm,
//   Temperature,
//   Tint,
//   Threshold,
//   Technicolor,
//   Polaroid,
//   ToBGR,
//   Kodachrome,
//   Browni,
//   Vintage,
//   Night,
//   Predator,
//   Lsd,
//   ColorTone,
//   Protanomaly,
//   Deuteranomaly,
//   Tritanomaly,
//   Protanopia,
//   Deuteranopia,
//   Tritanopia,
//   Achromatopsia,
//   Achromatomaly,
// } from 'react-native-color-matrix-image-filters';
// import ImagePicker from 'react-native-image-crop-picker';
// import ViewShot from 'react-native-view-shot';
// import {Text} from 'react-native';

// const App = () => {
//   const [selectedImage, setSelectedImage] = useState('');
//   const [currentFilter, setCurrentFilter] = useState(0);
//   const [filerimg, setFilerimg] = useState('');
//   const [showFilterImage, setShowFilterImage] = useState(false);
//   const [text, setText] = useState('');
//   const {width, height} = Dimensions.get('screen');
//   const [initialX, setInitialX] = useState(-30); // Set to center horizontally
//   const [initialY, setInitialY] = useState(height / 2.5); // Set to center vertically
//   const [inputEdit, setInputEdit] = useState(false);
//   const shotRef = useRef();
//   const inputRef = useRef();

//   const pickImage = async () => {
//     try {
//       const image = await ImagePicker.openPicker({
//         mediaType: 'photo',
//         width: 300,
//         height: 400,
//       });

//       const imageData = {
//         name: 'input_img.jpeg',
//         uri: image.path,
//         type: 'image/jpeg',
//       };

//       setSelectedImage(imageData);
//       setFilerimg('');
//     } catch (error) {
//       console.log('Image picking error:', error);
//     }
//   };

//   const handleImagePress = () => {
//     Keyboard.dismiss();
//     setCurrentFilter(prevFilter => (prevFilter + 1) % filters.length);
//   };

//   const Snapshot = () => {
//     shotRef.current?.capture().then(uri => {
//       setFilerimg(uri);
//       setShowFilterImage(true);
//     });
//   };
//   const handleScreenPress = (event: any) => {
//     const {locationX, locationY} = event.nativeEvent;
//     setInitialX(locationX);
//     setInitialY(locationY);
//   };

//   const filters = [
//     {component: Brightness, amount: 3},
//     {component: Contrast, amount: 5},
//     {component: Saturate, amount: 4},
//     {component: HueRotate, degree: 90},
//     {component: LuminanceToAlpha},
//     {component: Invert},
//     {component: Grayscale},
//     {component: Nightvision},
//     {component: Warm},
//     {component: Temperature, amount: 1000},
//     {component: Tint, amount: 0.5},
//     {component: Threshold, amount: 9},
//     {component: Technicolor},
//     {component: Polaroid},
//     {component: ToBGR},
//     {component: Kodachrome},
//     {component: Browni},
//     {component: Vintage},
//     {component: Night},
//     {component: Predator},
//     {component: Lsd},
//     {
//       component: ColorTone,
//       desaturation: 0,
//       toned: 0,
//       lightColor: '#FF0000',
//       darkColor: '#0000FF',
//     },
//     {component: Protanomaly},
//     {component: Deuteranomaly},
//     {component: Tritanomaly},
//     {component: Protanopia},
//     {component: Deuteranopia},
//     {component: Tritanopia},
//     {component: Achromatopsia},
//     {component: Achromatomaly},
//   ];

//   const renderFilteredImageView = () => {
//     const filter = filters[currentFilter];

//     return (
//       <View>
//         <ViewShot
//           ref={shotRef}
//           style={{alignSelf: 'center', marginTop: 30}}
//           options={{
//             fileName: 'UserProfile',
//             format: 'jpg',
//             quality: 0.9,
//           }}>
//           {filter.amount !== undefined ? (
//             <filter.component amount={filter.amount}>
//               <ImageBackground
//                 resizeMode="cover"
//                 source={{uri: selectedImage?.uri}}
//                 style={styles.filteredImage}></ImageBackground>
//             </filter.component>
//           ) : (
//             <filter.component
//               amount={filter.degree || filter.desaturation}
//               desaturation={filter.desaturation}
//               toned={filter.toned}
//               lightColor={filter.lightColor}
//               darkColor={filter.darkColor}>
//               <ImageBackground
//                 resizeMode="cover"
//                 source={{uri: selectedImage?.uri}}
//                 style={styles.filteredImage}></ImageBackground>
//             </filter.component>
//           )}
//         </ViewShot>
//       </View>
//     );
//   };

//   return (
//     <TouchableWithoutFeedback style={{zIndex: 0}} onPress={Keyboard.dismiss}>
//       <View style={styles.container}>
//         <StatusBar hidden={true} />
//         <View style={{zIndex: 1}}>
//           <Draggable
//             disabled={showFilterImage ? true : false}
//             onShortPressRelease={handleScreenPress}
//             x={initialX}
//             y={initialY}
//             renderSize={5}>
//             <TouchableWithoutFeedback>
//               <TextInput
//                 editable={text?.length >= 1 || inputEdit ? true : false}
//                 ref={inputRef}
//                 style={styles.textOverlay}
//                 value={text}
//                 multiline={true}
//                 maxLength={20}
//                 onChangeText={newText => setText(newText)}
//               />
//             </TouchableWithoutFeedback>
//           </Draggable>
//         </View>
//         {showFilterImage ? (
//           <View>
//             <Image
//               resizeMode="cover"
//               source={{uri: filerimg}}
//               style={styles.filteredImage}
//             />
//           </View>
//         ) : (
//           <View>
//             {selectedImage ? (
//               <View>
//                 <Text
//                   onPress={() => {
//                     setInputEdit(true);
//                     setTimeout(() => {
//                       inputRef?.current.focus();
//                     }, 0);
//                   }}
//                   style={styles.addTextStyle}>
//                   Aa
//                 </Text>
//                 <TouchableOpacity activeOpacity={1} onPress={handleImagePress}>
//                   {renderFilteredImageView()}
//                 </TouchableOpacity>
//               </View>
//             ) : (
//               <View style={styles.placeholder}>
//                 <Text>No image selected</Text>
//               </View>
//             )}

//             <View
//               style={{
//                 marginTop: 0,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//               <Button
//                 title={selectedImage ? 'View Filter Image' : 'Pick an image'}
//                 onPress={selectedImage ? Snapshot : pickImage}
//               />
//             </View>
//           </View>
//         )}
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   filteredImage: {
//     width: 500,
//     height: 500,
//   },
//   placeholder: {
//     width: 500,
//     height: 500,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'lightgray',
//   },
//   addTextStyle: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: '800',
//     backgroundColor: '#000000',
//     alignSelf: 'center',
//     borderRadius: 5,
//     padding: 5,
//     marginBottom: 10,
//   },
//   textOverlay: {
//     color: '#000',
//     fontSize: 30,
//     fontWeight: '800',
//     alignSelf: 'center',
//     width: 150,
//     marginHorizontal: 30,
//     textDecorationLine: 'underline',
//   },
// });

// export default App;


