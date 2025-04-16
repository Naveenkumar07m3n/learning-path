// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/CounterSlice'; // Example slice

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer, // Add other reducers here
//   },
// }); 
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';

export const store = configureStore({
  reducer: {
    user: authReducer,
  },
});

