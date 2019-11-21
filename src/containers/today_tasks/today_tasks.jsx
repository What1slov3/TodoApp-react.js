import React from 'react';
import Task from '../../components/task/Task';
import { connect } from 'react-redux';
import { removeTask, completeTask, favoriteTask } from '../../actions/taskCreator';
import PropTypes from 'prop-types';
import { getDate } from '../../functions';
import AddTaskBtn from '../addTaskBtn/AddTaskBtn';

class Today_tasks extends React.Component {

    render() {

        const { tasks, removeTask, completeTask, favoriteTask } = this.props;

        return (
            <div>
                <AddTaskBtn />

                {
                    tasks.map(({ id, isCompleted, task, isFavorite, data }) => {
                        if (data === getDate()) {
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
                        } else {
                            return false;
                        }
                    })
                }
            </div>
        );
    }
}

Today_tasks.propTypes = {
    id: PropTypes.number,
    isCompleted: PropTypes.bool,
    task: PropTypes.string,
    removeTask: PropTypes.func,
    isFavorite: PropTypes.bool,
    data: PropTypes.string
}

Today_tasks.defaultProps = {
    id: (new Date()).getTime(),
    isCompleted: false,
    task: 'Task must be here',
    removeTask: () => { },
    isFavorite: false,
    data: (new Date()).getDate()
}

const mapStateToProps = (state) => (
    {
        tasks: state.tasks
    }
);

export default connect(mapStateToProps, { removeTask, completeTask, favoriteTask })(Today_tasks);