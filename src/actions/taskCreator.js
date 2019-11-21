import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, FAVORITE_TASK } from '../constants';

export const addTask = (id, task, isCompleted, isFavorite, data) => ({
    type: ADD_TASK,
    id,
    task,
    isCompleted,
    isFavorite,
    data
});

export const removeTask = id => ({
    type: REMOVE_TASK,
    id
});

export const completeTask = id => ({
    type: COMPLETE_TASK,
    id
});

export const favoriteTask = id => ({
    type: FAVORITE_TASK,
    id
});