import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore , combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'; 
import logger from 'redux-logger';

const feedbackData = (state = {feeling: 0, understanding: 0, support: 0, comments: ''}, action) => {
    switch(action.type){
        case 'ADD_FEELING':
        return {
            ...state, 
            feeling: action.payload
        };
        case 'ADD_UNDERSTANDING':
        return {
            ...state, 
            feeling: action.payload
        };
        case 'ADD_SUPPORT':
        return {
            ...state, 
            feeling: action.payload
        };
        case 'ADD_COMMENTS':
        return {
            ...state, 
            feeling: action.payload
        };
    }
    // return {
    //     ...state,
    //     [action.payload.key]: action.payload.value
    // };
}

// ({type: 'ADD_DATA', payload: {
//     key: pageOne,
//     value: 14238114
// }})


const store = createStore(
    combineReducers({
        feedbackData
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
