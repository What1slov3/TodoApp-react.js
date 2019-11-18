import React from 'react';
import s from './TodoList.module.css';
import TaskCounter from '../taskCounter/TaskCounter';
import Todo_list_item from '../../components/todo_list_item/Todo_list_item';

class TodoList extends React.Component {
    render() {
        return (
            <div className={s.todoList_wrapper}>
                <div className={s.container}>
                    <Todo_list_item title="Tasks" href={'/'} icon={[<i class="fad fa-tasks"></i>]} />
                    <Todo_list_item title="Important" href={'/favorites'} icon={[<i class="fas fa-star"></i>]} />
                </div>
                <TaskCounter />
            </div>
        );
    }
}

export default TodoList;