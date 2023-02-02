import React from 'react';
import { SectionTextBlock, Slider, CommunityCard } from '../../core/components';
import classes from '../styles/community-partnership.module.scss';
import howToNodeImage from '../assets/images/how-to-node.svg';
import letsNodeImage from '../assets/images/lets-node.svg';
import testnetRunImage from '../assets/images/testnet-run.svg';
import nodersImage from '../assets/images/noders.svg';
import cryptologImage from '../assets/images/cryptolog.svg';
import armataImage from '../assets/images/armata.svg';
import mantiImage from '../assets/images/manti.svg';
const CommunityPartnership = () => {

    return (
        <div className={classes.root}>
            <Slider navigation>
                <CommunityCard
                    img={howToNodeImage}
                    name='How to Node'
                    text='11500+ users'
                />
                <CommunityCard
                    img={letsNodeImage}
                    name='Let’s Node'
                    text='17200+ users'
                />
                <CommunityCard
                    img={testnetRunImage}
                    name='Testnet Run'
                    text='4500+ users'
                />

                <CommunityCard
                    img={mantiImage}
                    name='MANTICORE'
                    text='3000+ users'
                />
                <CommunityCard
                    img={armataImage}
                    name='Armata Hodl'
                    text='2000+ users'
                />

                <CommunityCard
                    img={nodersImage}
                    name='Noders'
                    text='2000+ users'
                />
                <CommunityCard
                    img={cryptologImage}
                    name='Cryptolog Space'
                    text='1500+ users'
                />




            </Slider>
            <div className={classes.textContainer}>
                <SectionTextBlock
                    subtitle='Partnership'
                    header='Communities'
                    text='We have partners among crypto communities from around the world, 
                    that bring together interested and active crypto enthusiasts, 
                    who will be able to support your project.'
                />
            </div>
        </div>
    );
}

export default CommunityPartnership;
