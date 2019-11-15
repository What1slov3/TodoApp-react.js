import React from 'react';
import s from './Todo.module.css';
import Task from '../../components/task/Task';
import {connect} from 'react-redux';
import AddTaskBtn from '../addTaskBtn/AddTaskBtn';
import {removeTask, completeTask} from '../../actions/taskCreator'

class Todo extends React.Component {
    render() {

        const {tasks, removeTask, completeTask} = this.props;

        return (
            <div className={s.todo_wrapper}>
                <AddTaskBtn />

                {
                    tasks.map(({id, isCompleted, task}) => {
                        return (
                            <Task
                                completeTask={completeTask}
                                removeTask={removeTask}
                                key={id}
                                id={id}
                                isCompleted={isCompleted}
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
}), {removeTask, completeTask})(Todo);

