import React from 'react';
import s from './TodoList.module.css';
import TaskCounter from '../taskCounter/TaskCounter';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className={s.todoList_wrapper}>
                <TaskCounter />
            </div>
        );
    }
}

export default TodoList;