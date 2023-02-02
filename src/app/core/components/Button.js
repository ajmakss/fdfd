import React from 'react';
import classes from '../styles/button.module.scss';

const Button = ({ onClick, children }) => {

    return (
        <button className={classes.button} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
