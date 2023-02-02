import React from 'react';
import { SectionTextBlock, AboutCard } from '../../core/components';
import classes from '../styles/about.module.scss';
import fingerPrintIcon from '../assets/icons/finger-print.svg';
import graphOutlinedIcon from '../assets/icons/graph-outlined.svg';
import designIcon from '../assets/icons/design.svg';
import webDevelopingIcon from '../assets/icons/web-developing.svg';

const About = () => {

    return (
        <div className={classes.root} id='about-section' >
            <SectionTextBlock
                subtitle='About'
                header='Improve your team management experience'
                text='AMB is Ambassador Management Board, unique and unified solution
                for qualitative program management and project promotion.
                AMB is suitable for crypto projects that are at the testing stage,
                as well as for the ones that already have a main net.'

            />
            <div className={classes.cardsContainer}>
                <AboutCard
                    icon={fingerPrintIcon}
                    title='High level security'
                    text='We are using modern security solutions 
                    to provide our users with the highest level of protection 
                    for their personal and corporate data'
                />
                <AboutCard
                    icon={graphOutlinedIcon}
                    title='Easy results tracking'
                    text='Our platform provides easy management and tracking of data, 
                    in addition to a comfortable implementation of the successful ambassador program'
                />
                <AboutCard
                    icon={designIcon}
                    title='User-friendly design'
                    text='The minimalist and intuitive design makes the AMB platform easy to use. 
                    Light and dark theme switching function enhances your comfort level'
                />
                <AboutCard
                    icon={webDevelopingIcon}
                    title='Regular updates'
                    text='We are constantly working to improve and create additional benefits 
                    of our platform in order to fully satisfy the needs of our customers'
                />
            </div>
        </div>
    );
}

export default About;
