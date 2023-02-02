import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { BorderedCard } from '.';
import classes from '../styles/team-card.module.scss';
import linkedInIcon from '../assets/icons/linkedin.svg';
import twitterIcon from '../assets/icons/twitter.svg';

const TeamCard = ({ img, name, position, linkedInUrl, twitterUrl }) => {

    return (
        <div className={classes.root}>
			<BorderedCard maxWidth={322} className={'teamCard'}>
				<div className={classes.teamCard}>
			 <Image className={classes.cardImg} src={img} alt='' width={274} height={229} />
            <Typography component='p' className={classes.name}>
                {name}
            </Typography>
            <Typography component='p' className={classes.position}>
                {position}
            </Typography>
            <div className={classes.socialContainer}>
                <a href={linkedInUrl} rel="nofollow noreferrer" target='_blank'>
                    <Image src={linkedInIcon} alt='linkedIn' width={24} height={24} />
                </a>
                <a href={twitterUrl} rel="nofollow noreferrer" target='_blank'>
                    <Image src={twitterIcon} alt='twitter' width={24} height={24} />
                </a>
            </div>
				</div>
				</BorderedCard>
        </div>
    );
}

export default TeamCard;
