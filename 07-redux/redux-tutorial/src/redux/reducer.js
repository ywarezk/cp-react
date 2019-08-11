

// currentState => {message: '...'}
export default function reducer(currentState, action) {
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