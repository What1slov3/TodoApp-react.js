import React from 'react';
import s from './Task.module.css';
import PropTypes from 'prop-types';

class Task extends React.Component {

    render() {

        const { task, removeTask, id, isCompleted, completeTask } = this.props;

        return (
            <div className={s.task_wrapper}>
                <div className={isCompleted && s.task_isCompleted}>
                    <div className={s.task_fix}>
                        {
                            isCompleted ? 
                            <i className={`${s.task_complete} far fa-check-square`} onClick={() => completeTask(id)}></i> 
                            :
                            <i className={`${s.task_complete} far fa-square`} onClick={() => completeTask(id)}></i>
                        }
                        <div className={s.task_content}>{task}</div>
                    </div>
                </div>
                <i className={`${s.close_btn} far fa-trash-alt`} onClick={() => removeTask(id)}></i>
            </div>
        );
    }
}

Task.propTypes = {
    id: PropTypes.number,
    isCompleted: PropTypes.bool,
    task: PropTypes.string,
    removeTask: PropTypes.func

}

Task.defaultProps = {
    id: (new Date()).getTime(),
    isCompleted: false,
    task: 'Task must be here',
    removeTask: () => { }
}

export default Task;