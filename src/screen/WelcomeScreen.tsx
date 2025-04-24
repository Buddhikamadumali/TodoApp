import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {RootStackParamList} from './types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CircleDesign from '../components/CircleDesign';

export default function WelcomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <CircleDesign />
      </View>
      <Image source={require('../assets/home.png')} style={styles.image} />

      <Text style={styles.title}>Welcome to Todo App</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    color: '#333',
  },
  button: {
    backgroundColor: '#50C2C9',
    width: 350,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  circleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
