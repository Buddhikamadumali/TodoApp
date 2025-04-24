import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Task from '../components/Task';
import NoTask from '../components/NoTask';
import DeleteTask from '../components/DeleteTask';
import CircleDesign from '../components/CircleDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {useTaskStore} from '../store/useTaskStore';

export default function HomeScreen() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const {tasks, addTask, deleteTask, toggleComplete, loadTasks} =
    useTaskStore();

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Error saving tasks:', error);
      }
    };

    saveTasks();
  }, [tasks]);

  const handleRequestDelete = (id: number) => {
    setSelectedTaskId(id);
    setShowDeletePopup(true);
  };

  const onDelete = (id: number) => {
    if (id == null) return;
    deleteTask(id);
  };

  const handleToggleComplete = (id: number) => {
    if (id == null) return;
    toggleComplete(id);
  };

  const handleAddTask = () => {
    if (showDeletePopup || task.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title: task,
      description: description,
      isCompleted: false,
    };

    addTask(newTask);
    setTask('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <CircleDesign />
      </View>
      <View style={styles.addTask}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Task"
          placeholderTextColor="#999"
          value={task}
          onChangeText={text => setTask(text)}
          multiline={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#999"
          value={description}
          onChangeText={text => setDescription(text)}
          multiline={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>

      {/* Scroll view for tasks */}
      <ScrollView style={styles.taskList}>
        {tasks.length === 0 ? (
          <NoTask />
        ) : (
          tasks.map(item => (
            <Task
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              isCompleted={item.isCompleted}
              onDelete={onDelete}
              handleToggleComplete={handleToggleComplete}
              onRequestDelete={() => handleRequestDelete(item.id)}
            />
          ))
        )}
      </ScrollView>
      {showDeletePopup && selectedTaskId !== null && (
        <View style={styles.popupOverlay}>
          <DeleteTask
            onConfirm={() => {
              onDelete(selectedTaskId);
              setShowDeletePopup(false);
            }}
            onCancel={() => setShowDeletePopup(false)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f5',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  },
  addTask: {
    flex: 1,
    position: 'absolute',
    top: 90,
  },
  input: {
    width: 340,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 13,
    marginBottom: 12,
    elevation: 1,
    paddingVertical: 10,
  },
  button: {
    width: 340,
    height: 60,
    backgroundColor: '#50C2C9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskList: {
    marginTop: 304,
  },
  popupOverlay: {
    position: 'absolute',
    top: 392,
    alignItems: 'center',
    zIndex: 999,
  },
  circleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
