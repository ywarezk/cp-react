import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(
    reducer,
    {
        message: 'hello from redux'
    }
)

export default store;