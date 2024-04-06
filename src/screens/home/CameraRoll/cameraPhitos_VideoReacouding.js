// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity,
// } from 'react-native';
// import {Camera} from 'react-native-vision-camera';
// import {color} from '../../../theme';
// import {CustomStatusbar} from '../../../components';
// import svg from '../../../assets/svgIndex';
// import streaksVideoController from './streaksVideo.controller';
// import style from './streaksVideo.style';
 
// const StreaksVideo: React.FC = () => {
//   const {
//     goBack,
//     device,
//     onUpload,
//     ref,
//     onImageCapture,
//     stopRecording,
//     recordVideo,
//     onFlipCameraPressed,
//     onDoubleTap,
//     remainingTime,
//     recording,
//     startRecording,
//   } = streaksVideoController();
//   return (
//     <View style={style.container}>
//       <CustomStatusbar
//         backgroundColor={color.transparent}
//         containerStyle={style.statusBarStyle}
//         translucent={true}
//         barStyle="light-content"
//       />

//       {device ? (
//         <View style={style.container}>
//           <Camera
//             ref={ref}
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={true}
//             photo={true}
//             video={true}
//             audio={true}
//             enableZoomGesture={true}
//             enablePortraitEffectsMatteDelivery={true}
//           />
//           <View style={style.overlay}>
//             <View style={style.header}>
//               <TouchableOpacity
//                 activeOpacity={0.7}
//                 style={style.close}
//                 onPress={goBack}>
//                 <svg.close />
//               </TouchableOpacity>
//             </View>
//             {!recording ? (
//               <TouchableOpacity onPress={startRecording}>
//                 <Text style={{color: 'red', alignItems: 'center'}}>
//                   {remainingTime} seconds
//                 </Text>
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity onPress={stopRecording}>
//                 {/ <Text>Stop Recording</Text> /}
//               </TouchableOpacity>
//             )}
//             <View style={style.captureContainer}>
//               <TouchableOpacity
//                 style={style.capture}
//                 onPress={() => {
//                   onImageCapture();
//                 }}
//                 onLongPress={() => {
//                   recordVideo();
//                 }}
//                 onPressOut={stopRecording}
//                 activeOpacity={0.7}>
//                 <svg.capture />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       ) : (
//         <View style={style.spinner} onTouchStart={onUpload}>
//           <ActivityIndicator size="large" />
//         </View>
//       )}
//     </View>
//   );
// };

// export default StreaksVideo;




// import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
// import {useCallback, useEffect, useRef, useState} from 'react';
// import {Platform, Alert} from 'react-native';
// import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';
// import {useCameraDevices} from 'react-native-vision-camera';

// import {
//   AuthNavigationProps,
//   AuthParams,
// } from '../../../navigation/stacks/authStack';
// import {Log} from '../../../utility/log';
// import {StreaksVideoProps} from './streaksVideo.interface';

// const streaksVideoController = (): StreaksVideoProps => {
//   const navigation = useNavigation<AuthNavigationProps>();
//   const devices = useCameraDevices();
//   const ref = useRef<any>();
//   const device = devices.back;
//   const [flash, setFlash] = useState<boolean>(false);
//   const [remainingTime, setRemainingTime] = useState(30); // Initial time set to 30 seconds
//   const [recording, setRecording] = useState(false);
//   const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>(
//     'back',
//   );

//   useEffect(() => {
//     let timer;
//     if (recording && remainingTime > 0) {
//       timer = setInterval(() => {
//         setRemainingTime(prevTime => prevTime - 1);
//       }, 1000);
//     } else if (remainingTime === 0) {
//       stopRecording();
//     }

//     return () => clearInterval(timer);
//   }, [recording, remainingTime]);

//   const startRecording = async () => {
//     try {
//       setRecording(true);
//       setRemainingTime(30); // Reset remaining time
//       const timer = setInterval(() => {
//         setRemainingTime(prevTime => {
//           if (prevTime > 0) {
//             return prevTime - 1;
//           } else {
//             clearInterval(timer);
//             stopRecording(); // Stop recording when time runs out
//             return 0;
//           }
//         });
//       }, 1000);

//       await ref.current.startRecording({
//         onRecordingFinished: (video: any) => {
//           clearInterval(timer); // Clear the timer when recording finishes
//           let temp = [
//             {
//               node: {
//                 location: null,
//                 modificationTimestamp: 1707299826,
//                 group_name: 'Camera',
//                 image: {
//                   extension: 'mp4',
//                   fileSize: null,
//                   orientation: null,
//                   filename: null,
//                   playableDuration: null,
//                   height: null,
//                   width: null,
//                   uri: `${video?.path}`,
//                 },
//                 subTypes: [],
//                 timestamp: 1707299826,
//                 type: 'video/mp4',
//               },
//             },
//           ];
//           navigation.navigate('streaksChat', {
//             videoType: temp,
//             userItem: route?.params?.newRoute,
//             modalShow: true,
//           });
//         },
//         onRecordingError: (error: any) => Log('camera recording error', error),
//       });
//     } catch (error) {
//       Log('Error while recording video:', error);
//       Alert.alert('Error', 'Error while recording video. Please try again.');
//     }
//   };

//   const stopRecording = async () => {
//     setRecording(false);
//     await ref.current.stopRecording();
//   };

//   const route: any = useRoute<RouteProp<AuthParams, 'streaksVideo'>>();

//   const onFlipCameraPressed = useCallback(() => {
//     setCameraPosition(p => (p === 'back' ? 'front' : 'back'));
//   }, []);

//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       check(PERMISSIONS.ANDROID.CAMERA).then(result => {
//         if (result === RESULTS.DENIED) {
//           request(PERMISSIONS.ANDROID.CAMERA);
//         }
//       });
//       check(PERMISSIONS.ANDROID.RECORD_AUDIO).then(result => {
//         if (result === RESULTS.DENIED) {
//           request(PERMISSIONS.ANDROID.RECORD_AUDIO);
//         }
//       });
//     } else if (Platform.OS === 'ios') {
//       check(PERMISSIONS.IOS.CAMERA).then(result => {
//         if (result === RESULTS.DENIED) {
//           request(PERMISSIONS.IOS.CAMERA);
//         }
//       });
//     }
//   }, []);

//   const goBack = (): void => {
//     navigation.goBack();
//   };

//   const onImageCapture = async () => {
//     // Capture image logic
//   };

//   const onUpload = (): void => {
//     navigation.navigate('uploadPost');
//   };

//   return {
//     goBack,
//     device,
//     onUpload,
//     ref,
//     onImageCapture,
//     stopRecording,
//     flash,
//     setFlash,
//     recordVideo: startRecording,
//     cameraPosition,
//     onFlipCameraPressed,
//     remainingTime,
//     recording,
//     startRecording,
//   };
// };

// export default streaksVideoController;

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity,
// } from 'react-native';
// import {Camera} from 'react-native-vision-camera';
// import {color} from '../../../theme';
// import {CustomStatusbar} from '../../../components';
// import svg from '../../../assets/svgIndex';
// import streaksVideoController from './streaksVideo.controller';
// import style from './streaksVideo.style';
// import {settings} from '../reelUpload/reelUpload.const';

// const StreaksVideo: React.FC = () => {
//   const {
//     goBack,
//     device,
//     onUpload,
//     ref,
//     onImageCapture,
//     stopRecording,
//     recordVideo,
//     onFlipCameraPressed,
//     onDoubleTap,
//     remainingTime,
//     recording,
//     startRecording,
//   } = streaksVideoController();
//   return (
//     <View style={style.container}>
//       <CustomStatusbar
//         backgroundColor={color.transparent}
//         containerStyle={style.statusBarStyle}
//         translucent={true}
//         barStyle="light-content"
//       />

//       {device ? (
//         <View style={style.container}>
//           <Camera
//             ref={ref}
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={true}
//             photo={true}
//             video={true}
//             audio={true}
//             enableZoomGesture={true}
//             enablePortraitEffectsMatteDelivery={true}
//           />
//           <View style={style.overlay}>
//             <View style={style.header}>
//               <TouchableOpacity
//                 activeOpacity={0.7}
//                 style={style.close}
//                 onPress={goBack}>
//                 <svg.close />
//               </TouchableOpacity>
//             </View>
//             {!recording ? (
//               <TouchableOpacity onPress={startRecording}>
//                 <Text style={{color: 'red', alignItems: 'center'}}>
//                   {remainingTime} seconds
//                 </Text>
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity onPress={stopRecording}>
//                 {/ <Text>Stop Recording</Text> /}
//               </TouchableOpacity>
//             )}
//             <View style={style.captureContainer}>
//               <TouchableOpacity
//                 style={style.capture}
//                 onPress={() => {
//                   onImageCapture();
//                 }}
//                 onLongPress={() => {
//                   recordVideo();
//                 }}
//                 onPressOut={stopRecording}
//                 activeOpacity={0.7}>
//                 <svg.capture />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       ) : (
//         <View style={style.spinner} onTouchStart={onUpload}>
//           <ActivityIndicator size="large" />
//         </View>
//       )}
//     </View>
//   );
// };

// export default StreaksVideo;

// import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
// import {useCallback, useEffect, useRef, useState} from 'react';
// import {Platform, Alert} from 'react-native';
// import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';
// import {useCameraDevices} from 'react-native-vision-camera';

// import {
//   AuthNavigationProps,
//   AuthParams,
// } from '../../../navigation/stacks/authStack';
// import {Log} from '../../../utility/log';
// import {StreaksVideoProps} from './streaksVideo.interface';

// const streaksVideoController = (): StreaksVideoProps => {
//   const navigation = useNavigation<AuthNavigationProps>();
//   const devices = useCameraDevices();
//   const ref = useRef<any>();
//   const device = devices.back;
//   const [flash, setFlash] = useState<boolean>(false);
//   const [remainingTime, setRemainingTime] = useState(30); // Initial time set to 30 seconds
//   const [recording, setRecording] = useState(false);
//   const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>(
//     'back',
//   );

//   useEffect(() => {
//     let timer;
//     if (recording && remainingTime > 0) {
//       timer = setInterval(() => {
//         setRemainingTime(prevTime => prevTime - 1);
//       }, 1000);
//     } else if (remainingTime === 0) {
//       stopRecording();
//     }

//     return () => clearInterval(timer);
//   }, [recording, remainingTime]);

//   const startRecording = async () => {
//     try {
//       setRecording(true);
//       setRemainingTime(30); // Reset remaining time
//       const timer = setInterval(() => {
//         setRemainingTime(prevTime => {
//           if (prevTime > 0) {
//             return prevTime - 1;
//           } else {
//             clearInterval(timer);
//             stopRecording(); // Stop recording when time runs out
//             return 0;
//           }
//         });
//       }, 1000);

//       await ref.current.startRecording({
//         onRecordingFinished: (video: any) => {
//           clearInterval(timer); // Clear the timer when recording finishes
//           let temp = [
//             {
//               node: {
//                 location: null,
//                 modificationTimestamp: 1707299826,
//                 group_name: 'Camera',
//                 image: {
//                   extension: 'mp4',
//                   fileSize: null,
//                   orientation: null,
//                   filename: null,
//                   playableDuration: null,
//                   height: null,
//                   width: null,
//                   uri: `${video?.path}`,
//                 },
//                 subTypes: [],
//                 timestamp: 1707299826,
//                 type: 'video/mp4',
//               },
//             },
//           ];
//           navigation.navigate('streaksChat', {
//             videoType: temp,
//             userItem: route?.params?.newRoute,
//             modalShow: true,
//           });
//         },
//         onRecordingError: (error: any) => Log('camera recording error', error),
//       });
//     } catch (error) {
//       Log('Error while recording video:', error);
//       Alert.alert('Error', 'Error while recording video. Please try again.');
//     }
//   };

//   const stopRecording = async () => {
//     setRecording(false);
//     await ref.current.stopRecording();
//   };

//   const route: any = useRoute<RouteProp<AuthParams, 'streaksVideo'>>();

//   const onFlipCameraPressed = useCallback(() => {
//     setCameraPosition(p => (p === 'back' ? 'front' : 'back'));
//   }, []);

//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       check(PERMISSIONS.ANDROID.CAMERA).then(result => {
//         if (result === RESULTS.DENIED) {
//           request(PERMISSIONS.ANDROID.CAMERA);
//         }
//       });
//       check(PERMISSIONS.ANDROID.RECORD_AUDIO).then(result => {
//         if (result === RESULTS.DENIED) {
//           request(PERMISSIONS.ANDROID.RECORD_AUDIO);
//         }
//       });
//     } else if (Platform.OS === 'ios') {
//       check(PERMISSIONS.IOS.CAMERA).then(result => {
//         if (result === RESULTS.DENIED) {
//           request(PERMISSIONS.IOS.CAMERA);
//         }
//       });
//     }
//   }, []);

//   const goBack = (): void => {
//     navigation.goBack();
//   };

//   const onImageCapture = async () => {
//     // Capture image logic
//   };

//   const onUpload = (): void => {
//     navigation.navigate('uploadPost');
//   };

//   return {
//     goBack,
//     device,
//     onUpload,
//     ref,
//     onImageCapture,
//     stopRecording,
//     flash,
//     setFlash,
//     recordVideo: startRecording,
//     cameraPosition,
//     onFlipCameraPressed,
//     remainingTime,
//     recording,
//     startRecording,
//   };
// };

// export default streaksVideoController;

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity,
// } from 'react-native';
// import {Camera} from 'react-native-vision-camera';
// import {color} from '../../../theme';
// import {CustomStatusbar} from '../../../components';
// import svg from '../../../assets/svgIndex';
// import streaksVideoController from './streaksVideo.controller';
// import style from './streaksVideo.style';
// import {settings} from '../reelUpload/reelUpload.const';

// const StreaksVideo: React.FC = () => {
//   const {
//     goBack,
//     device,
//     onUpload,
//     ref,
//     onImageCapture,
//     stopRecording,
//     recordVideo,
//     onFlipCameraPressed,
//     onDoubleTap,
//     remainingTime,
//     recording,
//     startRecording,
//   } = streaksVideoController();
//   return (
//     <View style={style.container}>
//       <CustomStatusbar
//         backgroundColor={color.transparent}
//         containerStyle={style.statusBarStyle}
//         translucent={true}
//         barStyle="light-content"
//       />

//       {device ? (
//         <View style={style.container}>
//           <Camera
//             ref={ref}
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={true}
//             photo={true}
//             video={true}
//             audio={true}
//             enableZoomGesture={true}
//             enablePortraitEffectsMatteDelivery={true}
//           />
//           <View style={style.overlay}>
//             <View style={style.header}>
//               <TouchableOpacity
//                 activeOpacity={0.7}
//                 style={style.close}
//                 onPress={goBack}>
//                 <svg.close />
//               </TouchableOpacity>
//             </View>
//             {!recording ? (
//               <TouchableOpacity onPress={startRecording}>
//                 <Text style={{color: 'red', alignItems: 'center'}}>
//                   {remainingTime} seconds
//                 </Text>
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity onPress={stopRecording}>
//                 {/ <Text>Stop Recording</Text> /}
//               </TouchableOpacity>
//             )}
//             <View style={style.captureContainer}>
//               <TouchableOpacity
//                 style={style.capture}
//                 onPress={() => {
//                   onImageCapture();
//                 }}
//                 onLongPress={() => {
//                   recordVideo();
//                 }}
//                 onPressOut={stopRecording}
//                 activeOpacity={0.7}>
//                 <svg.capture />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       ) : (
//         <View style={style.spinner} onTouchStart={onUpload}>
//           <ActivityIndicator size="large" />
//         </View>
//       )}
//     </View>
//   );
// };

// export default StreaksVideo;

