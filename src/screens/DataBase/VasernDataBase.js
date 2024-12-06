import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Vasern from 'vasern';

const TodoSchema = {
  name: 'Todos',
  props: {
    id: 'int',
    name: 'string',
    note: '?string',
    completed: 'boolean',
  },
};

const MyVasern = new Vasern({
  schemas: [TodoSchema],
});

const HomeScreen = () => {
  const [textInput, setTextInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
0  
  const getAllTasks = () => {
    setIsLoading(true);
    const allTasks = MyVasern.Todos.data();
    setTasks(allTasks);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const createTask = () => {
    if (textInput === '') {
      alert('Please Add User');
    } else {
      const newTask = {id: newId, name: textInput, completed: false};
      MyVasern.Todos.insert(newTask, true);

      setTextInput('');
      getAllTasks();
    }
  };
  const deleteTask = id => {
    try {
      const taskId = String(id);
      MyVasern.Todos.remove({id: taskId}, true);
      getAllTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const deleteAllTasks = () => {
    try {
      const allTasks = MyVasern.Todos.data();
      allTasks.map(task => {
        const taskId = String(task.id);
        MyVasern.Todos.remove({id: taskId}, true);
      });
      setTasks([]);
    } catch (error) {
      console.error('Error deleting all tasks:', error);
    }
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>Enter User</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter User name"
        placeholderTextColor={'#000'}
        value={textInput}
        onChangeText={text => setTextInput(text)}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          style={styles.list}
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View key={item.id} style={styles.listItem}>
              <Text style={styles.taskText}>User Name:- {item.name}</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.deleteButton}
                onPress={() => deleteTask(item.id)}>
                <Text style={styles.deleteButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.addButton} onPress={() => createTask()}>
          <Text style={styles.addButtonText}>Add User</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => deleteAllTasks()}>
          <Text style={styles.addButtonText}>Delete All User</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => getAllTasks()} style={styles.addButton}>
        <Text style={styles.addButtonText}>All User Show</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  textHeading: {
    textAlign: 'left',
    marginBottom: 10,
    color: '#035084',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#0d0b24',
    borderWidth: 0.8,
    borderRadius: 10,
    marginBottom: 8,
    paddingLeft: 10,
  },
  addButton: {
    backgroundColor: '#0f73a2',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  list: {
    marginTop: 8,
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskText: {
    fontSize: 18,
    color: '#000',
    flex: 1,
    fontWeight: '500',
  },
  deleteButton: {
    backgroundColor: '#515081',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 14,
  },

  deleteAllButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
