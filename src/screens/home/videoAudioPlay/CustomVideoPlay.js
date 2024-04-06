import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  Slider,
} from 'react-native';
import Video from 'react-native-video';
import imageIndex from '../../../assets/imageIndex';
import styles from './style';
const LoginScreen = () => {
  const [isMuted, setIsMuted] = React.useState(false);
  const videoPlayer = React.useRef(null);
  const [duration, setDuration] = useState();
  const [isrepeat, setIsRepeat] = useState(false);
  const [paused, setPaused] = useState(false);
  const [isBuffer, setIsBuffer] = useState(false);
  const [currentPlayingTime, setCurrentPlayingTime] = useState(0);

  const onLoadStart = () => {
    setIsBuffer(true);
  };
  const onLoad = data => {
    setDuration(data.duration);
  };
  const onLoadEnd = () => {
    setIsBuffer(false);
  };
  const play = () => {
    setIsRepeat(true);
    setPaused(!paused);
  };

  const handleRewind = () => {
    videoPlayer.current.seek(currentPlayingTime - 10);
  };

  const handleForward = () => {
    videoPlayer.current.seek(currentPlayingTime + 10);
  };
  const handleProgressCustom = e => {
    videoPlayer.current.seek(e);
  };
  const handleProgress = data => {
    setCurrentPlayingTime(data.currentTime);
  };
  const secondsToTime = e => {
    var h = Math.floor(e / 3600)
        .toString()
        .padStart(2, '0'),
      m = Math.floor((e % 3600) / 60)
        .toString()
        .padStart(2, '0'),
      s = Math.floor(e % 60)
        .toString()
        .padStart(2, '0');
    return `${m}:${s}`;
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.playerView}>
          <Video
            ref={videoPlayer}
            source={{
              uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
            }}
            resizeMode={'cover'}
            posterResizeMode={'cover'}
            style={styles.videoContainer}
            onLoadStart={() => onLoadStart}
            onReadyForDisplay={onLoadEnd}
            fullscreen={true}
            onLoad={onLoad}
            onProgress={handleProgress}
            onBuffer={() => setIsBuffer(false)}
            playWhenInactive={false}
            playInBackground={false}
            audioOnly={true}
            repeat={isrepeat}
            muted={isMuted}
            onEnd={() => {
              setPaused(true);
              setCurrentPlayingTime(0);
            }}
            controll
            paused={paused}
          />
        </View>
        <View style={styles.playerContainer}>
          <View
            style={{
              height: 20,
              width: '100%',
            }}>
            <Slider
              minimumTrackTintColor="#307ecc"
              thumbTintColor="#307ecc"
              maximumTrackTintColor="#FFFFFF"
              maximumValue={duration}
              minimumValue={0}
              value={currentPlayingTime}
              onValueChange={e => handleProgressCustom(e)}
              step={1}
            />
          </View>
          <View style={styles.playContainer}>
            <TouchableOpacity onPress={() => setIsMuted(isMuted => !isMuted)}>
              <Image
                source={isMuted ? imageIndex.mute : imageIndex.speaker}
                style={styles.muteIcon}
              />
            </TouchableOpacity>
            <Text style={styles.timingText}>
              {secondsToTime(currentPlayingTime)}
            </Text>
            <TouchableOpacity
              onPress={handleRewind}
              style={styles.playNextButton}
              activeOpacity={0.7}>
              <Image
                source={imageIndex.leftArrow}
                style={styles.leftArrowIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.controllterButton}
              activeOpacity={0.7}
              onPress={() => play()}>
              <Image
                source={paused ? imageIndex.play : imageIndex.pause}
                style={styles.playIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleForward}
              style={styles.playNextButton}
              activeOpacity={0.7}>
              <Image
                source={imageIndex.rightArrows}
                style={styles.leftArrowIcon}
              />
            </TouchableOpacity>
            <Text style={styles.timingText}>{secondsToTime(duration)}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;





// import React, {useEffect, useRef, useState} from 'react';
// import {
//   Text,
//   View,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   Slider,
// } from 'react-native';
// import Video from 'react-native-video';
// import {imageIndex} from './src/assets';
// import messaging from '@react-native-firebase/messaging';
// const LoginScreen = () => {
//   const [isMuted, setIsMuted] = React.useState(false);
//   const videoPlayer = React.useRef(null);
//   const [duration, setDuration] = useState();
//   const [isrepeat, setIsRepeat] = useState(false);
//   const [paused, setPaused] = useState(false);
//   const [isBuffer, setIsBuffer] = useState(false);
//   const [currentPlayingTime, setCurrentPlayingTime] = useState(0);
//   const [isSlider, setIsSlider] = useState(0);
//   useEffect(() => {
//     letToken();
//   }, []);
//   const letToken = async () => {
//     let token = await messaging().getToken();
//     console.log('token', token);
//     //     await messaging().registerDeviceForRemoteMessages();
//     // const token = await messaging().getToken();
//   };
//   const onLoadStart = () => {
//     setIsBuffer(true);
//   };
//   const onLoad = data => {
//     setDuration(data.duration);
//   };
//   const onLoadEnd = () => {
//     setIsBuffer(false);
//   };
//   const play = () => {
//     setIsRepeat(true);
//     setPaused(!paused);
//   };

//   const handleRewind = () => {
//     videoPlayer.current.seek(currentPlayingTime - 10);
//   };

//   const handleForward = () => {
//     videoPlayer.current.seek(currentPlayingTime + 10);
//   };

//   const handleProgress = data => {
//     setCurrentPlayingTime(data.currentTime);
//     setIsSlider(data.currentTime);
//   };
//   const handleProgressCustom = e => {
//     videoPlayer.current.seek(e);
//   };
//   const secondsToTime = e => {
//     (m = Math.floor((e % 3600) / 60)
//       .toString()
//       .padStart(2, '0')),
//       (s = Math.floor(e % 60)
//         .toString()
//         .padStart(2, '0'));
//     return `${m}:${s}`;
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: 'black'}}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{paddingBottom: 100, flexGrow: 1}}>
//         <View
//           style={{
//             height: 440,
//             marginTop: 35,
//             width: '100%',
//             paddingTop: 15,
//           }}>
//           <Video
//             ref={videoPlayer}
//             source={{
//               uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
//             }}
//             resizeMode={'cover'}
//             posterResizeMode={'cover'}
//             style={{height: 512, width: '100%'}}
//             onLoadStart={() => onLoadStart}
//             onReadyForDisplay={onLoadEnd}
//             fullscreen={true}
//             onLoad={onLoad}
//             onProgress={handleProgress}
//             onBuffer={() => setIsBuffer(false)}
//             playWhenInactive={false}
//             playInBackground={false}
//             controls={true}
//             audioOnly={true}
//             repeat={isrepeat}
//             muted={isMuted}
//             onEnd={() => {
//               setPaused(true);
//               setCurrentPlayingTime(0);
//             }}
//             paused={paused}
//           />
//         </View>
//         <View
//           style={{
//             backgroundColor: 'black',
//             justifyContent: 'space-evenly',
//           }}>
//           <Slider
//             minimumTrackTintColor="primary"
//             thumbTintColor="white"
//             maximumTrackTintColor="skyblue"
//             maximumValue={duration}
//             minimumValue={0}
//             style={{marginTop: 12}}
//             value={currentPlayingTime}
//             onValueChange={e => handleProgressCustom(e)}
//             step={1}
//           />
//           <Text
//             style={{
//               fontSize: 18,
//               color: 'white',
//               bottom: 5,
//               marginLeft: 10,
//             }}>
//             {secondsToTime(currentPlayingTime)}
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginTop: 10,
//             }}>
//             <TouchableOpacity onPress={() => setIsMuted(m => !m)}>
//               <Image
//                 source={isMuted ? imageIndex.mute : imageIndex.volume}
//                 style={{
//                   height: 27,
//                   width: 28,
//                   tintColor: 'white',
//                   bottom: 5,
//                   marginStart: -12,
//                 }}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{padding: 10}}
//               activeOpacity={0.7}
//               onPress={handleRewind}>
//               <Image
//                 source={imageIndex.back}
//                 style={{
//                   height: 10,
//                   width: 12,
//                   padding: 12,
//                   tintColor: 'white',
//                   bottom: 5,
//                   borderRadius: 30,
//                   marginHorizontal: 12,
//                 }}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{padding: 10}}
//               activeOpacity={0.7}
//               onPress={() => setPaused(!paused)}>
//               <Image
//                 source={paused ? imageIndex.play : imageIndex.pause}
//                 style={{
//                   height: 20,
//                   width: 20,
//                   padding: 18,
//                   tintColor: paused ? 'white' : null,
//                   bottom: 5,
//                   borderRadius: 30,
//                   marginHorizontal: 12,
//                 }}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{padding: 10}}
//               activeOpacity={0.7}
//               onPress={handleForward}>
//               <Image
//                 source={imageIndex.next}
//                 style={{
//                   height: 38,
//                   width: 12,
//                   padding: 12,
//                   tintColor: 'white',
//                   bottom: 5,
//                   borderRadius: 30,
//                   marginHorizontal: 12,
//                 }}
//               />
//             </TouchableOpacity>
//             <Text
//               style={{
//                 fontSize: 21,
//                 color: 'white',
//                 textAlign: 'left',
//               }}>
//               {secondsToTime(duration)}
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };
// export default LoginScreen;
