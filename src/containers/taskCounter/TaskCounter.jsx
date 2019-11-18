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
                return count.length == 1 ? `${count.length} task in all` : `${count.length} tasks in all`;
            case 'active':
                let count_active = count.reduce((result, item) => {
                    if (item === false) {
                        result.push(item);
                    }

                    return result;
                }, [])

                return count_active.length == 1 ? `${count_active.length} task is active` : `${count_active.length} tasks is active`;
            case 'completed':
                let count_completed = count.reduce((result, item) => {
                    if (item === true) {
                        result.push(item);
                    }

                    return result;
                }, [])

                return count_completed.length == 1 ? `${count_completed.length} task is completed` : `${count_completed.length} tasks is completed`;
            default:
                return false;
        }
    }

    render() {

        const { tasks } = this.props;
        const { filterType } = this.state;

        return (
            <div className={s.task_counter}>
                <div className={s.counter}>{this.showFilter(tasks)}</div>
                <div className={s.filters} onClick={this.chooseFilter}>
                    <div data-filter="all" className={`${filterType === 'all' && s.activeTask}`}>All</div>
                    <div data-filter="active" className={`${filterType === 'active' && s.activeTask}`}>Active</div>
                    <div data-filter="completed" className={`${filterType === 'completed' && s.activeTask}`}>Completed</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        tasks: state.tasks
    }
)

export default connect(mapStateToProps, {})(TaskCounter)