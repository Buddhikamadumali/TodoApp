import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Switch,
  Modal,
} from 'react-native';
import {TaskType} from '../screen/types';
import EditBtn from './EditBtn';
import EditTask from './EditTask';
import {useTaskStore} from '../store/useTaskStore';

export default function Task({
  id,
  title,
  description,
  isCompleted,
  onDelete,
  handleToggleComplete,
  onRequestDelete,
}: TaskType) {
  const [showEditButton, setShowEditButton] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editTaskTitle, setEditTaskTitle] = useState(title);
  const [editTaskDescription, setEditTaskDescription] = useState(description);

  const {editTask} = useTaskStore();

  const handleCardPress = () => {
    setShowEditButton(!showEditButton);
  };
  const handleOpenEditPopup = () => {
    setEditTaskTitle(title);
    setEditTaskDescription(description);
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCardPress} activeOpacity={0.7}>
        <View style={styles.card}>
          <View style={styles.textContainer}>
            <Text style={[styles.title, isCompleted && styles.completedText]}>
              {editTaskTitle}
            </Text>
            <Text style={[styles.body, isCompleted && styles.completedText]}>
              {editTaskDescription}
            </Text>
          </View>
          <View style={styles.actionContainer}>
            <Switch
              value={isCompleted}
              onValueChange={() => handleToggleComplete(id)}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => onRequestDelete(id)}>
              <Image source={require('../assets/Union.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      {showEditButton && (
        <View style={styles.editButtonContainer}>
          <EditBtn onPress={handleOpenEditPopup} />
        </View>
      )}
      <Modal
        visible={showEditPopup}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseEditPopup}>
        <View style={styles.modalBackground}>
          <EditTask
            onCancel={handleCloseEditPopup}
            initialTitle={editTaskTitle}
            initialDescription={editTaskDescription}
            onSave={(newTitle, newDesc) => {
              setEditTaskTitle(newTitle);
              setEditTaskDescription(newDesc);
              editTask(id, newTitle, newDesc);
              handleCloseEditPopup();
            }}
          />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  card: {
    width: 340,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  body: {
    fontSize: 14,
    color: '#333',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  checkbox: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: '#09D1F4',
    backgroundColor: '#FBF9F3',
    marginRight: 8,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 5,
    backgroundColor: '#FBF9F3',
    borderWidth: 2,
    borderColor: '#09D1F4',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  editButtonContainer: {
    marginTop: 3,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 395,
    alignItems: 'center',
  },
});
