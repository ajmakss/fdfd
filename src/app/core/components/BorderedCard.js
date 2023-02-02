import React from 'react';
import classes from '../styles/bordered-card.module.scss';

const BorderedCard = ({ children, maxWidth, className }) => {

    return (
        <div className={classes.bordered} style={{ maxWidth ,overflow:'hidden'}}>
            <div className={`${classes.root} ${className}`}>
                {children}
            </div>
        </div>
    );
}

export default BorderedCard;
