import React from 'react';
import s from './Task.module.css';
import PropTypes from 'prop-types';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            isCompleted: false,
            task: '',
        };
    }

    render() {

        const { task, isCompleted } = this.props;

        if (isCompleted === false) {
            return (
                <div className={s.task_wrapper}>
                    <div className={s.task_content}>{task}</div>
                    <div className={s.close_btn}>X</div>
                </div>
            );
        } else {
            return false;
        }
    }
}

Task.propTypes = {
    id: PropTypes.number,
    isCompleted: PropTypes.bool,
    task: PropTypes.string
}

Task.defaultProps = {
    id: (new Date()).getTime(),
    isCompleted: false,
    task: 'Task must be here'
}

export default Task;