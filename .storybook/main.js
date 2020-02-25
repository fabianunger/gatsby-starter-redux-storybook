
// import ReduxWrapWithProvider from '../src/global/ReduxWrapWithProvider';
// import { addDecorator } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import styled from 'styled-components';
// import GlobalStyle from '../src/global/GlobalStyle';
// import { Provider } from 'react-redux';
// import { persistReducer, persistStore } from 'redux-persist';
// import rootReducer from '../src/_store/reducers';
// import { createStore } from 'redux';
// import storage from "redux-persist/lib/storage"
// import { PersistGate } from "redux-persist/integration/react"
//
// const Wrapper = styled.div`
//   display: flex;
//   flex: 1;
//   height: 100vh;
//   align-items: center;
//   justify-content: center;
// `;
// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: [
//         'count',
//     ],
// };
//
// const persistedReducer = persistReducer(persistConfig, rootReducer)
//
// let store = createStore(persistedReducer)
// let persistor = persistStore(store)
//
// const Decorator = storyFn => (
//     <ReduxWrapWithProvider>{storyFn()}</ReduxWrapWithProvider>
// );
// //
// addDecorator(Decorator);
//
// global.___loader = {
//     enqueue: () => {
//     },
//     hovering: () => {
//     },
// };
//
// global.__PATH_PREFIX__ = '';
// window.___navigate = (pathname) => {
//     action('NavigateTo:')(pathname);
// };
//
// // const req = require.context('../src/components', true, /\.stories\.js$/);
// //
// // function loadStories() {
// //     req.keys().forEach(filename => req(filename));
// // }
//
// configure(loadStories, module);

module.exports = {
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-notes',
    ],
    stories: ['../src/components/**/*.stories.(js|mdx)'],
};
//
// module.exports = ({ config }) => {
//     // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
//     config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
//
//     // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
//     config.module.rules[0].use[0].loader = require.resolve("babel-loader");
//
//     // use @babel/preset-react for JSX and env (instead of staged presets)
//     config.module.rules[0].use[0].options.presets = [
//         require.resolve("@babel/preset-react"),
//         require.resolve("@babel/preset-env"),
//     ];
//
//     config.module.rules[0].use[0].options.plugins = [
//         // use @babel/plugin-proposal-class-properties for class arrow functions
//         require.resolve("@babel/plugin-proposal-class-properties"),
//         // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
//         require.resolve("babel-plugin-remove-graphql-queries"),
//     ];
//
//     // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
//     config.resolve.mainFields = ["browser", "module", "main"];
//
//     return config
// };
