import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function NoTask() {
  return (
    <View>
      <Text style={styles.noTask}>No tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  noTask: {
    fontSize: 24,
    color: '#000000',
    borderBottomColor: '#50C2C9',
    borderBottomWidth: 3,
    borderTopColor: '#50C2C9',
    borderTopWidth: 3,
    padding: 20,
    marginTop: 168,
  },
});
