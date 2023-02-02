import React from 'react';
import classes from '../styles/button-outlined.module.scss';

const ButtonOutlined = ({ children }) => {

    return (
        <div className={classes.border}>
            <button className={classes.button}>
                {children}
            </button>
        </div>
    );
}

export default ButtonOutlined;
