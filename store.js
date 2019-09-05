import {createEpicMiddleware} from 'redux-observable';
import {InitialState} from "./reducers/exampleReducer";
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
// import exampleReducers from './reducers/exampleReducer';
import rootEpics from './root';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk'
import {reducer} from './reducers/exampleReducer';

const epicMiddleware = createEpicMiddleware();
// Configure Devtools for redux
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const reducer = combineReducers({
//     users: exampleReducers,
// });

// Start rxjs redux effects
epicMiddleware.run(rootEpics);

export function initializeStore(initialState = InitialState) {
    // return createStore(
    //     featureReducers,
    //     initialState,
    //     composeEnhancers(
    //         applyMiddleware(
    //             logger,
    //             thunk,
    //             epicMiddleware
    //         )
    //     )
    // )
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}
