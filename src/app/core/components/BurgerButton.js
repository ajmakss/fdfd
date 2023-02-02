import React from 'react';
import classes from '../styles/button-burger.module.scss'

const BurgerButton = ({state,changeState}) => {
	return (
		<button onClick={changeState} className={state ? classes.burger + ' ' + classes.close : classes.burger}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
}

export default BurgerButton;
