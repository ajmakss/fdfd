import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { BorderedCard } from '.';
import classes from '../styles/community-card.module.scss';

const CommunityCard = ({ img, name, text }) => {

    return (
        <BorderedCard maxWidth={182}  className={classes.root}>
            <Image src={img} alt='' />
            <Typography component='p' className={classes.name}>
                {name}
            </Typography>
            <Typography component='p' className={classes.text}>
                {text}
            </Typography>
        </BorderedCard>
    );
}

export default CommunityCard;
