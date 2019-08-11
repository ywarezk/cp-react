// actions represents something that happened in our app
// { type : String, payload? : any}
// 

// { type : 'SET_MESSAGE', payload: 'dynamic...'}

export function setMessage(newMessage) {
    return { 
        type : 'SET_MESSAGE', 
        payload: newMessage
    }
}