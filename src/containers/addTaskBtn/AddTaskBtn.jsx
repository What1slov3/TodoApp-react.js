import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import s from './addTaskBtn.module.css';
import { connect } from 'react-redux';
import {addTask} from '../../actions/taskCreator';

class AddTaskBtn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            inputValue: '',
        }
        this.inputRef = React.createRef();
    }


    noSelect = (e) => {
        e.preventDefault()
    }

    handleCreateTaskBtn = (event) => {
        this.setState({
            active: !this.state.active,
        });
    }

    handleChange = () => {
        this.setState({
            inputValue: this.inputRef.current.value,
        })
    }

    handleKeyPress = ({key}) => {
        if (key === 'Enter' && this.state.inputValue.length > 3) {

            this.props.addTask((new Date()).getTime() ,this.state.inputValue, false);

            this.setState({
                active: false,
                inputValue: '',
            });

        }
    }

    render() {

        const { active, inputValue } = this.state;

        return (
            <Fragment>
                <div className={s.addTaskBtn} onClick={this.handleCreateTaskBtn} onMouseDown={this.noSelect}>
                    <div className={s.add_btn}>
                        {!active ? '+' : 'back'}
                    </div>
                </div>
                {active && <input
                    ref={this.inputRef}
                    type="text"
                    className={s.inputTask}
                    placeholder="Enter a text and press ENTER"
                    value={inputValue}
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChange}
                    autoFocus
                />}
            </Fragment>
        );
    }
}

export default connect(state => ({
    tasks: state.tasks
}), {addTask})(AddTaskBtn);