import React from 'react';
import Head from 'next/head';
import Mainl from '../core/layouts/Mainl';
import classes from '../styles/home.module.scss';
import Footer from '../home/components/Footerr';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-0-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-0-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-1-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-1-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-2-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-2-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-3-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-3-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-4-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-4-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-5-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-5-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-6-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-6-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-7-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-7-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-8-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-8-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-9-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-9-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-10-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-10-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-11-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-11-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-12-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-12-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-13-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-13-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-14-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-14-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-15-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-15-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-15-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-15-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-16-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-16-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-17-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/BNB-17-scaled.jpg',
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
          <center><iframe width="951" height="535" src="https://www.youtube.com/embed/NJGjkDGNgv8" title="AMB guide for Community managers | BNB-chain" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>
          </div>
          <hr className={classes.bottomLine} />
          <Footer />
        </main>
      </Mainl>
    </>
  );
}

export default Slider;

