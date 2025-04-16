import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Postmethod = () => {
  const [createdObject, setCreatedObject] = useState(null);

  const postNewObject = async () => {
    try {
      const res = await axios.post('https://api.restful-api.dev/objects', {
        name: 'Naveen imac',
        data: {
          year: 2025,
          CPU: 'Apple M4',
          RAM: '32 GB'
        }
      });

      setCreatedObject(res.data);
      console.log("responseof post==>",res.data)
      Alert.alert('Success', 'Object created successfully!');
    } catch (error) {
      console.error('POST Error:', error);
      Alert.alert('Error', 'Something went wrong while creating the object.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Create New Object" onPress={postNewObject} />

      {createdObject && (
        <View style={styles.result}>
          <Text style={styles.title}>New Object Created:</Text>
          <Text>ID: {createdObject.id}</Text>
          <Text>Name: {createdObject.name}</Text>
          <Text>Data: {JSON.stringify(createdObject.data)}</Text>
        </View>
      )}
    </View>
  );
};

export default Postmethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  result: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
