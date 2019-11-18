import React from 'react';
import s from './Title.module.css';

class Title extends React.Component {

    render() {
        return (
            <div className={s.title_wrapper}>
                <h1 className={s.title}>{this.props.title}</h1>
            </div>
        );
    }
}

export default Title;