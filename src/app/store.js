import { configureStore } from '@reduxjs/toolkit';
import PostsSlice from '../features/posts/PostsSlice';
import storage from 'redux-persist/lib/storage' 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
  key: 'posts',
  storage,
}

const persistedReducer = persistReducer(persistConfig, PostsSlice)

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
     },
   }),
  });


export const persistor = persistStore(store);
export default store;