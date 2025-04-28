// src/screens/NewsAPI.js
import axios from 'axios';

const API_KEY = '2e0449bfa73e48688d97c1e31484be0a';
const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchAppleNews = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: 'apple', //keyword from that api
        from: '2025-04-24',
        to: '2025-04-24',
        sortBy: 'popularity',
        apiKey: API_KEY,
      },
    });
    console.log("response.data.articles",response.data.articles)
    return response.data.articles;
  } catch (error) {
    console.error('API fetch error:', error);
    return [];
  }
};
