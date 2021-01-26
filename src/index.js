import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { counterReducer } from './store/reducers/counter';
import { resultReducer } from './store/reducers/result';
import thunk from 'redux-thunk';


const logger = (store) => {
    return function getNext(next) {
        return function dispatchAndLog(action) {
            console.log('[Dispatch]', action);
            const result = next(action);
            console.log('[Next State', store.getState());
            return result;
        }
    }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const store = createStore(
    combineReducers({
        ctr: counterReducer,
        res: resultReducer
    }), composeEnhancer(applyMiddleware(logger, thunk))
);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
