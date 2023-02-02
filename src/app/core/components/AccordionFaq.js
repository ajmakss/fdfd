import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import classes from '../styles/accordion-faq.module.scss';
import plusIcon from '../assets/icons/plus.svg';
import minusIcon from '../assets/icons/minus.svg';

const AccordionFaq = ({ summary, details, questionNum, handleClick, activeQuestion }) => {
    const expanded = questionNum === activeQuestion;
    return (
        <Accordion
            disableGutters
            elevation={0}
            className={classes.accordion}
            expanded={expanded}
            onClick={() => handleClick(questionNum)}
        >
            <AccordionSummary
                className={classes.accordionSummary}
                expandIcon={
                    <>
                        {
                            expanded ? (
                                <Image src={minusIcon} width={16} />
                            ) : (
                                <Image src={plusIcon} width={16} />
                            )
                        }
                    </>
                }
            >
                {summary}
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
                <Typography component='p' className={classes.accordionDetailsText}>
                    {details}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

export default AccordionFaq;
