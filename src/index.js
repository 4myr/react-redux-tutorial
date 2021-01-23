import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { counterReducer } from './store/reducers/counter';
import { resultReducer } from './store/reducers/result';

const store = createStore(combineReducers({
    ctr: counterReducer,
    res: resultReducer
}));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
