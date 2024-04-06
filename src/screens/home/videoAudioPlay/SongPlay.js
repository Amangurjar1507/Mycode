import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  Pressable,
  Slider,
} from 'react-native';
import Video from 'react-native-video';
import styles from './style';
import ALLsong from '../../Storage';
import imageIndex from '../../../assets/imageIndex';
import gifIndex from '../../assets/gifIndex';

const HomeScreen = () => {
  const [play, setplay] = useState(true);
  const [paused, setPaused] = useState(true);
  const [totalLength, setTotalLength] = useState();
  const [currentPosition, setCurrentPosition] = useState(0);
  const [current_track, setCurrentTrack] = useState(0);
  const [repeat, setRepeat] = useState(false);
  const videoRef = useRef(null);
  const onSeek = time => {
    time = Math.round(time)
;
    videoRef && videoRef.current.seek(time)
;
    setCurrentPosition(time)
;
    setPaused(false);
  };
  const fixDuration = data => {
    setTotalLength(Math.floor(data.duration));
  };
  const setTime = data => {
    setCurrentPosition(Math.floor(data.currentTime));
  };
  const togglePlay = () => {
    setPaused(!paused);
    setplay(!play);
  };
  const handleRewind = () => {
    if (current_track > 0) {
      setCurrentTrack(current_track - 1);
      onSeek;
    } else {
      console.log('song is not avalible');
    }
  };

  const handleForward = () => {
    if (current_track < 2) {
      setCurrentTrack(current_track + 1);
      onSeek;
    } else {
      setCurrentTrack(0);
    }
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

  const onEnd = () => {
    setPaused(true);
    if (current_track < 2) {
      setCurrentTrack(current_track + 1);
      videoRef.current.seek(0);
     } else {
      setPaused(true);
      setCurrentPosition(0);
    }
  };

  const playlist = [
    {
      title: 'Tum mere liye kaafi ho',
      path: ALLsong.song,
      cover:
        'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
    },
    {
      title: 'Haaniya ve',
      path: ALLsong.haaniya,
      cover:
        'https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
    },
    {
      title: 'Wafa ne Bewafa',
      path: ALLsong.wafa,
      cover:
        'https://images.unsplash.com/photo-1512036666432-2181c1f26420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    },
  ];
  const handleProgressCustom = e => {
    videoRef.current.seek(e);
  };

  return (
    <View style={styles.container}>
      <Video
        source={playlist[current_track].path}
        ref={videoRef}
        playInBackground={false}
        audioOnly={true}
        playWhenInactive={false}
        paused={paused}
        onEnd={onEnd}
        onLoad={fixDuration}
        onProgress={setTime}
        repeat={repeat}
        style={{height: 0, width: 0}}
      />
      <View style={styles.titleContainer}>
        <Text style={[styles.textLight, {fontSize: 20}]}>PLAYLIST</Text>
      </View>
      <View style={styles.coverContainer}>
        <Image
          source={{
            uri: playlist[current_track].cover,
          }}
          style={styles.cover}
        />
      </View>
      <View style={[styles.titleContainer, {marginBottom: '48%'}]}>
        <Text style={styles.text}>{playlist[current_track].title}</Text>
      </View>
      <View
        style={{
          height: 55,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View style={styles.seekbar}>
          <Slider
            minimumValue={0}
            maximumValue={totalLength}
            onSlidingComplete={onSeek}
            value={currentPosition}
            maximumTrackTintColor={'white'}
            minimumTrackTintColor="#93A8B3"
            thumbTintColor={'black'}
            onValueChange={handleProgressCustom}
          />
          <View style={styles.inprogress}>
            <Text style={{fontSize: 12, color: '#133D5E', fontWeight: '500'}}>
              {secondsToTime(currentPosition)}
            </Text>
            <Text style={{fontSize: 12, color: '#133D5E', fontWeight: '500'}}>
              {secondsToTime(totalLength)}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 70,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={handleRewind}
          style={styles.playNextButton}
          activeOpacity={0.7}>
          <Image source={imageIndex.leftArrow} style={styles.leftArrowIcon} />
        </TouchableOpacity>
        <Pressable
          onPress={togglePlay}
          style={{
            height: 45,
            width: '13%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 5,
            marginHorizontal: 20,
          }}>
          <Image
            style={{height: 53, width: 53, tintColor: '#2C8799'}}
            source={paused ? imageIndex.play : imageIndex.pause}
          />
        </Pressable>
        <TouchableOpacity
          onPress={handleForward}
          style={styles.playNextButton}
          activeOpacity={0.7}>
          <Image source={imageIndex.rightArrows} style={styles.leftArrowIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;



https://images.unsplash.com

https://images.unsplash.com




// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { AudioRecorderPlayer } from 'react-native-audio-recorder-player';

// const App = () => {
//   const audioRecorderPlayer = new AudioRecorderPlayer();
//   const [isRecording, setIsRecording] = useState(false);

//   useEffect(() => {
//     // Optional: You can set up event listeners or configurations here
//     return () => {
//       // Clean up event listeners or configurations
//     };
//   }, []);

//   const startRecording = async () => {
//     try {
//       const result = await audioRecorderPlayer.startRecorder();
//       console.log(result);
//       setIsRecording(true);
//     } catch (error) {
//       console.error('Error starting recording:', error);
//     }
//   };

//   const stopRecording = async () => {
//     try {
//       const result = await audioRecorderPlayer.stopRecorder();
//       console.log(result);
//       setIsRecording(false);
//     } catch (error) {
//       console.error('Error stopping recording:', error);
//     }
//   };

//   return (
//     <View>
//       <TouchableOpacity onPress={isRecording ? stopRecording : startRecording}>
//         <Text>{isRecording ? 'Stop Recording' : 'Start Recording'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default App;


