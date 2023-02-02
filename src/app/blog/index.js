import Head from 'next/head';
import React from 'react';
import Mainl from '../core/layouts/Mainl';
import Footer from '../home/components/Footer';
import mainClasses from '../styles/home.module.scss';
import classes from '../styles/blog.module.scss';
import { Typography } from '@mui/material';
import ArticleCard from './ArticleCard';

const Blog = () => (
  <>
    <Head>
      <title>Blog - Your Ambassador Program | AMB.place</title>
    </Head>
    <Mainl>
      <main className={mainClasses.main}>
        <Typography component='h1' className={classes.h1}>
          Blog
        </Typography>
        <div className={classes.articlesCards}>
          <ArticleCard
            id={1}
            title="The importance of keeping your keys safe"
            description="For keeping our homes and businesses safe, many of us thinking about installing high-tech security systems or hiring security guards. But what about something as simple and seemingly insignificant as our keys? The truth is that keys play a crucial role in our security, and it’s essential to protect them from falling into the wrong..."
            image="https://locksmithempire.com/wp-content/uploads/2023/01/27853353_web.jpg"
          />
          <ArticleCard
            id={1}
            title="The importance of keeping your keys safe"
            description="For keeping our homes and businesses safe, many of us thinking about installing high-tech security systems or hiring security guards. But what about something as simple and seemingly insignificant as our keys? The truth is that keys play a crucial role in our security, and it’s essential to protect them from falling into the wrong..."
            image="https://locksmithempire.com/wp-content/uploads/2023/01/27853353_web.jpg"
          />
          <ArticleCard
            id={1}
            title="The importance of keeping your keys safe"
            description="For keeping our homes and businesses safe, many of us thinking about installing high-tech security systems or hiring security guards. But what about something as simple and seemingly insignificant as our keys? The truth is that keys play a crucial role in our security, and it’s essential to protect them from falling into the wrong..."
            image="https://locksmithempire.com/wp-content/uploads/2023/01/27853353_web.jpg"
          />
          <ArticleCard
            id={1}
            title="The importance of keeping your keys safe"
            description="For keeping our homes and businesses safe, many of us thinking about installing high-tech security systems or hiring security guards. But what about something as simple and seemingly insignificant as our keys? The truth is that keys play a crucial role in our security, and it’s essential to protect them from falling into the wrong..."
            image="https://locksmithempire.com/wp-content/uploads/2023/01/27853353_web.jpg"
          />
          <ArticleCard
            id={1}
            title="The importance of keeping your keys safe"
            description="For keeping our homes and businesses safe, many of us thinking about installing high-tech security systems or hiring security guards. But what about something as simple and seemingly insignificant as our keys? The truth is that keys play a crucial role in our security, and it’s essential to protect them from falling into the wrong..."
            image="https://locksmithempire.com/wp-content/uploads/2023/01/27853353_web.jpg"
          />
        </div>
        <Footer />
      </main>
    </Mainl>
  </>
);

export default Blog;