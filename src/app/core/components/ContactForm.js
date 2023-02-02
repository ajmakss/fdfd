import React, { useState ,useRef, useCallback} from 'react';
import classes from '../styles/contact-form.module.scss'
import Button from './Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl';

const ContactForm = ({data,formHandler,submitHandler}) => {
	const [selectedValue,setSelectedValue] = useState('')
	const name = useRef(null)
	const email = useRef(null)
	const budget = useRef(null)
	const message = useRef(null)

	const validateAnimation = useCallback(
		(selector) => {
			selector.current.classList.add(classes.validation)
				setTimeout(() => {
					selector.current.classList.remove(classes.validation)
				},1500)
		}
	,[])

	const validateInputs = useCallback(
		(event) => {
			event.preventDefault()
			!data.name ? validateAnimation(name) : null

			!data.email ? validateAnimation(email) : null

			!data.budget ? validateAnimation(budget) : null

			!data.message ? validateAnimation(message) : null

			if(data.email && data.budget && data.message && data.name) submitHandler(event,setSelectedValue)
		}
	,[data.budget, data.email, data.message, data.name, submitHandler, validateAnimation])

	
	const handleChange = (event) => {
		setSelectedValue(event.target.value)
		formHandler({...data,budget:event.target.value})
	}

	return (
		<form onSubmit={(e) => validateInputs(e)} className={classes.contactForm}>
			<input ref={name} value={data.name} onChange={(e) => formHandler({...data,name:e.target.value})} type={'text'} placeholder='Name' className={classes.contactInput}/>
			<input ref={email} value={data.email} onChange={(e) => formHandler({...data,email:e.target.value})} type={'email'} placeholder='Email adress' className={classes.contactInput}/>
			<FormControl>
			  <InputLabel id='demo-simple-select-standard-label'>Budget in USD</InputLabel>
			  <Select
				  ref={budget}
				  labelId="demo-simple-select-standard-label"
				  id="demo-simple-select-standard"
				  value={selectedValue}
				  onChange={handleChange}
				  label="Budget in USD"
				  variant='standard'
				  sx={{
					  color: "#e3e3e3",
					  '&:before': {
						  borderBottom: '1px solid',
						  borderImage: 'linear-gradient(to left, #8985f25b, #f26bdb4a) 1 0%'

				  		}
				  }}
        	  >
        	  <MenuItem value={'1000-5000'}>1000-5000</MenuItem>
        	  <MenuItem value={5000-20000}>5000-20000</MenuItem>
        	  <MenuItem value={20000-50000}>20000-50000</MenuItem>
        	  <MenuItem value={50000-500000}>50000-500000</MenuItem>
        	  <MenuItem value={500000-1000000}>500000-1000000</MenuItem>
        	</Select>
		  </FormControl>
			<input ref={message} value={data.message} onChange={(e) => formHandler({...data,message:e.target.value})} type={'text'} placeholder='Tell us a few words about your project' className={classes.contactInput}/>
			<div className={classes.btnContainer}>
				<Button>submit</Button>
			</div>
		</form>
	);
}

export default ContactForm;

