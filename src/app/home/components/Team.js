import React from 'react';
import { Subtitle, SectionHeader, GeneralText, TeamCard } from '../../core/components';
import classes from '../styles/team.module.scss';
import vvImage from '../assets/images/vv.svg';
import sffImage from '../assets/images/sff.svg';
import kallenImage from '../assets/images/kallen.svg';

const Team = () => {

    return (
        <div id='team-section' className={classes.root}>
            <div className={classes.textContainer}>
                <Subtitle>
                    AMB Creators
                </Subtitle>
                <SectionHeader>
                    Team
                </SectionHeader>
                <GeneralText>
                    We have combined the strengths of each of us in order
                    to create a truly useful and competitive product.
                </GeneralText>
            </div>
            <div className={classes.cardContainer}>
                <TeamCard
                    img={kallenImage}
                    name='ARTEM KULESHA'
                    position='CO-FOUNDER'
                    linkedInUrl='https://www.linkedin.com/in/artem-kulesha-485013197/'
                    twitterUrl='https://twitter.com/kallen_cc'
                />
                <TeamCard
                    img={vvImage}
                    name='VOLODYMYR LYTVYNOV'
                    position='CO-FOUNDER'
                    linkedInUrl='https://www.linkedin.com/in/volodymyr-lytvynov/'
                    twitterUrl='https://twitter.com/mrLytvynov'
                />
                <TeamCard
                    img={sffImage}
                    name='OLEH SEMENIUK'
                    position='CO-FOUNDER'
                    linkedInUrl='https://www.linkedin.com/in/oleh-semeniuk-9a0bb6236/'
                    twitterUrl='https://twitter.com/alekseevich_amb'
                />
            </div>
        </div>
    );
}

export default Team;
