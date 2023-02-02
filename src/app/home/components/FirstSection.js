import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Button, ButtonOutlined } from '../../core/components';
import classes from '../styles/first-section.module.scss';
import mainImg from '../assets/images/first-section.webp';

const FirstSection = () => {
    return (
        <div className={classes.root}>
            <div className={classes.textSection}>
                <Typography component='h1' className={classes.h1}>
                    The Best Solution For Ambassador Program
                </Typography>
                <Typography component='h2' className={classes.h2}>
                    Functional platform designed for crypto projects and
                    successful implementation of their ambassador programs
                </Typography>
                <div className={classes.buttonsContainer}>
                    <a href="#contactUs-section"><Button>
                        Sign Up for a test
                    </Button></a>
                    <a href="#about-section"><ButtonOutlined>
                        learn more
                    </ButtonOutlined></a>
                </div>
            </div>
            <div className={classes.mainImg}>
                <Image
                    src={mainImg}
                    alt='ambassador program screen'
                    layout='responsive'
                />
            </div>
        </div>
    );
}

export default FirstSection;
