import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Header from '../components/common/Header';
import Button from '../components/common/button/Button';
import ImagePicker from 'react-native-image-crop-picker';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imageShow, setImageShow] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedImage, setUpdatedImage] = useState('');
  const [updateImageShow, setUpdateImageShow] = useState('');

  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const snapshot = await firestore().collection('users').get();
      const fetchedUsers = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(fetchedUsers);
      setIsLoading(false);
    } catch (error) {
      console.log('error', error);
      setIsLoading(false);
    }
  };

  const selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImageShow(image.path);
    });
  };
  const updateImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUpdateImageShow(image.path);
    });
  };
  const deleteData = async id => {
    try {
      await firestore().collection('users').doc(id).delete();
      fetchData();
    } catch (error) {
      console.log('error 333', error);
    }
  };

  const handleEdit = item => {
    setEditingItem(item);
    setUpdatedName(item.name);
    setUpdatedEmail(item.email);
    setUpdateImageShow(item.image);
    setModalVisible(true);
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await firestore()
        .collection('users')
        .doc(editingItem.id)
        .update({
          name: updatedName,
          email: updatedEmail,
          image: updateImageShow ? updateImageShow : updatedImage,
        });
      setIsLoading(false);

      setModalVisible(false);
      fetchData();
    } catch (error) {
      console.log('Error updating document:', error);
    }
  };
  const Validation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (imageShow == null) {
      Alert.alert('Please Select Image Image');
    } else if (name === '') {
      Alert.alert('Please Enter the name');
    } else if (!emailRegex.test(email)) {
      Alert.alert('Please Enter a valid email');
    } else {
      addData();
    }
  };

  const addData = async () => {
    setButtonLoading(true);
    try {
      await firestore()
        .collection('users')
        .add({name, email, image: imageShow});
      setName('');
      setEmail('');
      setImageShow(null);
      setButtonLoading(false);
      fetchData();
    } catch (error) {
      console.log(' error rert', error);
      setButtonLoading(false);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const renderItem = ({item}) => (
    console.log('item', item),
    (
      <View style={styles.itemContainer}>
        <Image
          source={{uri: item.image}}
          style={{height: 45, width: 45, borderRadius: 10}}
        />
        <View>
          <Text style={styles.itemText}>Name:{item.name}</Text>
          <Text style={styles.itemText}>Email:{item.email}</Text>
        </View>
        <View></View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => deleteData(item.id)}>
            <Text style={[styles.button, {color: 'red'}]}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 5}}
            onPress={() => handleEdit(item)}>
            <Text style={[styles.button, {color: 'blue'}]}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );

  return (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <TouchableOpacity
        onPress={selectImage}
        style={styles.selectImageContainer}>
        {imageShow ? (
          <Image source={{uri: imageShow}} style={styles.selectedImage} />
        ) : (
          <Text style={styles.selectImageText}>Select Your Image</Text>
        )}
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholderTextColor={'black'}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor={'black'}
        />
        <Button
          text="Add Data"
          onPress={Validation}
          isLoading={buttonLoading}
        />
      </View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.modalInput}
                placeholder="Name"
                value={updatedName}
                onChangeText={setUpdatedName}
                placeholderTextColor={'black'}
              />
              <TextInput
                style={styles.modalInput}
                placeholder="Email"
                value={updatedEmail}
                placeholderTextColor={'black'}
                onChangeText={setUpdatedEmail}
              />
              <TouchableOpacity onPress={() => updateImage()}>
                <View style={styles.itemContainer}>
                  {updateImageShow ? (
                    <Image
                      source={{uri: updateImageShow}}
                      style={{height: 45, width: 45, borderRadius: 10}}
                    />
                  ) : (
                    <Image
                      source={{uri: updatedImage}}
                      style={{height: 45, width: 45, borderRadius: 10}}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <Button
                text="Update"
                onPress={handleUpdate}
                isLoading={isLoading}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: 'black',
  },
  flatList: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    margin: 5,
    backgroundColor: 'white',
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
  },
  itemText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
  },
  selectImageContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: 'white',
    height: 45,
    justifyContent: 'center',
  },
  selectedImage: {
    height: 70,
    width: 70,
    marginTop: 40,
  },
  selectImageText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    width: '80%',
  },
  modalInput: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: 'black',
  },
});

export default HomeScreen;
