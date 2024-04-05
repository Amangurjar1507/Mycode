// 




  // import React, {Component} from 'react';
  // import {
  //   View,
  //   Text,
  //   Image,
  //   SafeAreaView,
  //   TouchableOpacity,
  //   StatusBar,
  //   StyleSheet,
  //   FlatList,
  //   Alert,
  //   Platform,
  //   Keyboard,
  //   InputAccessoryView,
  //   Button,
  //   ScrollView,
  //   Modal
  // } from 'react-native';
  //   import ImagePicker from 'react-native-image-crop-picker';
  // import Video from 'react-native-video';
  //       import {RNCamera} from 'react-native-camera';
  // import style from './styles'
  // class TagConnection extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       text: '',
  //       btn: false,
  //       uploadedFile: '',
  //       ImageData: [],
  //       socialList: [],
  //       index: '',
  //       loading: false,
  //       socialcircle: '',
  //       showsocialcircleError: '',
  //       showsocialcircleErrorText: '-',
  //       selectionError: '',
  //       selectionErrorText: '',
  //       selectedText: 'Social Circle',
  //       selectedId: '',
  //       isVisible: false,
  //       checkvalue: [],
  //       array: [],
  //       mainData: this.props.getConnectionList,
  //       modaltext: '',
  //       sel: [],
  //       searchText: '',
  //       selectImg: false,
  //       mainSelected: false,
  //       size: 0,
  //     };
  //   }

  //   openGalleryMain = () => {
  //     ImagePicker.openPicker({
  //       includeExif: true,
  //       width: 1200,
  //       height: 1500,
  //       freeStyleCropEnabled: true,
  //       compressImageQuality: 1,
  //       compressVideoPreset: '1280x720',
  //     }).then(res => {
  //       console.log('Image Data Select : ', res);
  //       let data = {
  //         uri: res.path,
  //         name: res.mime == 'video/mp4' ? 'video.mp4' : 'input_image.jpeg',
  //         type: res.mime,
  //       };
  //       this.setState({
  //         mainSelected: true,
  //         size: res.size,
  //       });
  //       this.setState({uploadedFile: res.path, ImageData: data});
  //     });
  //   };

  //   toggleFacing() {
  //     this.takePicture();
  //   }

  //   takePicture = async () => {
  //     if (this.camera && !this.state.takingPic) {
  //       let options = {
  //         quality: 0.2,
  //         fixOrientation: true,
  //         forceUpOrientation: true,
  //         // width : 100,
  //         // height : 100
  //       };
  //       this.setState({takingPic: true});
  //       try {
  //         const data = await this.camera.takePictureAsync(options);
  //         let img = {
  //           name: 'input_image.jpeg',
  //           uri: data.uri,
  //           type: 'image/jpeg',
  //         };
  //         console.log('=========>>>> dadav check  ', data);
  //         console.log('Data Is : ', img);
  //         this.setState({
  //           mainSelected: true,
  //           uploadedFile: data.uri,
  //           ImageData: img,
  //         });
  //       } catch (err) {
  //         console.log('Error Is : ', err);
  //         Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
  //         return;
  //       } finally {
  //         this.setState({takingPic: false});
  //       }
  //     }
  //   };

  //   takevideo = async () => {
  //     ImagePicker.openCamera({
  //       mediaType: 'video',
  //       width: 1200,
  //       height: 1500,
  //       freeStyleCropEnabled: true,
  //       compressImageQuality: 1,
  //       compressVideoPreset: '1280x720',
  //     }).then(image => {
  //       console.log('video select data', image.size);
  //       let img = {
  //         name: 'video.mp4',
  //         uri: image.path,
  //         type: image.mime,
  //       };
  //       console.log('Video Data Here In The POSt : ', img);
  //       // let img = {
  //       //     name: 'input_video.mp4',
  //       //     uri: image.path,
  //       //     type: image.mime
  //       // }
  //       this.setState({
  //         size: image.size,
  //         mainSelected: true,
  //         uploadedFile: image.path,
  //         ImageData: img,
  //       });
  //     });
  //   };

  //   openGallery = () => {
  //     this.setState({
  //       selectImg: true,
  //     });
  //   };

  //   selectBtn = () => {
  //     this.setState({btn: true});
  //   };
  //   toggleModel = () => {
  //     this.setState({isVisible: !this.state.isVisible, array: []});
  //   };
  //   onPressDone() {
  //     this.setState({isVisible: !this.state.isVisible});
  //   }

  //   inputAccessoryViewID = 'uniqueID';
  //   render() {
  //      return (
  //       <View >
         
  //         <ScrollView
  //           contentContainerStyle={{paddingBottom: 90}}
  //           showsVerticalScrollIndicator={false}>
  //           <View>
             
  //             <TouchableOpacity
  //               style={style.t_imageDivider}
  //               onPress={this.openGallery}>
  //               {this.state.uploadedFile != '' ? (
  //                 <>
  //                   {this.state.ImageData.type == 'video/mp4' ? (
  //                     <Video
  //                       paused={false}
  //                       ref={ref => {
  //                         this.video = ref;
  //                       }}
  //                       source={{uri: this.state.uploadedFile}}
  //                       style={{...StyleSheet.absoluteFill, borderRadius: 20}}
  //                       resizeMode="cover"
  //                       volume={0.7}
  //                       muted={true}
  //                     />
  //                   ) : (
  //                     <Text style={style.t_imgTxt}>uploadedFile your Image or video</Text>
  //                   )}
  //                 </>
  //               ) : (
  //                 <View style={style.t_imgClick}>
  //                   <Text style={style.t_imgTxt}>Add your Image or video</Text>
  //                 </View>
  //               )}
  //             </TouchableOpacity>
  //             {this.state.selectionError == true ? (
  //               <Text
  //                 style={{
  //                   color: '#A20030',
  //                   marginLeft: 40,
  //                   marginTop: 6,
  //                   fontSize: 13,
  //                   paddingRight: 5,
  //                   fontFamily: 'Poppins-Light',
  //                 }}>
  //                 {this.state.selectionErrorText}
  //               </Text>
  //             ) : null}
  //             {this.state.socialList.length == 0 ? null : (
  //               <TouchableOpacity
  //                 style={style.t_btnView}
  //                 disabled={this.state.loading}
  //                 onPress={() => this.postData()}>
  //                   <Text style={{color:"red"}}> Ok</Text>
  //               </TouchableOpacity>
  //             )}
  //           </View>
  //         </ScrollView>
  
  //         <Modal
  //           animationType={'fade'}
  //           transparent={false}
  //           style={{margin: 0}}
  //           visible={this.state.selectImg}
  //           onRequestClose={() => {
  //             console.log('Modal has been closed.');
  //           }}>
  //           {this.state.mainSelected == false ? (
  //             <RNCamera
  //               ref={ref => {
  //                 this.camera = ref;
  //               }}
  //               captureAudio={false}
  //               style={style.container}
  //               type={this.state.type}
  //               androidCameraPermissionOptions={{
  //                 title: 'Permission to use camera',
  //                 message: 'We need your permission to use your camera',
  //                 buttonPositive: 'Ok',
  //                 buttonNegative: 'Cancel',
  //               }}>
  //               <View
  //                 style={{
  //                   flex: 1,
  //                   alignItems: 'flex-end',
  //                   marginRight: 20,
  //                   paddingTop: Platform.OS == 'ios' ? 50 : 20,
  //                 }}>
  //                 <TouchableOpacity
  //                   onPress={() => this.setState({selectImg: false})}>
  //                     <Text
  //                 style={{
  //                   fontSize: 14,
  //                   color: '#A20030',
  //                   fontFamily: 'Poppins-Medium',
  //                 }}>
  //                 Add Camera
  //               </Text>
  //                 </TouchableOpacity>
  //               </View>
  //               <TouchableOpacity
  //                 style={style.ad_btnView}
  //                 onPress={this.takePicture.bind(this)}
  //                 onLongPress={this.takevideo}>

  //                 <Text style={{color:"red",fontSize:20}}>Take Picker</Text>
  //               </TouchableOpacity>
               
  //             </RNCamera>
  //           ) : (
  //             <View style={{flex: 1}}>
  //               <View
  //                 style={{
  //                   flexDirection: 'row',
  //                   marginHorizontal: 20,
  //                   marginTop: Platform.OS == 'ios' ? 50 : 20,
  //                   justifyContent: 'space-between',
  //                 }}>
                  
  //                 <View>
  //                   <TouchableOpacity
  //                     onPress={() =>
  //                       this.setState({
  //                         mainSelected: false,
  //                         uploadedFile: '',
  //                         ImageData: [],
  //                       })
  //                     }>
  //                                                         <Text style={{color:"black",fontSize:20}}>close</Text>

                    
  //                   </TouchableOpacity>
  //                 </View>
  //               </View>
  //               <View
  //                 style={{
  //                   flex: 1,
  //                   alignItems: 'center',
  //                   justifyContent: 'center',
  //                 }}>
  //                 {this.state.uploadedFile.endsWith('mp4') ? (
  //                   <Video
  //                     paused={false}
  //                     ref={ref => {
  //                       this.video = ref;
  //                     }}
  //                     source={{uri: this.state.uploadedFile}}
  //                     style={{height: '100%', width: '100%'}}
  //                     resizeMode="contain"
  //                     volume={0.7}
  //                     muted={false}
  //                   />
  //                 ) : (
  //                    <Image source={{uri: this.state.uploadedFile}} 
                    
  //                   style={{height:"100%",width:"100%"}}
  //                   />

    
  //                 )}
                  
  //               </View>
  //               <View style={style.ad_inputParent}>
                  
  //                 <TouchableOpacity
  //                   style={{
  //                     justifyContent: 'center',
  //                     marginHorizontal: 10,
  //                     backgroundColor: '#A20030',
  //                     height: 60,
  //                     width: 60,
  //                     bottom: 10,
  //                     paddingLeft: 20,
  //                     paddingVertical: 15,
  //                     paddingRight: 15,
  //                     borderRadius: 50,
  //                   }}
  //                   onPress={() =>
  //                     this.setState({mainSelected: false, selectImg: false})
  //                   }>
  //                                       <Text style={{color:"black",fontSize:20}}>send</Text>
                
  //                 </TouchableOpacity>
  //               </View>
  //             </View>
  //           )}
  //         </Modal>
  //       </View>
  //     );
  //   }
  // }


  // export default  TagConnection;

  // const styles = StyleSheet.create({
  //   circleDiv: {
  //     position: 'absolute',
  //     bottom: 35,
  //     transform: [{rotate: '7deg'}],
  //     right: 25,
  //     height: 10,
  //     display: 'flex',
  //     flexDirection: 'row',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     width: '100%',
  //   },
  //   emptyListView: {
  //     flex: 1,
  //     paddingVertical: 50,
  //     alignItems: 'center',
  //   },
  //   emptyListText: {
  //     color: '#808080',
  //     fontSize: 15,
  //     fontWeight: '500',
  //   },
  //   whiteCircle: {
  //     width: 14,
  //     height: 14,
  //     borderRadius: 10,
  //     margin: 6,
  //     backgroundColor: '#EFEFF4',
  //   },
  //   itemSeparatorStyle: {
  //     height: 1,
  //     width: '90%',
  //     alignSelf: 'center',
  //     backgroundColor: '#D3D3D3',
  //   },
  //   searchBarContainerStyle: {
  //     marginBottom: 10,
  //     flexDirection: 'row',
  //     height: 40,
  //     shadowOpacity: 1.0,
  //     shadowRadius: 5,
  //     shadowOffset: {
  //       width: 1,
  //       height: 1,
  //     },
  //     backgroundColor: 'rgba(255,255,255,1)',
  //     shadowColor: '#d3d3d3',
  //     borderRadius: 10,
  //     elevation: 3,
  //     marginLeft: 10,
  //     marginRight: 10,
  //   },
  //   selectLabelTextStyle: {
  //     color: '#A20030',
  //     fontSize: 17,
  //     fontFamily: 'Poppins-Regular',
  //     textAlign: 'left',
  //     width: '99%',
  //     padding: 10,
  //     flexDirection: 'row',
  //   },
  //   placeHolderTextStyle: {
  //     color: '#A20030',
  //     fontSize: 17,
  //     fontFamily: 'Poppins-Regular',
  //     padding: 10,
  //     textAlign: 'left',
  //     width: '99%',
  //     flexDirection: 'row',
  //   },
  //   dropDownImageStyle: {
  //     width: 20,
  //     height: 20,
  //     alignSelf: 'center',
  //   },
  //   listTextViewStyle: {
  //     color: '#A20030',
  //     fontSize: 17,
  //     fontFamily: 'Poppins-Regular',
  //     marginVertical: 10,
  //     flex: 0.9,
  //     marginLeft: 20,
  //     marginHorizontal: 10,
  //     textAlign: 'left',
  //   },
  //   pickerStyle: {
  //     marginLeft: 31,
  //     elevation: 3,
  //     paddingRight: 25,
  //     marginRight: 22,
  //     marginBottom: 2,
  //     shadowOpacity: 1.0,
  //     shadowOffset: {
  //       width: 1,
  //       height: 1,
  //     },
  //     borderWidth: 1,
  //     borderColor: '#A20030',
  //     shadowRadius: 10,
  //     backgroundColor: 'rgba(255,255,255,1)',
  //     shadowColor: '#d3d3d3',
  //     borderRadius: 10,
  //     flexDirection: 'row',
  //   },
  // });

//   import React, { useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Platform,
//   ScrollView,
//   Modal,
//   Image,
// } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import Video from 'react-native-video';
// import { RNCamera } from 'react-native-camera';
// import style from './styles';

// const TagConnection = (props) => {
//   const [uploadedFile, setUploadedFile] = useState('');
//   const [ImageData, setImageData] = useState([]);
//   const [selectImg, setSelectImg] = useState(false);
//   const [mainSelected, setMainSelected] = useState(false);
//   const [size, setSize] = useState(0);
//   const cameraRef = useRef(null);

//   const openGallery = () => {
//     setSelectImg(true);
//   };

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       try {
//         const data = await cameraRef.current.takePictureAsync();
//         const img = {
//           name: 'input_image.jpeg',
//           uri: data.uri,
//           type: 'image/jpeg',
//         };
//         setMainSelected(true);
//         setUploadedFile(data.uri);
//         setImageData(img);
//       } catch (err) {
//         console.log('Error Is : ', err);
//         Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
//       }
//     }
//   };

//   const takeVideo = async () => {
//     ImagePicker.openCamera({
//       mediaType: 'video',
//       width: 1200,
//       height: 1500,
//       freeStyleCropEnabled: true,
//       compressImageQuality: 1,
//       compressVideoPreset: '1280x720',
//     }).then((image) => {
//       console.log('video select data', image.size);
//       const img = {
//         name: 'video.mp4',
//         uri: image.path,
//         type: image.mime,
//       };
//       setSize(image.size);
//       setMainSelected(true);
//       setUploadedFile(image.path);
//       setImageData(img);
//     });
//   };

//   return (
//     <View>
//       <ScrollView
//         contentContainerStyle={{ paddingBottom: 90 }}
//         showsVerticalScrollIndicator={false}>
//         <View>
//           <TouchableOpacity
//             style={style.t_imageDivider}
//             onPress={openGallery}>
//             {uploadedFile != '' ? (
//               <>
//                 {ImageData.type == 'video/mp4' ? (
//                   <Video
//                     paused={false}
//                     source={{ uri: uploadedFile }}
//                     style={{ ...StyleSheet.absoluteFill, borderRadius: 20 }}
//                     resizeMode="cover"
//                     volume={0.7}
//                     muted={true}
//                   />
//                 ) : (
//                   <Image
//                     source={{ uri: uploadedFile }}
//                     style={{ ...StyleSheet.absoluteFill, borderRadius: 20 }}
//                   />
//                 )}
//               </>
//             ) : (
//               <View style={style.t_imgClick}>
//                 <Text style={style.t_imgTxt}>Add your Image or video</Text>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       <Modal
//         animationType={'fade'}
//         transparent={false}
//         style={{ margin: 0 }}
//         visible={selectImg}
//         onRequestClose={() => {
//           console.log('Modal has been closed.');
//         }}>
//         {mainSelected == false ? (
//           <RNCamera
//             ref={cameraRef}
//             captureAudio={false}
//             style={style.container}
//             androidCameraPermissionOptions={{
//               title: 'Permission to use camera',
//               message: 'We need your permission to use your camera',
//               buttonPositive: 'Ok',
//               buttonNegative: 'Cancel',
//             }}>
//             <TouchableOpacity
//               style={style.ad_btnView}
//               onPress={takePicture}
//               onLongPress={takeVideo}>
//               <Text style={{ color: 'red', fontSize: 20 }}>Take Picture</Text>
//             </TouchableOpacity>
//           </RNCamera>
//         ) : (
//           <View style={{ flex: 1 }}>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
//               <TouchableOpacity
//                 onPress={() => {
//                   setMainSelected(false);
//                   setUploadedFile('');
//                   setImageData([]);
//                 }}>
//                 <Text style={{ color: 'black', fontSize: 20 }}>Close</Text>
//               </TouchableOpacity>
//             </View>
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//               {uploadedFile.endsWith('mp4') ? (
//                 <Video
//                   paused={false}
//                   source={{ uri: uploadedFile }}
//                   style={{ height: '100%', width: '100%' }}
//                   resizeMode="contain"
//                   volume={0.7}
//                   muted={false}
//                 />
//               ) : (
//                 <Image source={{ uri: uploadedFile }} style={{ height: '100%', width: '100%' }} />
//               )}
//             </View>
//             <TouchableOpacity
//               style={{
//                 justifyContent: 'center',
//                 marginHorizontal: 10,
//                 backgroundColor: '#A20030',
//                 height: 60,
//                 width: 60,
//                 bottom: 10,
//                 paddingLeft: 20,
//                 paddingVertical: 15,
//                 paddingRight: 15,
//                 borderRadius: 50,
//                 position: 'absolute',
//                 alignSelf: 'center',
//               }}
//               onPress={() => {
//                 setMainSelected(false);
//                 setSelectImg(false);
//               }}>
//               <Text style={{ color: 'black', fontSize: 20 }}>Send</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </Modal>
//     </View>
//   );
// };

// export default TagConnection;

// const styles = StyleSheet.create({
//   circleDiv: {
//     position: 'absolute',
//     bottom: 35,
//     transform: [{ rotate: '7deg' }],
//     right: 25,
//     height: 10,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//   },
// });
// import React, { useState, useRef } from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import Video from 'react-native-video';

// const CameraComponent = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [recordedVideo, setRecordedVideo] = useState(null);
//   const [recordingDuration, setRecordingDuration] = useState(0);
//   const [showProgressCircle, setShowProgressCircle] = useState(false);
//   const cameraRef = useRef(null);
//   let timer;

//   const takePicture = async () => {
//     if (cameraRef.current && !isRecording) {
//       const options = { quality: 0.5, base64: true };
//       const data = await cameraRef.current.takePictureAsync(options);
//       setCapturedImage(data.uri);
//     } else if (!isRecording) {
//       startRecording();
//     }
//   };

//   const startRecording = async () => {
//     if (cameraRef.current) {
//       const options = { quality: RNCamera.Constants.VideoQuality['480p'] };
//       const data = await cameraRef.current.recordAsync(options);
//       setRecordedVideo(data.uri);
//     }
//     setIsRecording(true);
//     setShowProgressCircle(true); // Show progress circle when recording starts
//     timer = setInterval(() => {
//       setRecordingDuration(prevDuration => prevDuration + 1);
//     }, 1000); // Update recording duration every second
//   };

//   const stopRecording = async () => {
//     clearInterval(timer);
//     if (cameraRef.current) {
//       const data = await cameraRef.current.stopRecording();
//       setRecordedVideo(data.uri);
//     }
//     setIsRecording(false);
//     setRecordingDuration(0);
//     setShowProgressCircle(false); // Hide progress circle when recording stops
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ flex: 1 }}>
//         {capturedImage && <Image source={{ uri: capturedImage }} style={{ flex: 1 }} />}
//         {recordedVideo && (
//           <Video
//             source={{ uri: recordedVideo }}
//             style={{ width: 500, height: 500 }}
//             resizeMode="contain"
//             controls={true}
//             paused={false}
//           />
//         )}
//         {!capturedImage && !recordedVideo && (
//           <RNCamera
//             ref={cameraRef}
//             style={{ flex: 1 }}
//             type={RNCamera.Constants.Type.back}
//             flashMode={RNCamera.Constants.FlashMode.off}
//             autoFocus={RNCamera.Constants.AutoFocus.on}
//           />
//         )}
//         {showProgressCircle && (
//           <View style={[styles.progressCircle, { transform: [{ rotate: `${recordingDuration * 6}deg` }] }]}>
//             <Text style={styles.durationText}>{recordingDuration}</Text>
//           </View>
//         )}
//       </View>
//       <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//         <TouchableOpacity onPress={takePicture} onLongPress={startRecording} onPressOut={stopRecording} style={{ padding: 20 }}>
//           <View style={{ width: 45, height: 45, borderRadius: 45, borderWidth: 2 }} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   progressCircle: {
//     position: 'absolute',
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 2,
//     borderColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//     top: 20,
//     right: 20,
//   },
//   durationText: {
//     color: 'red',
//     fontSize: 18,
//   },
// });

// export default CameraComponent;



//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MyComponent;
