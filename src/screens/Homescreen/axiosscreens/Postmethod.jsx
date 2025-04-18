import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { postNewObject } from '../../../api/methods'; //  Import the shared API method

const Postmethod = () => {
  const [createdObject, setCreatedObject] = useState(null);

  const handlePostObject = async () => {
    try {
      const res = await postNewObject(); //  Use centralized method
      setCreatedObject(res);
      console.log("responseof post ==>", res);
      Alert.alert('Success', 'Object created successfully!');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while creating the object.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Create New Object" onPress={handlePostObject} />

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
