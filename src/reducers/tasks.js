import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, FAVORITE_TASK } from '../constants';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
    TASKS = {
        tasks: []
    }
}

const tasks = (state = TASKS.tasks, { id, isCompleted, task, type, isFavorite, data }) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id: id,
                    task: task,
                    isCompleted: isCompleted,
                    isFavorite: isFavorite,
                    data: data
                }
            ];

        case REMOVE_TASK:
            return [...state].filter(text => text.id !== id)

        case COMPLETE_TASK:
            return [...state].map(task => {
                if (task.id === id) {
                    task.isCompleted = !task.isCompleted
                }
                return task
            })

        case FAVORITE_TASK:
            return [...state].map(task => {
                if (task.id === id) {
                    task.isFavorite = !task.isFavorite
                }
                return task
            })

        default:
            return state;
    }
}

export default tasks;