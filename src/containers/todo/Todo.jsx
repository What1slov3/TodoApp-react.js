import React from 'react';
import s from './Todo.module.css';
import Task from '../task/Task';
import {connect} from 'react-redux';
import AddTaskBtn from '../addTaskBtn/AddTaskBtn';

class Todo extends React.Component {
    render() {

        const {tasks} = this.props;

        return (
            <div className={s.todo_wrapper}>
                <AddTaskBtn onClick={()=>{}}/>

                {
                    tasks.map(({id, isCompleted, task}) => {
                        return (
                            <Task
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
}))(Todo);

