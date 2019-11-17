import React from 'react';
import s from './Todo.module.css';
import Task from '../../components/task/Task';
import {connect} from 'react-redux';
import AddTaskBtn from '../addTaskBtn/AddTaskBtn';
import {removeTask, completeTask, favoriteTask} from '../../actions/taskCreator'

class Todo extends React.Component {
    render() {

        const {tasks, removeTask, completeTask, favoriteTask} = this.props;

        return (
            <div className={s.todo_wrapper}>
                <AddTaskBtn />

                {
                    tasks.map(({id, isCompleted, task, isFavorite}) => {
                        return (
                            <Task
                                completeTask={completeTask}
                                removeTask={removeTask}
                                favoriteTask={favoriteTask}
                                key={id}
                                id={id}
                                isCompleted={isCompleted}
                                isFavorite={isFavorite}
                                task={task}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default connect(state => ({
    tasks: state.tasks
}), {removeTask, completeTask, favoriteTask})(Todo);

