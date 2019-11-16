import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../constants';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
    TASKS = {
        tasks: []
    }
}

const tasks = (state = TASKS.tasks, { id, isCompleted, task, type }) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id: id,
                    task: task,
                    isCompleted: isCompleted
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

        default:
            return state;
    }
}

export default tasks;