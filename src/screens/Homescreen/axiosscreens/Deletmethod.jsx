import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Deletmethod = () => {
  const handleDelete = async () => {
    const objectId = 'YOUR_OBJECT_ID_HERE'; //  Replace with a real object ID

    try {
      const res = await axios.delete(`https://api.restful-api.dev/objects/${objectId}`);
      Alert.alert('Deleted', `Object with ID ${objectId} was deleted successfully.`);
      console.log('DELETE Response:', res.data);
    } catch (error) {
      console.error('DELETE Error:', error);
      Alert.alert('Error ', 'Failed to delete object.');
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
