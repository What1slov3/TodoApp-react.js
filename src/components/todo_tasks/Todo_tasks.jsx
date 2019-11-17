import React from 'react';
import s from './Todo_tasks.module.css';

class Todo_tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title
        };
    }

    render() {
        return(
            <div className={s.todo_tasks__wrapper}>
                {this.state.title}
            </div>
        );
    }
}

export default Todo_tasks;