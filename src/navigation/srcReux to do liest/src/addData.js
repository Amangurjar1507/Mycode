import firestore from '@react-native-firebase/firestore';

const addData = async (collection, data) => {
  try {
    await firestore().collection(collection).add(data);
    console.log('Data added successfully');
  } catch (error) {
    console.error('Error adding data: ', error);
  }
};

const getData = async (collection) => {
  try {
    const snapshot = await firestore().collection(collection).get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log('Data retrieved successfully:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};

const updateData = async (collection, id, newData) => {
  try {
    await firestore().collection(collection).doc(id).update(newData);
    console.log('Data updated successfully');
  } catch (error) {
    console.error('Error updating data: ', error);
  }
};

const deleteData = async (collection, id) => {
  try {
    await firestore().collection(collection).doc(id).delete();
    console.log('Data deleted successfully');
  } catch (error) {
    console.error('Error deleting data: ', error);
  }
};

export { addData, getData, updateData, deleteData };