import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { BorderedCard } from '.';
import classes from '../styles/about-card.module.scss';

const AboutCard = ({ icon, title, text }) => {

    return (
        <BorderedCard maxWidth={290} className={classes.root}>
            <Image src={icon} alt='' className={classes.icon} />
            <Typography component='h4' className={classes.title}>
                {title}
            </Typography>
            <Typography className={classes.text}>
                {text}
            </Typography>
        </BorderedCard>
    );
}

export default AboutCard;
