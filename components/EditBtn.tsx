import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
type Props = {
  onPress: () => void;
};

export default function EditBtn({onPress}: Props) {
  return (
    <View>
      <TouchableOpacity style={styles.editButton} onPress={onPress}>
        <Image source={require('../assets/Edit.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  editButton: {
    width: 36,
    height: 36,
    borderRadius: 5,
    backgroundColor: '#FBF9F3',
    borderWidth: 2,
    borderColor: '#09D1F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
