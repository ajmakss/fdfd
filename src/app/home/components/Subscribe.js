import React, { useEffect, useState } from 'react';
import { Subtitle, SectionHeader, GeneralText } from '../../core/components';
import classes from '../styles/subscribe.module.scss';
import SubscribeForm from '../../core/components/SubscribeForm';

const Subscribe = () => {

    return (
        <div className={classes.subscribeRoot}>
			<div className={classes.body}>
                <Subtitle>
                    Subscribe
                </Subtitle>
                <SectionHeader>
                    Get the latest news from us
                </SectionHeader>
                <GeneralText className={classes.text}>
                    Type your email adress in here and stay tuned to our latest news and updates
                </GeneralText>
                <SubscribeForm/>
			</div>
        </div>
    );
}

export default Subscribe;

