import React from 'react';
import classes from '../styles/loader.module.scss'
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
	return (
		<div>
			<TailSpin height="80" width="80" color='white' ariaLabel='loading' wrapperClass={classes.loader}/>
		</div>
	);
}

export default Loader;
