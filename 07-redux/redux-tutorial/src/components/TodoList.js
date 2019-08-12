/**
 * send ajax request
 * fetch todos
 * update state
 */

import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../redux/actions/todo.actions';
import todoService from '../services/todo.service';

class TodoList extends React.Component {
    componentDidMount() {
        // todoService.fetchTasks();
        this.props.fetchTasks();
    }

    render() {
        return (
            <ul className="list-group">
                {
                    Object.values(this.props.tasksFromState).map(
                        function(todoItem) {
                            return (
                                <li className="list-group-item" key={todoItem.id}>{todoItem.title}</li>
                            )
                        }
                    )
                }
                
            </ul>
        )
    }
}

export default connect(
    state => ({
        tasksFromState : state.todo.tasks
    }), 
    {
        fetchTasks
    }
)(TodoList)