import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {DeletePopUp} from '../screen/types';

export default function DeleteTask({onConfirm, onCancel}: DeletePopUp) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete this task?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onConfirm}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onCancel}>
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 281,
    height: 143,
    backgroundColor: '#000000',
    borderRadius: 4,
    borderTopWidth: 4,
    borderTopColor: '#09D1F4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    position: 'absolute',
    left: '50%',
    transform: [{translateX: -140}],
    zIndex: 999,
  },
  title: {
    fontSize: 18,
    color: '#D9D9D9',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: 64,
    height: 24,
    backgroundColor: '#242320',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#09D1F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 10,
    color: '#D9D9D9',
  },
});
