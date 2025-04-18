import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { deleteObject } from '../../../api/methods'; //  Import the centralized method

const Deletmethod = () => {
  const handleDelete = async () => {
    const objectId = 'YOUR_OBJECT_ID_HERE'; //  Replace this with a real ID or make it dynamic

    try {
      const res = await deleteObject(objectId); //  Use shared delete method
      Alert.alert('Deleted', `Object with ID ${objectId} was deleted successfully.`);
      console.log('DELETE Response:', res);
    } catch (error) {
      Alert.alert('Error', 'Failed to delete object.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Delete Object" onPress={handleDelete} color="#d9534f" />
    </View>
  );
};

export default Deletmethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fefefe',
  },
});
