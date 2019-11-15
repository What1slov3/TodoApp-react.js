import React from 'react';
import s from './TaskCounter.module.css';
import {connect} from 'react-redux';

class TaskCounter extends React.Component {

    render() {

        const {tasks} = this.props;

        return(
            <div className={s.task_counter}>
                {`${tasks.length} tasks left`}
            </div>
        );
    }
}

export default connect(state => ({
    tasks: state.tasks
}))(TaskCounter);;