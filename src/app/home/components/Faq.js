import React, { useState } from 'react';
import Image from 'next/image';
import { Subtitle, SectionHeader, AccordionFaq } from '../../core/components';
import classes from '../styles/faq.module.scss';
import iphoneFaqImage from '../assets/images/iphone-faq.webp';

const Faq = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);
    const handleQuestionClick = questionNum => {
        setActiveQuestion(activeQuestion === questionNum ? null : questionNum);
    }

    return (
        <div id='faq-section' className={classes.root}>
            <div className={classes.textContainer}>
                <Subtitle>
                    FAQ
                </Subtitle>
                <div className={classes.sectionHeaderContainer}>
                    <SectionHeader>
                        Frequently asked questions
                    </SectionHeader>
                </div>
                <div className={classes.questionsContainer}>
                    <AccordionFaq
                        summary='How much does it cost to use the AMB platform?'
                        details='There is no fixed price. We take into account
                        all specific needs, as well as additional services you request.'
                        questionNum={0}
                        handleClick={handleQuestionClick}
                        activeQuestion={activeQuestion}
                    />
                    <AccordionFaq
                        summary='Is there a limit on the number of users that can use the platform?'
                        details='No, there is no limit. AMB platform can serve an infinite 
                        number of users through efficient load balancing and resource utilization.'
                        questionNum={1}
                        handleClick={handleQuestionClick}
                        activeQuestion={activeQuestion}
                    />
                    <AccordionFaq
                        summary='May I order a ready-made ambassadors program?'
                        details='Of course! Our team consists of experienced ambassadors, 
                        thus we know how to make tasks for ambassadors and supervise their fulfillment.'
                        questionNum={2}
                        handleClick={handleQuestionClick}
                        activeQuestion={activeQuestion}
                    />
                    <AccordionFaq
                        summary='Can I test your platform before paying?'
                        details='Sure! Fill out the form below and our manager will contact you to clarify details.'
                        questionNum={3}
                        handleClick={handleQuestionClick}
                        activeQuestion={activeQuestion}
                    />
                </div>
            </div>
            <div className={classes.imgContainer}>
                <Image src={iphoneFaqImage} alt='' />
            </div>
        </div>
    );
}

export default Faq;
