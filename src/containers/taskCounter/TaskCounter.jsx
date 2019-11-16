import React from 'react';
import s from './TaskCounter.module.css';
import { connect } from 'react-redux';

class TaskCounter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filterType: 'all',
        }
    }

    handleCounter = (state) => {
        let length = state.map(({ isCompleted }) => {
            if (isCompleted === false) {
                return false;
            } else {
                return true;
            }
        })

        return length
    }

    chooseFilter = (e) => {
        switch (e.target.dataset.filter) {
            case 'all':
                this.setState({
                    filterType: 'all'
                })
                break;
            case 'active':
                this.setState({
                    filterType: 'active'
                })
                break;
            case 'completed':
                this.setState({
                    filterType: 'completed'
                })
                break;
            default:
                return false;
        }

    }

    showFilter = () => {

        let count = this.handleCounter(this.props.tasks);

        switch (this.state.filterType) {
            case 'all':
                return count.length;
            case 'active':
                let count_active = count.reduce((result, item) => {
                    if (item === false) {
                        result.push(item);
                    }

                    return result;
                }, [])

                return count_active.length;
            case 'completed':
                let count_completed = count.reduce((result, item) => {
                    if (item === true) {
                        result.push(item);
                    }

                    return result;
                }, [])

                return count_completed.length;
            default:
                return false;
        }
    }

    render() {

        const { tasks } = this.props;
        const { counter_data } = this.state;

        return (
            <div className={s.task_counter}>
                <div className={s.counter}>{this.showFilter(tasks)} tasks left</div>
                <div className={s.filters} onClick={this.chooseFilter}>
                    <div data-filter="all" className={s.all}>All</div>
                    <div data-filter="active" className={s.active}>Active</div>
                    <div data-filter="completed" className={s.completed}>Completed</div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    tasks: state.tasks
}))(TaskCounter);;