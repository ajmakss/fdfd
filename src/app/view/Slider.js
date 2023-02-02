import React from 'react';
import Head from 'next/head';
import Mainl from '../core/layouts/Mainl';
import classes from '../styles/home.module.scss';
import Footer from '../home/components/Footerr';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/1.png',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/1.png',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-1-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-1-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/3.png',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/3.png',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/4.png',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/4.png',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/5.png',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/5.png',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/6.png',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/6.png',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/7.png',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/7.png',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/8.png',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/8.png',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/9.png',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/9.png',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/10.png',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/10.png',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/11.png',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/11.png',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/12.png',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/12.png',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/13.png',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/13.png',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/14.png',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/14.png',
  },
];



const Slider = () => {
 
  return (
    <>
      <Head>
        <title>Your Ambassador Program | AMB.place</title>
      </Head>
      <Mainl>
        <main className={classes.main}>
          
          <ImageGallery
            items={images}
            thumbnailPosition="top"
            showPlayButton={false}
          />
          <p></p>
          <div class="thumb-wrap">
          <center><iframe width="951" height="535" src="https://www.youtube.com/embed/EPF7TnAALJI" title="AMB guide for Martians | BNB-chain" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>
          </div>
          <hr className={classes.bottomLine} />
          <Footer />
        </main>
      </Mainl>
    </>
  );
}

export default Slider;
