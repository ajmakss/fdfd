import React,{ useState } from 'react';
import { Subtitle } from '../../core/components';
import classes from '../styles/contact-us.module.scss'
import ContactForm from '../../core/components/ContactForm';
import useFetch from '../../hooks/useFetch';
import Loader from '../../core/components/Loader'
import SubmitResults from '../../core/components/SubmitResults';

const ContactUs = () => {
	const [isSubmit,setIsSubmit] = useState(false)
	const [formData, setFormData] = useState({name:'',email:'',budget:'',message:''});
	const {fetchData,isLoading,error} = useFetch()
	const contactFetch = fetchData('https://amb-api.onrender.com/contact',formData,'POST')
	
	const contactHandler = (event,setSelectedValue) => {
		contactFetch(event)
		.then(() => {
			if(!isLoading){
				setIsSubmit(true)
				setFormData({name:'',email:'',budget:'',message:''})
				setSelectedValue('')
			}
		})
		
	}

	return (
		<div id='contactUs-section' className={classes.contactBody}>
			<div className={classes.contactColums}>
				<div className={classes.contactColum}>
						<Subtitle>
							Contact Us
						</Subtitle>
					<div className={classes.contactSubTitle}>
						Have your crypto project? Great, let’s discuss it
					</div>
					<div className={classes.contactText}>
					Ready to implement the Ambassador program of your project with a new level of 
					convenience and functionality? Fill out the form or drop us a message to mail@amb.place
					</div>
				</div>
				<div className={classes.contactColum}>
					<ContactForm data={formData} formHandler={setFormData} submitHandler={contactHandler}/>
					{isLoading && <Loader/>}
					{isSubmit &&
					<SubmitResults
					isSuccess={!error} 
					successText={'The form has been successfully submitted.'} 
					errorText={'Oops, something went wrong...'} 
					submitHandler={setIsSubmit}/>}
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
