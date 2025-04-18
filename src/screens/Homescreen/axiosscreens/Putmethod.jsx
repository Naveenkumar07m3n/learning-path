import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { updateObject } from '../../../api/methods'; // Import the shared PUT method

const Putmethod = () => {
  const handleUpdate = async () => {
    const objectId = 'ff808181932badb601963e5b3594073b'; //  Replace with real ID

    const updatedData = {
      name: 'updated naveen',
      data: {
        year: 2026,
        CPU: 'Apple M5',
        RAM: '64 GB',
      },
    };

    try {
      const res = await updateObject(objectId, updatedData); //  Use centralized function
      Alert.alert('Success', 'Object updated!');
      console.log('PUT Response:', res);
    } catch (error) {
      Alert.alert('Error', 'Failed to update object.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Update Object (PUT)" onPress={handleUpdate} />
    </View>
  );
};

export default Putmethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
});
