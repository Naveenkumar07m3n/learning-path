import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import styles from '../../utils/styles/Hooksmemo';
const users = [
  { id: '1', name: 'Alice Johnson' },
  { id: '2', name: 'Bob Smith' },
  { id: '3', name: 'Charlie Brown' },
  { id: '4', name: 'Diana Ross' },
  { id: '5', name: 'Ethan Hunt' },
];

const Hooksmemo = () => {
  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(() => {
    //filtering the user
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Users</Text>

      <TextInput
        style={styles.input}
        placeholder="Search by name"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Hooksmemo;
