import React from 'react';
import s from './Task.module.css';
import PropTypes from 'prop-types';

class Task extends React.Component {

    playAudio = () => {
        let audio = new Audio('https://notificationsounds.com/soundfiles/15de21c670ae7c3f6f3f1f37029303c9/file-sounds-1085-definite.mp3');
        audio.play();
    }

    handleComplete = () => {
        this.playAudio();
    }

    render() {

        const { task, removeTask, id, isCompleted, completeTask, favoriteTask, isFavorite } = this.props;

        return (
            <div className={s.task_wrapper}>
                <div className={isCompleted ? s.task_isCompleted : s.task_notCompleted}>
                    <div className={s.task_fix}>
                        {
                            isCompleted ?
                                <i
                                    className={`${s.task_complete} fal fa-check-circle`}
                                    onClick={() => completeTask(id)}>
                                </i>
                                :
                                <i
                                    className={`${s.task_complete} fal fa-circle`}
                                    onClick={() => completeTask(id)}
                                    onMouseUp={this.playAudio}>
                                </i>
                        }
                        <div className={s.task_content}>{task}</div>
                    </div>
                </div>
                <div className={s.task_editor}>
                    <i className={`${s.close_btn} far fa-trash-alt`} onClick={() => removeTask(id)}></i>
                    {
                        isFavorite ?
                            <i className={`${s.isFavorite} fas fa-star`} onClick={() => favoriteTask(id)}></i>
                            :
                            <i className={`${s.favorite_btn} far fa-star`} onClick={() => favoriteTask(id)}></i>
                    }
                </div>
            </div>
        );
    }
}

Task.propTypes = {
    id: PropTypes.number,
    isCompleted: PropTypes.bool,
    task: PropTypes.string,
    removeTask: PropTypes.func,
    isFavorite: PropTypes.bool
}

Task.defaultProps = {
    id: (new Date()).getTime(),
    isCompleted: false,
    task: 'Task must be here',
    removeTask: () => {},
    isFavorite: false
}

export default Task;