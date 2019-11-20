import React from 'react';
import Task from '../../components/task/Task';
import { connect } from 'react-redux';
import { removeTask, completeTask, favoriteTask } from '../../actions/taskCreator';
import PropTypes from 'prop-types';

class ImportantTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { tasks, removeTask, completeTask, favoriteTask } = this.props;

        return (
            <div>
                {
                    tasks.map(({ id, isCompleted, task, isFavorite }) => {
                        if (isFavorite === true && isCompleted === false) {
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

ImportantTasks.propTypes = {
    id: PropTypes.number,
    isCompleted: PropTypes.bool,
    task: PropTypes.string,
    removeTask: PropTypes.func,
    isFavorite: PropTypes.bool
}

ImportantTasks.defaultProps = {
    id: (new Date()).getTime(),
    isCompleted: false,
    task: 'Task must be here',
    removeTask: () => {},
    isFavorite: false
}

const mapStateToProps = (state) => (
    {
        tasks: state.tasks
    }
);

export default connect(mapStateToProps, { removeTask, completeTask, favoriteTask })(ImportantTasks);