import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../_store/reducers';


export default ({ element }) => {
    const persistConfig = {
        key: 'root',
        storage,
        blacklist: [
            // 'count',
        ],
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    let store = createStore(persistedReducer);
    let persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {element}
            </PersistGate>
        </Provider>);
}
