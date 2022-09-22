import reducers from '../reducers';
import { configureStore } from '@reduxjs/toolkit';

import { 
    persistReducer,persistStore,
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER

} from 'redux-persist';
import SQLite from 'react-native-sqlite-storage';
import SQLiteStorage from 'redux-persist-sqlite-storage';
// import { createNetworkMiddleware } from 'react-native-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults/index';
import thunk from 'redux-thunk';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import { createOffline } from '@redux-offline/redux-offline';

const config ={
  name: 'offline-storage',
  location: 'default'
}
const storeEngine = SQLiteStorage(SQLite);

SQLite.DEBUG(true);
SQLite.enablePromise(true)
const persistConfig = {
    key: 'root',
    storage:storeEngine,
    storageReconciler:autoMergeLevel1
};


const {
  middleware: offlineMiddleware,
  enhanceReducer: offlineEnhanceReducer,
  enhanceStore: offlineEnhanceStore
} = createOffline({
  ...offlineConfig,
  persist: true
});

const persistedReducer = persistReducer(persistConfig,   offlineEnhanceReducer(reducers));

// export const store = configureStore({reducer:persistedReducer}, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)) )
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(offlineMiddleware),
    enhancers:[offlineEnhanceStore]
  })
// export const store = configStore()
export const persistor = persistStore(store)
// export const store = configureStore();

export {storeEngine}





