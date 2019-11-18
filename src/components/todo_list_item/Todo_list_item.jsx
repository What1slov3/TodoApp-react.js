import React from 'react';
import s from './Todo_list_item.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Todo from '../../containers/todo/Todo';

class Todo_list_item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            href: this.props.href,
            icon: this.props.icon
        };
    }

    render() {

        const { title, href, icon } = this.state;

        return (
            <NavLink
                exact
                to={href}
                className={s.todo_link}
                activeClassName={s.active_link}
            >
                {icon}<span>{title}</span>
            </NavLink>
        );
    }
}

Todo_list_item.propTypes = {
    title: PropTypes.string,
    href: PropTypes.string.isRequired,
    icon: PropTypes.array
}

Todo_list_item.defaultProps = {
    title: 'Title should be here',
    href: '',
    icon: []
}

export default Todo_list_item;

