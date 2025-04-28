// src/screens/NewsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import { fetchAppleNews } from '../../api/newsscreen';

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchAppleNews();
      setNews(data);
      setLoading(false);
    };

    getNews();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.image} />}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f2f2f2',
    elevation: 3,
    padding: 10,
  },
  image: {
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 8,
  },
  desc: {
    fontSize: 14,
    color: '#333',
  },
});
