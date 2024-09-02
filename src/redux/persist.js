import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import authReducer from './authSlice'; // Import your auth reducer

const persistConfig = {
  key: 'root',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer); // Persist auth reducer
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer); // Persist contacts reducer

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    auth: persistedAuthReducer, // Add the auth reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ensure compatibility with non-serializable data (e.g., functions, symbols)
    }),
});

export const persistor = persistStore(store);
