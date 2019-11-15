import {ADD_TASK} from '../constants';

export const addTask = (id, task, isCompleted) => ({
    type: ADD_TASK,
    id,
    task,
    isCompleted
});
