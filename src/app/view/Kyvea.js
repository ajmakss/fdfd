import React from 'react';
import Head from 'next/head';
import Mainl from '../core/layouts/Mainl';
import classes from '../styles/home.module.scss';
import Footer from '../home/components/Footerr';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-0-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-0-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-1-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-1-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-2-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-2-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-3-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-3-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-4-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-4-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-5-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-5-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-6-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-6-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-7-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-7-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-8-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-8-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-9-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-9-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-10-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-10-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-11-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-11-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-12-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-12-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-13-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-13-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-14-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-14-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-15-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-15-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-16-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-16-min-scaled.jpg',
  },
  {
    original: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-17-min-scaled.jpg',
    thumbnail: 'https://sffactory.com.ua/wp-content/uploads/2023/01/kyve-for-adms-17-min-scaled.jpg',
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

