import React from "react";
import ArticleCard from './ArticleCard';
import classes from '../styles/blogArticle.module.scss';

const Recomendation = () => {
  return (
    <>
      <div className={classes.recomedationTitle}>
        Recommended articles:
      </div>
      <div className={classes.recomedationCardsWrapper}>
        <ArticleCard
          id={1}
          title="The importance of keeping your keys safe"
          image="https://locksmithempire.com/wp-content/uploads/2023/01/27853353_web.jpg"
        />
        <ArticleCard
          id={1}
          title="The importance of keeping your keys safe"
          image="https://locksmithempire.com/wp-content/uploads/2023/01/27853353_web.jpg"
        />
        <ArticleCard
          id={1}
          title="The importance of keeping your keys safe"
          image="https://locksmithempire.com/wp-content/uploads/2023/01/27853353_web.jpg"
        />
        <ArticleCard
          id={1}
          title="The importance of keeping your keys safe"
          image="https://locksmithempire.com/wp-content/uploads/2023/01/27853353_web.jpg"
        />
        <ArticleCard
          id={1}
          title="The importance of keeping your keys safe"
          image="https://locksmithempire.com/wp-content/uploads/2023/01/27853353_web.jpg"
        />
        <ArticleCard
          id={1}
          title="The importance of keeping your keys safe"
          image="https://locksmithempire.com/wp-content/uploads/2023/01/27853353_web.jpg"
        />
      </div></>

  )
}

export default Recomendation;