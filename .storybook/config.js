import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import GlobalStyle from '../src/global/GlobalStyle';
import { Provider } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from '../src/_store/reducers';
import { createStore } from 'redux';
import storage from "redux-persist/lib/storage"
import { PersistGate } from "redux-persist/integration/react"

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
const persistConfig = {
    key: "root",
    storage,
    blacklist: [
        'count',
    ],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

const Decorator = storyFn => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Wrapper>
                <GlobalStyle/>
                {storyFn()}
            </Wrapper>
        </PersistGate>
    </Provider>
);

addDecorator(Decorator);

global.___loader = {
    enqueue: () => {
    },
    hovering: () => {
    },
};

global.__PATH_PREFIX__ = '';
window.___navigate = (pathname) => {
    action('NavigateTo:')(pathname);
};

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
