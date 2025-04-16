import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const Putmethod = () => {
  const handleUpdate = async () => {
    const objectId = 'ff808181932badb601963e5b3594073b'; // Replace this with a real ID

    try {
      const res = await axios.put(`https://api.restful-api.dev/objects/${objectId}`, {
        name: 'updated naveen',
        data: {
          year: 2026,
          CPU: 'Apple M5',
          RAM: '64 GB',
        }
      });

      Alert.alert('Success', 'Object updated!');
      console.log('PUT Response:', res.data);
    } catch (error) {
      console.error('PUT Error:', error);
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
    button: {
      marginTop: 10,
      backgroundColor: '#007bff',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  