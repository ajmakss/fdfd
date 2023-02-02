import React from 'react';
import { Typography } from '@mui/material';
import classes from '../styles/general-text.module.scss';

const GeneralText = ({ children, component = 'h3' }) => (
    <Typography component={component} className={classes.generalText}>
        {children}
    </Typography>
);

export default GeneralText;
