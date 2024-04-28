  // import React, { useState } from 'react';
  // import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
  // import firebase from './databaseFirebaseDb';
  
  // const AddUserScreen = ({ navigation }) => {
  //   const dbRef = firebase.firestore().collection('users');
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [mobile, setMobile] = useState('');
  //   const [isLoading, setIsLoading] = useState(false);

  //   const inputValueUpdate = (val, prop) => {
  //     if (prop === 'name') setName(val);
  //     else if (prop === 'email') setEmail(val);
  //     else if (prop === 'mobile') setMobile(val);
  //   };

  //   const storeUser = () => {
  //     if (name === '') {
  //       alert('Fill at least your name!');
  //     } else {
  //       setIsLoading(true);
  //       dbRef
  //         .add({
  //           name: name,
  //           email: email,
  //           mobile: mobile,
  //         })
  //         .then(() => {
  //           setName('');
  //           setEmail('');
  //           setMobile('');
  //           setIsLoading(false);
  //           navigation.navigate('UserScreen');
  //         })
  //         .catch((error) => {
  //           console.error('Error found: ', error);
  //           setIsLoading(false);
  //         });
  //     }
  //   };

  //   return (
  //     <ScrollView style={styles.container}>
  //       {isLoading && (
  //         <View style={styles.preloader}>
  //           <ActivityIndicator size="large" color="#9E9E9E" />
  //         </View>
  //       )}
  //       <View style={styles.inputGroup}>
  //         <TextInput
  //           placeholder={'Name'}
  //           value={name}
  //           onChangeText={(val) => inputValueUpdate(val, 'name')}
  //         />
  //       </View>
  //       <View style={styles.inputGroup}>
  //         <TextInput
  //           multiline={true}
  //           numberOfLines={4}
  //           placeholder={'Email'}
  //           value={email}
  //           onChangeText={(val) => inputValueUpdate(val, 'email')}
  //         />
  //       </View>
  //       <View style={styles.inputGroup}>
  //         <TextInput
  //           placeholder={'Mobile'}
  //           value={mobile}
  //           onChangeText={(val) => inputValueUpdate(val, 'mobile')}
  //         />
  //       </View>
  //       <View style={styles.button}>
  //         <Button title="Add User" onPress={storeUser} color="#19AC52" />
  //       </View>
  //     </ScrollView>
  //   );
  // };

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     padding: 35,
  //   },
  //   inputGroup: {
  //     flex: 1,
  //     padding: 0,
  //     marginBottom: 15,
  //     borderBottomWidth: 1,
  //     borderBottomColor: '#cccccc',
  //   },
  //   preloader: {
  //     left: 0,
  //     right: 0,
  //     top: 0,
  //     bottom: 0,
  //     position: 'absolute',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  // });

  // export default AddUserScreen;


  import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import db from './databaseFirebaseDb';

const AddUserScreen = ({ navigation }) => {
  const dbRef = db; // Assign db to dbRef
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const inputValueUpdate = (val, prop) => {
    if (prop === 'name') setName(val);
    else if (prop === 'email') setEmail(val);
    else if (prop === 'mobile') setMobile(val);
  };

  const storeUser = () => {
    if (name === '') {
      alert('Fill at least your name!');
    } else {
      setIsLoading(true);
      // Check if dbRef is defined and has the collection function
      if (dbRef) {
        dbRef
          .collection('users')
          .add({
            name: name,
            email: email,
            mobile: mobile,
          })
          .then(() => {
            setName('');
            setEmail('');
            setMobile('');
            setIsLoading(false);
            navigation.navigate('UserScreen');
          })
          .catch((error) => {
            console.error('Error found: ', error);
            setIsLoading(false);
          });
      } else {
        console.error('dbRef is not properly initialized.');
        setIsLoading(false);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {isLoading && (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      )}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder={'Name'}
          value={name}
          onChangeText={(val) => inputValueUpdate(val, 'name')}
          placeholderTextColor={"black"}
          style={{color:"black"}}

        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder={'Email'}
          value={email}
          placeholderTextColor={"black"}
          onChangeText={(val) => inputValueUpdate(val, 'email')}
          style={{color:"black"}}
 
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder={'Mobile'}
          value={mobile}
          onChangeText={(val) => inputValueUpdate(val, 'mobile')}
          style={{color:"black"}}
          placeholderTextColor={"black"}


          
        />
      </View>
      <View style={styles.button}>
        <Button title="Add User" onPress={storeUser} color="#19AC52" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
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
    justifyContent: 'center',
  },
});

export default AddUserScreen;
