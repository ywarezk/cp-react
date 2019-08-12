
// const initialState = {
//     helloWorld: {
//         message: 'hello from redux'
//     },
//     todo: {
//         tasks: []
//     },
//     settings: {

//     }
// }

const initialState = {
    message: 'hello from redux'
}

// currentState => {message: '...'}
export default function reducer(currentState = initialState, action) {
    switch(action.type) {
        case 'SET_MESSAGE':
            // currentState['message'] = action.payload;
            // return currentState; // Error state is immulatable!
            return {
                ...currentState,
                message: action.payload
            }
        default:
            return currentState;
    }
}