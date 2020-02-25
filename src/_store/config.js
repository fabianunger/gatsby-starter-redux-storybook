import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistReducer, persistStore } from 'redux-persist';
import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';


export default ({ element }) => {

    const persistConfig = {
        key: 'root',
        storage,
        blacklist: [
            // 'count',
        ],
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = createStore(persistedReducer);
    const persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {element}
            </PersistGate>
        </Provider>);
}
