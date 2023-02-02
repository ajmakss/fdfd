import React, { useState } from 'react';
import EmailInput from '../../core/components/EmailInput';
import useFetch from '../../hooks/useFetch';
import classes from '../../home/styles/subscribe.module.scss';
import SubmitResults from './SubmitResults';
import Loader from './Loader';

const SubscribeForm = () => {
	const [isSubmit,setIsSubmit] = useState(false)
	const [email,setEmail] = useState('')
	const {fetchData,isLoading,error} = useFetch()
	const subscribeFetch = fetchData('https://amb-api.onrender.com/subscribe',{email},'POST')

	const subscribeHandler = () => {
		if(email.length){
			setEmail('')
			subscribeFetch()
			.then(() => {
				if(!isLoading){
					setIsSubmit(true)
				}
			})
		}
	}

	return (
		<>
		<form className={classes.form} onSubmit={event => {
			event.preventDefault()
			subscribeHandler(event)
		  }}>
		  <div className={classes.btnAndInput}>
			  <EmailInput email={email} autoComplete={email} subscribeHandler={setEmail}/>
				<button className={classes.emailFormBtn} type="submit">
					subscribe
				</button>
		  </div>
	  </form>
	   {isLoading && <Loader/>}
		{isSubmit &&
		<SubmitResults
		isSuccess={!error} 
		successText={'You have subscribed to our latest news and updates.'} 
		errorText={'Oops, something went wrong...'} 
		submitHandler={setIsSubmit}/>}
		</>
	);
}

export default SubscribeForm;
