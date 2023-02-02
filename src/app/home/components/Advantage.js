import React from 'react';
import Image from 'next/image';
import { Grid, Typography } from '@mui/material';
import { Subtitle, SectionHeader } from '../../core/components';
import classes from '../styles/advantage.module.scss';

const Advantage = ({ img, title, text, list = [], reverse }) => {

    return (
        <Grid
		  		id='advantage-section'
            container
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            className={classes.root}
            direction={reverse ? 'row-reverse' : 'row'}
        >
            <div className={classes.imgContainer}>
                <Image src={img} alt='' className={classes.img} />
            </div>
            <div className={classes.textContainer}>
                <Subtitle>
                    Advantages
                </Subtitle>
                <SectionHeader>
                    {title}
                </SectionHeader>
                <Typography component='p' className={classes.text}>
                    {text}
                </Typography>
                {
                    !!list.length && (
                        <ul className={classes.ul}>
                            {
                                list.map((li, i) => (
                                    <li key={i}>{li}</li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </Grid>
    );
}

export default Advantage;
