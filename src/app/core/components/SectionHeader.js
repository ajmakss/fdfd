import React from 'react';
import { Typography } from '@mui/material';
import classes from '../styles/section-header.module.scss'

const SectionHeader = ({ children }) => (
    <Typography component='h2' className={classes.sectionHeader}>
        {children}
    </Typography>
)

export default SectionHeader;
