import {combineReducers} from 'redux';
import helloReducer from './hello.reducer';
import todoReducer from './todo.reducer';

const singleUnitedReducer = combineReducers({
    helloWorld: helloReducer,
    todo: todoReducer
});

export default singleUnitedReducer;