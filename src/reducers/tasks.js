import {ADD_TASK} from '../constants';

const TASKS = [
    {
        id: (new Date()).getTime(),
        task: 'Dawdd'
    },
    {
        id: (new Date()).getTime(),
        task: `Lorem`
    },
    {
        id: (new Date()).getTime(),
        task: 'Dawd123d'
    },
    {
        id: (new Date()).getTime(),
        isCompleted: false,
        task: 'Dawdawgagwd'
    }
];

const tasks = (state = TASKS, { id, isCompleted, task, type }) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id: id,
                    task: task,
                    isCompleted: isCompleted
                }
            ];

        default:
            return state;
    }
}

export default tasks;