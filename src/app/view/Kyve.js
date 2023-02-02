import React from 'react';
import Head from 'next/head';
import Mainl from '../core/layouts/Mainl';
import classes from '../styles/home.module.scss';
import Footer from '../home/components/Footerr';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-0-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-0-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-1-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-1-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-2-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-2-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-3-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-3-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-4-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-4-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-5-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-5-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-6-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-6-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-7-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-7-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-8-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-8-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-9-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-9-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-10-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-10-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-11-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-11-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-12-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-12-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-13-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-13-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-14-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/KYVE-14-min-scaled.jpg',
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
          
          <hr className={classes.bottomLine} />
          <Footer />
        </main>
      </Mainl>
    </>
  );
}

export default Slider;

