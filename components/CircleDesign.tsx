import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function CircleDesign() {
  return (
    <View style={styles.container}>
      <View style={styles.circleOne} />
      <View style={styles.circleTwo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 270,
    backgroundColor: '#F2F7F6',
    overflow: 'hidden',
  },
  circleOne: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(143,225,215, 0.4)',
    position: 'absolute',
    top: -10,
    left: -100,
  },
  circleTwo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(143,225,215, 0.4)',
    position: 'absolute',
    top: -100,
    left: -10,
  },
});
