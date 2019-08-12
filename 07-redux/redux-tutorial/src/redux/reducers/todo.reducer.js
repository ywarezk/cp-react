import { SET_TASKS} from '../actions/todo.actions';
import {keyBy} from 'lodash';

const initialState = {
    tasks: {}
}

export default function todoReducer(
    state = initialState,
    action
    ) {
    
    switch(action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: keyBy(action.payload, function(singleTodo) {
                    return singleTodo.id;
                })
                // tasks: [...state.tasks, action.payload]
            }
        default:
            return state;
    }

}