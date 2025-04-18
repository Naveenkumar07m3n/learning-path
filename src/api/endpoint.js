const BASE_URL = 'https://api.restful-api.dev';

export const ENDPOINTS = {
  OBJECTS: `${BASE_URL}/objects`,
  OBJECT_BY_ID: (id) => `${BASE_URL}/objects/${id}`,
}