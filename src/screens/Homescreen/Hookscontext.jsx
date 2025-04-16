import React, { useContext, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { AuthContext } from '../../screens/Homescreen/Authscreen/Authcontext';

const Hookscontext = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.text}>Welcome, {user.name}!</Text>
          <Button title="Logout" onPress={logout} />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            value={username}
            onChangeText={setUsername}
          />
          <Button title="Login" onPress={() => login(username)} />
        </>
      )}
    </View>
  );
};

export default Hookscontext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});
