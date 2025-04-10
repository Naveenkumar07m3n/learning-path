import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const fruits = [
  { id: '1', name: 'Apple' },
  { id: '2', name: 'Banana' },
  { id: '3', name: 'Mango' },
  { id: '4', name: 'Pineapple' },
  { id: '5', name: 'Grapes' },
  { id: '6', name: 'Orange' },
  { id: '7', name: 'Lemon' }
];

class Ccllaass extends Component {
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  render() {
    return (
      <FlatList
        data={fruits}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

export default Ccllaass;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  text: {
    fontSize: 18
  }
});


