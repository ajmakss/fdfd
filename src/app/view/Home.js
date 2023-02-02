import React,{useEffect, useRef, useState} from 'react';
import Head from 'next/head';
import MainLayout from '../core/layouts/MainLayout';
import {
    FirstSection,
    About,
    Advantage,
    Services,
    Team,
    Faq,
    Projects,
    CommunityPartnership,
    Subscribe
} from '../home/components';
import classes from '../styles/home.module.scss';
import advantageImage1 from '../home/assets/images/shadow.webp';
import advantageImage2 from '../home/assets/images/main.webp';
import advantageImage3 from '../home/assets/images/s.webp';
import ContactUs from '../home/components/ContactUs';
import Footer from '../home/components/Footer';

const Home = () => {

    return (
        <>
            <Head>
                <title>Ambassador Program for crypto projects web3 | AMB.place</title>
                <meta name='description' content='The Best Solution For your Ambassador Program. #1 operating system for web3 communities.' />
            </Head>
            <MainLayout>
                <main className={classes.main}>
                    <FirstSection />
                    <About />
                    <Advantage
                        img={advantageImage1}
                        title='All tools in one app'
                        text='Use the specialized AMB management system for conducting your ambassador programs:'
                        list={[
                            'Easily assign tasks to ambassadors',
                            'Track the results of each member of the community',
                            'Control ambassadors’ activity',
                            'Easily and successfully implement your ambassador programs'
                        ]}
                    />
                    <Advantage
                        img={advantageImage2}
                        title='Easy customizable'
                        text='Customize the color scheme of the AMB platform to match 
                        the corporate colors of your crypto project, add your own unique logo, 
                        customize the workspace to your needs and enjoy your individual design.'
                        reverse
                    />
                    <Advantage
                        img={advantageImage3}
                        title='Fully responsive'
                        text='Be an active participant in the Ambassador program at any time, 
                        wherever you are. Assign, complete, and approve tasks from any device 
                        that is convenient for you. Now you are no longer tied to your computer, 
                        because AMB is fully responsive and easy to use on any device.'
                    />
                    <Services />
                    <Team />
                    <Faq />
                    <Projects />
                    <CommunityPartnership />
                    <Subscribe />
						  <ContactUs/>
                    <hr className={classes.bottomLine} />
						  <Footer/>
                </main>
            </MainLayout>
        </>
    );
}

export default Home;
