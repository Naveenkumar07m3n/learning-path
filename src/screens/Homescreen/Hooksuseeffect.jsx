import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Hooksuseeffect = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect to simulate fetching data on component mount
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      
      // Simulating network request delay
      setTimeout(() => {
        const fakeUser = {
          name: 'Naveen kumar',
          email: 'naveen@example.com',
        };

        setUser(fakeUser);
        setLoading(false);
      }, 2000); 
    };

    fetchUser();
  }, []); // Empty dependency array => run only once when component mounts

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#3b82f6" />
      ) : (
        <View>
          <Text style={styles.name}>Name: {user.name}</Text>
          <Text style={styles.email}>Email: {user.email}</Text>
        </View>
      )}
    </View>
  );
};

export default Hooksuseeffect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  email: {
    fontSize: 16,
    color: '#374151',
    marginTop: 4,
  },
});
