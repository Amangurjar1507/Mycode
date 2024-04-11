import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

const ButtonClikeShowthePushNotifaction = () => {
  useEffect(() => {
    const getToken = async () => {
      let token = await messaging().getToken();
      console.log('token', token);
    };
    getToken(); // Call the function to set up the notification channel
    // PushNotification.configure({
    //   onNotification: function (notification) {
    //     console.log('NOTIFICATION:', notification);
    //   },
    //   onRegistrationError: function (error) {
    //     console.error('REGISTRATION ERROR:', error);
    //   },
    //   onRegister: function (token) {
    //     console.log('TOKEN:', token);
    //   },
    //   permissions: {
    //     alert: true,
    //     badge: true,
    //     sound: true,
    //   },
    //   popInitialNotification: true,
    //   requestPermissions: true,
    // });
  }, []);

   

  const sendMessage = async () => {
    try {
       let token = await messaging().getToken();
      const message = {
        messageId: '3',
        destinationId: "8" + "@gcm.googleapis.com",
        timeToLive: 86400,    // 1 day
        data: {
          "key1": "value1",
          "key2": "value2"
        }
      };
      fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token  
        },
        body: JSON.stringify(message)
      })
      .then(response => {
        console.log("response", response);
         PushNotification.localNotification({
          channelId: "default-channel-id", // Pass the channel ID here
          title: "Hello  meaasge",
          message: " Your message has been sent successfully!",
        });
      })
      .catch(error => {
        console.log("ee", error);
      });
    } catch (error) {
      console.log("Error obtaining token", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Selector</Text>
      <Button title="Select Image" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ButtonClikeShowthePushNotifaction;
