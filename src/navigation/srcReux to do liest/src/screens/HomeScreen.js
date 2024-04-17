import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Modal, StyleSheet, Image, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';
import Header from '../components/common/Header';
import Button from '../components/common/button/Button';
import imageIndex from '../assets/imageIndex';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const route = useRoute();
  const [editName, seteditName] = useState('');
  const [ediAge, setediAge] = useState('');
  const [isLoading ,setisLoading] =  useState(false)


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setisLoading(false)
    try {
      const snapshot = await firestore().collection('users').get();
      const fetchedUsers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(fetchedUsers);
        setisLoading(fasle)
    } catch (error) {
      console.log('error -0',error)
     }
  };

  const addData = async () => {
    setisLoading(true)
    try {
      await firestore().collection('users').add({ name, age: parseInt(age) });
      setName('');
      setAge('');
      fetchData();
      setisLoading(fasle)
      fetchData();
    } catch (error) {
     }
  };

  const updateData = async (id) => {
    setisLoading(true)
     try {
      await firestore().collection('users').doc(id).update({
        name: editName,
        age: ediAge
      });
      console.log('Data updated successfully');
      setEditingId(null);
      setIsModalVisible(false);
      setisLoading(false)
      fetchData();
    } catch (error) {
      console.error('Error updating data:', error);
     }
  };
  
  const deleteData = async (id) => {
    try {
      await firestore().collection('users').doc(id).delete();
      fetchData();
    } catch (error) {
     }
  };

  const handleEdit = (id) => {
    const user = users.find(user => user.id === id);
    seteditName(user.name);
    setediAge(user.age.toString());
    setEditingId(id);
    setIsModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View>
      <Text style={styles.itemText}>Name:{item.name}</Text>
      <Text style={styles.itemText}>Age:{item.age}</Text>

      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleEdit(item.id)}>
          <Text style={styles.button}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteData(item.id)}>
          <Text style={[styles.button, { color: 'red' }]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Home" logout />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholderTextColor={"black"}

        />
        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          style={styles.input}
          placeholderTextColor={"black"}

        />
        <Button text="Add Data" onPress={addData} />
      
      </View>
      {isLoading ? (<ActivityIndicator size={"small"} color={"black"} style={{justifyContent:"center",alignItems:"center",marginTop:20}}/>):(
        <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      
      />
      )}
      
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={{alignItems:"flex-end"}}
            onPress={()=>{
              setIsModalVisible(false)
            }}
            >
              <Image  source={imageIndex.close} style={{height:20,width:20,margin:5,bottom:5}}/>
  
        </TouchableOpacity>
            <TextInput
              value={editName}
              onChangeText={seteditName}
              placeholder="Name"
              style={styles.modalInput}
              placeholderTextColor={"black"}
            />
            <TextInput
              value={ediAge}
              onChangeText={setediAge}
              placeholder="Age"
              keyboardType="numeric"
              style={styles.modalInput}
              placeholderTextColor={"black"}
            />
            <Button   text="Save" onPress={() => updateData(editingId, name, age)} />
          </View>
        </View>
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
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color:"black"
  },
  flatList: {
    flex: 1,
    marginTop: 20,
    marginHorizontal:20
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
     paddingHorizontal: 20,
    margin:5,
    backgroundColor:"hsla(174, 100%, 33%, 1)",
    height:50,
    borderRadius:10
  },
  itemText: {
    fontSize: 14,
    color:"black"
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    fontSize: 16,
    marginLeft: 10,
    color: 'blue',
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
    color:"black"
  },
});

export default HomeScreen;
