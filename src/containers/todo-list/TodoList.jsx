import React from 'react';
import s from './TodoList.module.css';
import TaskCounter from '../taskCounter/TaskCounter';
import Todo_tasks from '../../components/todo_tasks/Todo_tasks';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className={s.todoList_wrapper}>
                <div className={s.container}>
                    <Todo_tasks title="Tasks"/>
                </div>
                <TaskCounter />
            </div>
        );
    }
}

export default TodoList;