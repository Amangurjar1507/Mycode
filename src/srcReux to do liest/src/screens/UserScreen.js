import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, FlatList, Text, TouchableOpacity } from 'react-native';
import firebase from './databaseFirebaseDb';
 
const UserScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userArr, setUserArr] = useState([]);

  useEffect(() => {
    const firestoreRef = firebase.firestore().collection('users');
    const unsubscribe = firestoreRef.onSnapshot(getCollection);

    return () => unsubscribe();
  }, []);

  const getCollection = (querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      const { name, email, mobile } = doc.data();
      users.push({
        key: doc.id,
        name,
        email,
        mobile,
      });
    });
    setUserArr(users);
    setIsLoading(false);
  }

  const renderUser = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate('UserDetailScreen', {
          userkey: item?.key
        });
      }}
    >
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemSubtitle}>{item.email}</Text>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={userArr}
        renderItem={renderUser}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preloader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default UserScreen;
