// import React, {useContext, useState} from 'react';
// import {FlatList, View, Text, TouchableOpacity, Switch} from 'react-native';
// import svg from '../../../assets/svgIndex';
// import {CustomStatusbar, Header} from '../../../components';
// import SettingsCard from '../../../components/card/settingsCard/SettingsCard';
// import {settingsList} from './settings.const';
// import settingsController from './settings.controller';
// import style from './settings.style';
// import {useTheme} from '@react-navigation/native';
// import {themeContext} from '../../../theme/themeContext';
// import {
//   useAppDispatch,
//   useAppSelector,
// } from '../../../utility/functions/useReduxHooks';
// import {setDefaultTheme} from '../../../services/config/redux/userReducer/reducer';
// import {font} from '../../../theme';
// import LinearGradient from 'react-native-linear-gradient';

// const Settings: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const {colors, dark} = useTheme();
//   const {defaultColor, themeFlag} = useAppSelector(state => state.userReducer);
//   const {onMenu, goBack, onLogout} = settingsController();
//   const [colorList, setColorList] = useState([
//     {id: 1, color: ['#01061C', '#010728', '#0099FF']},
//     {id: 2, color: ['#FA01CA', '#010721', '#0099FF']},
//     {id: 3, color: ['#4A5182', '#FFFFFF', '#E14638']},
//     {id: 4, color: ['#39ECCF', '#008000', '#FFFFFF']},
//   ]);
//   const [isEnabled, setIsEnabled] = useState<boolean>(!dark ? false : true);
//   const {setDarkTheme, setLightTheme} = useContext(themeContext);
//   const toggleSwitch = () => {
//     setIsEnabled(!isEnabled);
//     if (dark) {
//       setLightTheme();
//     } else {
//       setDarkTheme();
//     }
//   };

//   const renderData = (item: string[], index: number) => {
//     return (
//       <TouchableOpacity
//         style={{
//           height: 60,
//           width: 60,
//           borderRadius: 30,
//           borderColor: defaultColor == item[0] ? '#fff' : item[0],
//           backgroundColor: item[0],
//           marginRight: 8,
//           borderWidth: 1,
//           opacity: dark ? 1 : 0.45,
//         }}
//         disabled={dark ? false : true}
//         onPress={() => {
//           dispatch(setDefaultTheme(item?.color));
//         }}>
//         {/* <LinearGradient
//           start={{x: 0, y: 0}}
//           end={{x: 0, y: 0.3}}
//           colors={defaultColor == item[0] ? ['#fff','gred'] : item[0]}></LinearGradient> */}
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={[style.container, {backgroundColor: colors.background}]}>
//       <CustomStatusbar
//         backgroundColor={colors.background}
//         barStyle={dark ? 'light-content' : 'dark-content'}
//       />
//       <Header
//         leftIcon={svg.backIcon}
//         title="Settings"
//         onLeftIcon={goBack}
//         containerStyle={{marginTop: 0}}
//         fill={colors.text}
//         titleContainer={{color: colors.text}}
//       />
//       <View
//         style={{
//           height: 50,
//           paddingHorizontal: 30,
//           justifyContent: 'center',
//           flexDirection: 'row',
//           alignItems: 'center',
//           marginVertical: 10,
//         }}>
//         <Text
//           style={{
//             color: colors.text,
//             fontSize: 17,
//             flex: 1,
//             fontFamily: font.poppinsRegular,
//           }}>
//           Dark/Light Mode
//         </Text>
//         <Switch
//           trackColor={{false: '#A8A8A8', true: 'blue'}}
//           thumbColor={'#fffff'}
//           ios_backgroundColor={'grey'}
//           onValueChange={() => toggleSwitch()}
//           value={isEnabled}
//         />
//       </View>
//       <View>
//         <FlatList
//           data={colorList}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={{
//             flexGrow: 1,
//             paddingLeft: 20,
//             paddingRight: 12,
//           }}
//           renderItem={({item, index}) => renderData(item, index)}
//         />
//       </View>
//       <View style={style.mainView}>
//         <FlatList
//           data={settingsList}
//           keyExtractor={item => item?.id?.toString()}
//           contentContainerStyle={{flexGrow: 1, paddingBottom: 80}}
//           renderItem={({item, index}) => (
//             <SettingsCard
//               key={index}
//               item={item}
//               index={index}
//               onPress={() => {
//                 if (item?.name === 'Logout') {
//                   onLogout();
//                 } else {
//                   onMenu(item?.navigateTo);
//                 }
//               }}
//             />
//           )}
//           showsVerticalScrollIndicator={false}
//         />
//       </View>
//     </View>
//   );
// };

// export default Settings;


