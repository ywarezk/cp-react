import store from '../redux/store';
import {setTasks} from '../redux/actions/todo.actions';

class TodoService {
    constructor() {
        this.url = 'https://nztodo.herokuapp.com/api/task/?format=json'
    }

    /**
     * @returns Promise<json>
     */
    fetchTasks = async () => {
        const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const tasks = await response.json();
        store.dispatch(setTasks(tasks));
        // return tasks;
    }
}

export default new TodoService();