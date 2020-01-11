import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers/rootReducer';



// const composeEnhancers =
//     typeof window === 'object' &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         }) : compose;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    // composeEnhancers(
    // )
);

console.log('store.getState: ', store.getState())