// src/api/methods.ts

import axios from 'axios';
import { ENDPOINTS } from '../api/endpoint';

export const fetchObjects = async () => {
  try {
    const res = await axios.get(ENDPOINTS.OBJECTS);
    return res.data;
  } catch (error) {
    console.error('GET Error:', error);
    throw error;
  }
};

export const deleteObject = async (objectId) => {
  try {
    const res = await axios.delete(ENDPOINTS.OBJECT_BY_ID(objectId));
    return res.data;
  } catch (error) {
    console.error('DELETE Error:', error);
    throw error;
  }
};

export const postNewObject = async () => {
  try {
    const res = await axios.post(ENDPOINTS.OBJECTS, {
      name: 'Naveen imac',
      data: {
        year: 2025,
        CPU: 'Apple M4',
        RAM: '32 GB',
      },
    });
    return res.data;
  } catch (error) {
    console.error('POST Error:', error);
    throw error;
  }
};
