import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
//import ability to use takeEvery and put with saga
import { takeEvery, put } from "redux-saga/effects";
//import axios so we can make requests from generator functions
import axios from 'axios';
// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery("GET_MOVIES", getMovies);
}

function* getMovies() {
//purpose of this function is to get an array of movie objects to send to a reducer
//so- name what what will be gotten/sent
//call it allMovies, might change later if search functionality implemented
    const allMovies = yield axios.get('path to get req here');
//after (not before!) the movies are gotten, dispatch em to the reducer!
//because axios returns lots of stuff, need to use .data.data to actually get to the array
    console.log(`back in getMovies with result`, allMovies);

    yield put({type: "SET_MOVIES", payload: allMovies})
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
