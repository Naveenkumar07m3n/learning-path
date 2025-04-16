import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Hooksimp = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      }
  

  return (
<View style={styles.container}>
  <Text style={styles.title}>Counter</Text>
  <Text style={styles.counter}>{count}</Text>

  <View style={styles.buttonContainer}>
    <Button title="Increase" onPress={() => setCount(count + 1)} />
    <Button
      title="Decrease"
      onPress={decrement}
    />
    <Button title="Reset" onPress={() => setCount(0)} />
  </View>
</View>
  );
};

export default Hooksimp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 50,
    color: '#3b82f6',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
    gap: 10,
  },
});
