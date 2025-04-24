import React, {useState} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
type Props = {
  onCancel: () => void;
  onSave: (newTask: string, newDescription: string) => void;
  initialTitle: string;
  initialDescription: string;
};

export default function EditTask({
  onCancel,
  onSave,
  initialTitle,
  initialDescription,
}: Props) {
  const [task, setTask] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.taskInput}
        placeholder="Task Name"
        placeholderTextColor="#999"
        value={task}
        onChangeText={text => setTask(text)}
      />
      <TextInput
        style={styles.descriptionInput}
        placeholder="Description..."
        placeholderTextColor="#999"
        value={description}
        onChangeText={text => setDescription(text)}
        multiline={true}
        textAlignVertical="top"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSave(task, description)}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    width: 360,
    padding: 18,
    justifyContent: 'space-between',
  },
  taskInput: {
    width: 324,
    height: 50,
    backgroundColor: '#242320',
    borderColor: '#09D1F4',
    borderWidth: 1,
    borderRadius: 4,
    color: '#FFFFFF',
    fontSize: 14,
    paddingHorizontal: 8,
  },
  descriptionInput: {
    width: 324,
    height: 50,
    backgroundColor: '#242320',
    borderColor: '#09D1F4',
    borderWidth: 1,
    borderRadius: 4,
    color: '#FFFFFF',
    fontSize: 14,
    padding: 8,
    marginTop: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  button: {
    width: 64,
    height: 24,
    backgroundColor: '#242320',
    borderColor: '#09D1F4',
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#D9D9D9',
    fontSize: 10,
  },
});
