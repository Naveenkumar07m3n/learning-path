
import React, { useReducer } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Step 1: Initial state
const initialState = {
  username: '',
  email: '',
  password: '',
};

// Step 2: Reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value, // dynamic field update it means it set the email : user enter into the form field
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const RegisterForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = () => {
    // You can handle validation or API submission here
    console.log('Form submitted:', state);
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={state.username}
        onChangeText={(text) =>
          dispatch({ type: 'UPDATE_FIELD', field: 'username', value: text })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={state.email}
        keyboardType="email-address"
        onChangeText={(text) =>
          dispatch({ type: 'UPDATE_FIELD', field: 'email', value: text })
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={state.password}
        onChangeText={(text) =>
          dispatch({ type: 'UPDATE_FIELD', field: 'password', value: text })
        }
      />

      <Button title="Register" onPress={handleSubmit} />
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 5,
  },
});
