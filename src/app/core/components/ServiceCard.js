import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { GeneralText, BorderedCard } from '.';
import classes from '../styles/service-card.module.scss';

const ServiceCard = ({ icon, title, text }) => {

    return (
        <BorderedCard maxWidth={608} className={classes.root}>
            <div className={classes.iconContainer}>
                <Image
                    layout='responsive'
                    src={icon}
                    alt=''
                />
            </div>
            <div>
                <Typography component='h4' className={classes.title}>
                    {title}
                </Typography>
                <GeneralText component='p'>
                    {text}
                </GeneralText>
            </div>
        </BorderedCard>
    );
}

export default ServiceCard;
