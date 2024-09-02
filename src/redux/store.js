import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import authReducer from './authSlice'; // Assuming you have an authSlice

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer, // Include the auth reducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ensure compatibility with non-serializable data (e.g., functions, symbols)
    }),
});
