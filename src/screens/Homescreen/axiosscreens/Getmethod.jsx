import React, { useEffect, useState } from 'react';
import { View,Text,FlatList, StyleSheet,ActivityIndicator,Alert,
} from 'react-native';
import { fetchObjects } from '../../../api/methods'; // Import from your API layer

const Getmethod = () => {
  const [objects, setObjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadObjects = async () => {
    setLoading(true);
    try {
      const data = await fetchObjects();
      setObjects(data);
    } catch {
      Alert.alert('Error', 'Failed to fetch objects.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadObjects();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={objects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subTitle}>{JSON.stringify(item.data)}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Getmethod;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#555',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
