
export const SET_TASKS = 'SET_TASKS';

export function setTasks(tasks) {
    return {
        type: SET_TASKS,
        payload: tasks
    }
}

export function fetchTasks() {
    return async function(dispatch) {
        const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const tasks = await response.json();
        dispatch(setTasks(tasks));
    }
}