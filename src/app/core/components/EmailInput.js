import React, { useState } from 'react';
import mailImage from '../../home/assets/icons/mail.svg'
import { TextField } from '@mui/material';
import Image from 'next/image';
import classes from '../styles/mail-input.module.scss'


const EmailInput = ({email,subscribeHandler}) => {

	return (
		<div className={classes.textFieldWrapper}>
			<div className={classes.mailImage}>
				<Image src={mailImage}  alt='email'/>
			</div>
			<TextField type={'email'} value={email} onChange={(e) => subscribeHandler(e.target.value)} id="outlined-basic" label="Email adress" variant="outlined"></TextField>
		</div>
	);
}

export default EmailInput;
