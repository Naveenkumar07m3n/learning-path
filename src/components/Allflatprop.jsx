import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

const DATA = [
  {id: '1', name: 'Alice'},
  {id: '2', name: 'Bob'},
  {id: '3', name: 'Charlie'},
  {id: '4', name: 'David'},
];



const ContactList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [contacts, setContacts] = useState(DATA);

  

  const handleEndReached = () => {
    console.log('Reached end of list');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => <Text style={styles.header}>Contact List</Text>}
        ListFooterComponent={() => <Text style={styles.footer}>End of List</Text>}
        ListEmptyComponent={() => <Text style={styles.empty}>No contacts found.</Text>} 
        onEndReached={handleEndReached}
      />
    </View>
  );
 
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
    },
    item: {
      padding: 20,
      fontSize: 18,
    },
    separator: {
      height: 1,
      backgroundColor: '#ccc',
    },
    header: {
      padding: 10,
      fontSize: 20,
      fontWeight: 'bold',
    //   backgroundColor: '#f0f0f0',
    },
    footer: {
      padding: 10,
      fontStyle: 'italic',
      textAlign: 'center',
      color: '#555',
    },
    empty: {
      textAlign: 'center',
      marginTop: 50,
      fontSize: 18,
      color: '#999',
    },
  });
export default ContactList;
