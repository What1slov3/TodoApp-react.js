import React from 'react';
import s from './Task.module.css';
import PropTypes from 'prop-types';
import { completeTask } from '../../actions/taskCreator';

class Task extends React.Component {

    render() {

        const { task, removeTask, id, isCompleted, completeTask } = this.props;

        return (
            <div className={s.task_wrapper}>
                <div className={isCompleted && s.task_isCompleted}>
                    <div className={s.task_fix}>
                        <input type="checkbox" className={s.task_complete} onClick={() => completeTask(id)}/>
                        <div className={s.task_content}>{task}</div>
                    </div>
                </div>
                <div className={s.close_btn} onClick={() => removeTask(id)}></div>
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