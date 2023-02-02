import React from 'react';
import { SectionTextBlock, Button, ServiceCard } from '../../core/components'
import classes from '../styles/services.module.scss';
import rocketIcon from '../assets/icons/rocket.svg';
import manageAccountIcon from '../assets/icons/manage-account.svg';
import commentsIcon from '../assets/icons/comments.svg';
import networksIcon from '../assets/icons/networks.svg';
import startIcon from '../assets/icons/star.svg';
import emojiIcon from '../assets/icons/emoji.svg';

const Services = () => {

    return (
        <div id='services-section' className={classes.root}>
            <div>
                <SectionTextBlock
                    subtitle='Services'
                    header='Additional service support'
                    text='In addition to the basic version of using the AMB platform, 
                    we also provide a premium access with additional services 
                    that will facilitate and optimize the implementation of your ambassador program.'
                />
                <div className={classes.button}>
                    <a href="#contactUs-section"><Button>
                        get your unique solution
                    </Button></a>
                </div>
            </div>
            <div className={classes.serviceCardsContainer}>
                <ServiceCard
                    icon={rocketIcon}
                    title='Personal support'
                    text='We will help you to organize and conduct truly unique
                    Ambassador program using our experience and own database
                    of ready-made tasks for ambassadors that will take your project to the next level.'
                />
                <ServiceCard
                    icon={manageAccountIcon}
                    title='Сommunity management'
                    text='Our team has experienced moderators, who know how to properly moderate 
                    the community in ambassador programs and keep all information under control.'
                />
                <ServiceCard
                    icon={commentsIcon}
                    title='Consulting'
                    text='We have experience of participating in more than 15 ambassador programs, 
                    so we can give you the mechanics of implementing the ambassador programs 
                    of other projects, their tokenomics, etc.'
                />
                <ServiceCard
                    icon={networksIcon}
                    title='Community set up'
                    text='We have our own community and partnerships with different ones 
                    from all over the world, thus we can promote your project 
                    for the target audience in the regions you are interested in.'
                />
                <ServiceCard
                    icon={startIcon}
                    title='Verified ambassadors'
                    text='We have a database of the best ambassadors with 
                    high level of skills and engagement verified by different crypto projects, 
                    who will help to level up your project.'
                />
                <ServiceCard
                    icon={emojiIcon}
                    title='Stickers & memes packages'
                    text='Our designers can create for you unique and inimitable stickers 
                    for Discord and Telegram, as well as create cool and funny memes as much as you need.'
                />
            </div>
				<div className={classes.buttonMobile}>
                    <Button>
                        get your unique solution
                    </Button>
                </div>
        </div>
    );
}

export default Services;
