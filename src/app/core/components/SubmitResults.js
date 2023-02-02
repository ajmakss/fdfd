import React from 'react';
import classes from '../styles/submit.module.scss'

const SubmitResults = ({submitHandler,successText,errorText,isSuccess}) => {
	
	const closeModal = (event) => {
		event.stopPropagation()
		if(event.target.className === 'submit_modal__9C9fl'){
			submitHandler(false)
		}
	}

	return (
		<div onClick={closeModal} className={classes.modal}>
			<div className={classes.modalBody}>
				<div className={classes.success}> 
					{isSuccess 
					? <div className={classes.successArrow}>✓</div>
					: <div className={classes.errorIcon}>&#9888;</div>
					}
					<h4>{isSuccess ? 'Success!' : 'Error!'}</h4>
					<button onClick={() => submitHandler(false)} className={classes.closeArrow}>&#x2715;</button>
				</div>
				<span className={classes.successText}>
					{ isSuccess ? successText : errorText}
				</span>
			</div>
		</div>
	);
}

export default SubmitResults;
