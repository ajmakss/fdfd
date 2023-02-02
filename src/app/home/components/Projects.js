import React from 'react';
import { SectionTextBlock, Slider, CommunityCard } from '../../core/components';
import classes from '../styles/community-partnership.module.scss';
import bnbImage from '../assets/images/bnb.webp';
import kyveImage from '../assets/images/kyve.webp';
import massaImage from '../assets/images/massa.webp';
import octoImage from '../assets/images/octo.webp';
import ownityImage from '../assets/images/ownity.webp';


const Projects = () => {

    return (
        <div className={classes.root}>
            <Slider navigation>
                <CommunityCard
                    img={bnbImage}
                    name='BNB-chain'

                />
                <CommunityCard
                    img={kyveImage}
                    name='KYVE'

                />
                <CommunityCard
                    img={massaImage}
                    name='MASSA'

                />

                <CommunityCard
                    img={octoImage}
                    name='OCTOGAMEX'

                />
                <CommunityCard
                    img={ownityImage}
                    name='Ownity'

                />





            </Slider>
            <div className={classes.textContainer}>
                <SectionTextBlock
                    subtitle='Partnership'
                    header='Projects'
                    text='We already collaborate with a lot of projects, some of them you will see here.'
                />
            </div>
        </div>
    );
}

export default Projects;
