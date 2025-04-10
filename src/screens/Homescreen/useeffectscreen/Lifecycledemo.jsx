import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LifecycleDemo = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  // componentDidMount
  useEffect(() => {
    console.log(' Component Mounted');

    // Simulate fetching user data
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => {res.json()}
      )
      .then(data => {
        setUser(data);
        console.log("data-->",data)
        console.log(' User Data Loaded');
      });

    // componentWillUnmount
    return () => {
      console.log('Component Will Unmount');
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (count > 0) {
      console.log(` Count Updated: ${count}`);
    }
  }, [count]);

  // Timer with cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(' Timer tick');
    }, 2000);

    return () => {
      clearInterval(interval);
      console.log(' Timer cleared');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> React Native </Text>

      <Text style={styles.text}>
        <Text style={styles.bold}>User:</Text> {user ? user.name : 'Loading...'}
      </Text>

      <Text style={styles.text}>
        <Text style={styles.bold}>Count:</Text> {count}
      </Text>

      <Button title=" Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default LifecycleDemo;
