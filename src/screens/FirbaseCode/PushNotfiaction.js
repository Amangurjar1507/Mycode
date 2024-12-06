//   /* Navigation to notification screen /
//   const navigateToNotification = () => {
//     PushNotification.configure({
//       onNotification: notification => {
//         navigation.navigate('notifications');
//       },
//     });
//   };

//   useEffect(() => {
//     /** Notification show when app is in foreground*/
//     messaging().onMessage((remoteMessage: any) => {
//         PushNotification.localNotification({
//           channelId: 'CrypConect',
//           title: remoteMessage?.notification?.title,
//           message: remoteMessage?.notification?.body,
//         });
//         navigateToNotification();
//       });
//       /* Notification show when app is in background /
//       messaging().setBackgroundMessageHandler(async remoteMessage => {
//         navigateToNotification();
//       });
//       /** Notification show when app is close (kill mode)*/
//       messaging()
//         .getInitialNotification()
//         .then(remoteMessage => {
//           if (remoteMessage) {
//             navigateToNotification();
//           }
//         });
//     }, []);
  
//     /* get notification token /
//     const getFcmToken = async () => {
//       await messaging()
//         .getToken()
//         .then(res => {
//           Log('FCM Token:', res);
//           updateFCMToken(res);
//         })
//         .catch(e => {});
//     };
  
// import React from 'react';
// import {
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import PushNotification from "react-native-push-notification";

// PushNotification.configure({
//     requestPermissions: Platform.OS === 'ios',
  
//     // (required) Called when a remote is received or opened, or local notification is opened
//     onNotification: function (notification) {
//       console.log('NOTIFICATION:', notification);
//       // (required) Called when a remote is received or opened, or local notification is opened
//       notification.finish(PushNotificationIOS.FetchResult.NoData);
//     },
//   });
  
//   PushNotification.createChannel(
//     {
//       channelId: 'DemoAppID', // (required)
//       channelName: 'DemoApp', // (required)
//     },
//     created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
//   );


// const App = () => {

//   function setRepeatingNotification(interval){
//     PushNotification.cancelAllLocalNotifications()
//     if (interval == "every 30 seconds") {
//       PushNotification.localNotificationSchedule({
//         title: "My notification title",
//         message: "My notification message",
//         date: new Date(Date.now() + 30 * 1000), // first trigger in 30 secs
//         channelId: 'DemoAppID',
//         repeatType: 'time',
//         repeatTime: 30 * 1000 // repeats every 30 seconds (value has to be defined in miliseconds when the repeatType is 'time')
//       });
//       Alert.alert("Successful!", "Your notification is coming in 30 seconds and will repeat itself every 30 seconds.")
//     }
//     else if (interval == "once in two days") {
//       PushNotification.localNotificationSchedule({
//         title: "My notification title",
//         message: "My notification message",
//         date: new Date(Date.now() + 10 * 1000), // first trigger in 10 secs
//         channelId: 'DemoAppID',
//         repeatType: 'day',
//         repeatTime: 2, // repeats every 2 days
//       });
//       Alert.alert("Successful!", "Your notification is coming in 10 seconds and will repeat itself once in two days.")
//     }
//     else if (interval == "once a week") {
//       PushNotification.localNotificationSchedule({
//         title: "My notification title",
//         message: "My notification message",
//         date: new Date(Date.now() + 10 * 1000), // first trigger in 10 secs
//         channelId: 'DemoAppID',
//         repeatType: 'week',
//         repeatTime: 1 // repeats every week
//       });
//       Alert.alert("Successful!", "Your notification is coming in 10 seconds and will repeat itself every week.")
//     }
//   }

//   return (
//     <SafeAreaView style={styles.backgroundStyle}>

//       <StatusBar barStyle='dark-content' backgroundColor='white'/>

//       <TouchableOpacity style={styles.primaryButton} onPress={()=>{setRepeatingNotification("every 30 seconds")}}>
//         <Text>every 30 seconds</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.primaryButton} onPress={()=>{setRepeatingNotification("once in two days")}}>
//         <Text>once in two days</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.primaryButton} onPress={()=>{setRepeatingNotification("once a week")}}>
//         <Text>once a week</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.secondaryButton} onPress={()=>{PushNotification.cancelAllLocalNotifications()}}>
//         <Text>cancel all notifications</Text>
//       </TouchableOpacity>

//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundStyle:{

//     backgroundColor:'white',
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   primaryButton:{

//     padding:5,
//     backgroundColor:'#CDF2CA',
//     borderRadius:5,
//     margin:10
//   },
//   secondaryButton:{

//     padding:5,
//     backgroundColor:'#ffc2c2',
//     borderRadius:5,
//     margin:10
//   }
// });

// export default App;

// import React, {Component, useEffect} from 'react';
// import PushNotification from 'react-native-push-notification';
// import {View, Text, Button} from 'react-native';
// const Notification = () => {
//   useEffect(() => {
//     PushNotification.configure({
//       onRegister: function (token) {
//         console.log(' new TOKEN:', token);
//       },
//       onNotification: function (notification) {
//         console.log('NOTIFICATION:', notification);
//         notification.finish(PushNotificationIOS.FetchResult.NoData);
//       },
//       senderID: '485382879489',
//       // iOS only
//       permissions: {
//         alert: true,
//         badge: true,
//         sound: true,
//       },
//       popInitialNotification: true,
//       requestPermissions: true,
//     });
//   });
//   const setNotificationCategories = () => {
//     PushNotification.localNotification({
//       id: '0',
//       ticker: 'My Notification Ticker',
//       channelId: 1,
//       autoCancel: true,
//       largeIcon: 'ic_launcher',
//       smallIcon: 'ic_notification',
//       bigText: 'My big text that will be shown when notification is expanded',
//       subText: 'This is a subText',
//       color: 'red',
//       vibrate: true,
//       vibration: 300,
//       tag: 'some_tag',
//       group: 'group',
//       ongoing: false,
//       title: 'My Notification Title',
//       message: 'My Notification Message',
//       playSound: false,
//     });
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: 'red'}}>
//       <Text>New PushNotification</Text>
//       <Button onPress={setNotificationCategories} title="PushNotification" />
//     </View>
//   );
// };
// export default Notification;


import PushNotification from 'react-native-push-notification';

useEffect(() => {
    requestUserPermission();
    getToken();
  }, []);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      // Log({logLable: 'Authorization status', logValue: authStatus});
    }
  };

const getToken = async () => {
    PushNotification.createChannel(
      {
        channelId: 'AllinlocChannel', // (required)
        channelName: 'All In Loc Channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
    const token = await messaging().getToken();
    setDeviceToken(token);
    return token;
  };


  
  const onLogin = async () => {
    Keyboard.dismiss();
    setLoading(true);
    try {
      const formData = new URLSearchParams();
      formData.append(params.email, email);
      formData.append(params.password, password);
      formData.append(params.deviceToken, deviceToken ? deviceToken : '');
      const {data} = await axiosInstance.post(
        constant.login,
        formData.toString(),
      );
      setLoading(false);
      if (data) {
        Snackbar.show({text: data?.message});
        dispatch(loginSuccess(data.data[0]));
        setEmail('');
        setPassword('');
        setDeviceToken('');
        navigation.reset({
          index: 0,
          routes: [{name: 'bottomTab'}],
        });
      } else {
        Snackbar.show({text: 'Email Address or Password is incorrect.'});
      }
    } catch (e: any) {
      // Snackbar.show({text: e?.message});
      setLoading(false);
    }
  };
