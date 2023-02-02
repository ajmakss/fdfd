import React from 'react';
import { Typography } from '@mui/material';
import classes from '../styles/subtitle.module.scss';

const Subtitle = ({ children }) => (
    <Typography component='p' className={classes.subtitle}>
        {children}
    </Typography>
);

export default Subtitle;
