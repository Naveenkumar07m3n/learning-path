// screens/Socketscreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {
  initiateSocket,
  disconnectSocket,
  subscribeToMessages,
  sendMessage,
} from '../../sockets/SocketServices'; // Update path if needed

const Socketscreen = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    initiateSocket(); // Connect socket

    // Listen for incoming messages
    subscribeToMessages((msg) => {
      setChat((prev) => [...prev, msg]);
    });

    return () => {
      disconnectSocket(); // Clean up on unmount
    };
  }, []);

  const handleSend = () => {
    sendMessage(message); // Emit message
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Socket Chat</Text>

      {chat.map((msg, index) => (
        <Text key={index} style={styles.message}>{msg}</Text>
      ))}

      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message"
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

export default Socketscreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
  message: { marginVertical: 2, backgroundColor: '#eee', padding: 6, borderRadius: 5 }
});
