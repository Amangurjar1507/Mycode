import React, { useState, useEffect } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from './databaseFirebaseDb';
 
const UserDetailScreen = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { userkey } = route.params;
    const dbRef = firebase.firestore().collection('users').doc(userkey);

    const unsubscribe = dbRef.onSnapshot((doc) => {
      const user = doc.data();
      setName(user.name);
      setEmail(user.email);
      setMobile(user.mobile);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const inputValueUpdate = (val, prop) => {
    if (prop === 'name') setName(val);
    else if (prop === 'email') setEmail(val);
    else if (prop === 'mobile') setMobile(val);
  };

  const updateUser = () => {
    setIsLoading(true);
    const { userkey } = route.params;
    const updateDBRef = firebase.firestore().collection('users').doc(userkey);
    updateDBRef.update({
      name: name,
      email: email,
      mobile: mobile,
    }).then(() => {
      setIsLoading(false);
      navigation.navigate('UserScreen');
    }).catch((error) => {
      console.error("Error: ", error);
      setIsLoading(false);
    });
  };

  const deleteUser = () => {
    const { userkey } = route.params;
    const dbRef = firebase.firestore().collection('users').doc(userkey);
    dbRef.delete().then(() => {
      console.log('Item removed from database')
      navigation.navigate('UserScreen');
    });
  };

  const openTwoButtonAlert = () => {
    Alert.alert(
      'Delete User',
      'Are you sure?',
      [
        { text: 'Yes', onPress: () => deleteUser() },
        { text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  if (isLoading) {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder={'Name'}
          value={name}
          onChangeText={(val) => inputValueUpdate(val, 'name')}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder={'Email'}
          value={email}
          onChangeText={(val) => inputValueUpdate(val, 'email')}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder={'Mobile'}
          value={mobile}
          onChangeText={(val) => inputValueUpdate(val, 'mobile')}
        />
      </View>
      <View style={styles.button}>
        <Button
          title='Update'
          onPress={updateUser}
          color="#19AC52"
        />
      </View>
      <View>
        <Button
          title='Delete'
          onPress={openTwoButtonAlert}
          color="#E37399"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 7, 
  }
});

export default UserDetailScreen;
