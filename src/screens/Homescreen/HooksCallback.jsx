import React, { useState, useCallback,useMemo, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

//Counter is a child component that receives a function onIncrement as a prop.
// If the parent re-renders, this function will be recreated — unless we use useCallback.
const Counter = ({ onIncrement }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Increase Count" onPress={onIncrement} />
    </View>
  );
};

const HooksCallback = () => {
  const [count, setCount] = useState(0);

  // useCallback memoizes the function so it's not recreated on every render
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Counter onIncrement={handleIncrement} />
    </View>
  );
};

export default HooksCallback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
