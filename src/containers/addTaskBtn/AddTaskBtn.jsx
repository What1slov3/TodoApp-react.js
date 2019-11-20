import React, { Fragment } from 'react';
import s from './AddTaskBtn.module.css';
import { connect } from 'react-redux';
import { addTask } from '../../actions/taskCreator';
import { noSelect } from '../../functions';

class AddTaskBtn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            inputValue: '',
        }
        this.inputRef = React.createRef();
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

    handleKeyPress = ({ key }) => {
        if (key === 'Enter' && this.state.inputValue.length > 3) {

            this.props.addTask((new Date()).getTime(), this.state.inputValue, false);

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
                <div className={s.addTaskBtn} onClick={this.handleCreateTaskBtn} onMouseDown={noSelect}>
                    {!active ? <i className={`${s.add_btn} fas fa-plus`}></i> : <i className={`${s.add_btn} fas fa-undo-alt`}></i>}
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

const mapStateToProps = (state) => (
    {
        tasks: state.tasks
    }
)

export default connect(mapStateToProps, { addTask })(AddTaskBtn)