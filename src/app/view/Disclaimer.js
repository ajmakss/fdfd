import React from 'react';
import Head from 'next/head';
import Mainl from '../core/layouts/Mainl';
import classes from '../styles/home.module.scss';
import Footer from '../home/components/Footerr';
import "react-image-gallery/styles/css/image-gallery.css";






const Slider = () => {
 
  return (
    <>
      <Head>
        <title>Your Ambassador Program | AMB.place</title>
      </Head>
      <Mainl>
        <main className={classes.main}>
          
<div class="">
<center>
<p><b>DISCLAIMER</b></p>
<p><b>No Investment Advice</b></p>
<p>The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice, and you should not treat any of the website's content as such. AMB.PLACE does not recommend any cryptocurrency to be bought, sold, or held by you. Nothing on this website should be taken as an offer to buy, sell or hold a cryptocurrency. Do conduct your own due diligence and consult with your financial advisor before making any investment decision. AMB.PLACE will not be held responsible for the investment decisions you make based on the information provided on the website.</p>
<p><b>Accuracy of Information</b></p>
<p>AMB.PLACE will strive to ensure accuracy of information listed on this website although it will not hold any responsibility for any missing or wrong information. You understand that you are using any and all information available here AT YOUR OWN RISK. You should take adequate steps to verify the accuracy and completeness of any information on the website.</p>

</center>
</div>
          
          <hr className={classes.bottomLine} />
          <Footer />
        </main>
      </Mainl>
    </>
  );
}

export default Slider;

