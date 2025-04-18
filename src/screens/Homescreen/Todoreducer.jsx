// import React, { useReducer, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';

// // Initial State
// const initialState = [];

// // Reducer
// const todoReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: Date.now().toString(),
//           text: action.payload,
//           completed: false,
//         },
//       ];
//     case 'TOGGLE_TODO':
//       return state.map((todo) =>
//         todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//       );
//     case 'REMOVE_TODO':
//       return state.filter((todo) => todo.id !== action.payload);
//     case 'EDIT_TODO':
//       return state.map((todo) =>
//         todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
//       );
//     default:
//       return state;
//   }
// };

// const Todoreducer = () => {
//   const [todos, dispatch] = useReducer(todoReducer, initialState);
//   const [input, setInput] = useState('');
//   const [editingId, setEditingId] = useState(null);

//   const handleAddOrEdit = () => {
//     if (!input.trim()) return;

//     if (editingId) {
//       dispatch({ type: 'EDIT_TODO', payload: { id: editingId, text: input } });
//       setEditingId(null);
//     } else {
//       dispatch({ type: 'ADD_TODO', payload: input });
//     }

//     setInput('');
//   };

//   const startEditing = (todo) => {
//     setEditingId(todo.id);
//     setInput(todo.text);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Todo List</Text>

//       <View style={styles.inputRow}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter a task"
//           value={input}
//           onChangeText={setInput}
//         />
//         <Button title={editingId ? 'Update' : 'Add'} onPress={handleAddOrEdit} />
//       </View>

//       <FlatList
//         data={todos}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View
//             style={[
//               styles.todoItem,
//               item.completed && styles.todoCompleted,
//             ]}
//           >
//             <TouchableOpacity
//               style={{ flex: 1 }}
//               onPress={() => dispatch({ type: 'TOGGLE_TODO', payload: item.id })}
//             >
//               <Text
//                 style={[
//                   styles.todoText,
//                   item.completed && { textDecorationLine: 'line-through' },
//                 ]}
//               >
//                 {item.text}
//               </Text>
//             </TouchableOpacity>

//             <View style={styles.actionButtons}>
//               <TouchableOpacity onPress={() => startEditing(item)}>
//                 <Text style={styles.edit}>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => dispatch({ type: 'REMOVE_TODO', payload: item.id })}>
//                 <Text style={styles.delete}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default Todoreducer;

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     marginTop: 60,
//     flex: 1,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#111827',
//   },
//   inputRow: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     flex: 1,
//     padding: 10,
//     marginRight: 10,
//     borderRadius: 8,
//   },
//   todoItem: {
//     padding: 16,
//     borderRadius: 8,
//     backgroundColor: '#f3f4f6',
//     marginBottom: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   todoCompleted: {
//     backgroundColor: '#d1fae5',
//   },
//   todoText: {
//     fontSize: 16,
//     color: '#111827',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     gap: 12,
//     marginLeft: 10,
//   },
//   edit: {
//     color: '#3b82f6',
//     fontWeight: '600',
//     marginRight: 10,
//   },
//   delete: {
//     color: '#ef4444',
//     fontWeight: '600',
//   },
// });
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
