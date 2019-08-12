import {createStore, applyMiddleware} from 'redux';
import unitedReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
    unitedReducer,
    process.env.NODE_ENV !== 'production' && composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store;