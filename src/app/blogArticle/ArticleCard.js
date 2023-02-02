import React from "react";
import { BorderedCard } from "../core/components";
import classes from '../styles/blogArticle.module.scss';

const ArticleCard = ({ id, title, image }) => (
  <BorderedCard className={classes.articleCardWrapper}>
    <a href={`/blog/${id}`} className={classes.articleCard}>
      <div className={classes.articleCardImageWrapper}>
        <div style={{ background: `url(${image}) center/cover no-repeat`, }} className={classes.articleCardImage} />
      </div>
      {title}
    </a>
  </BorderedCard>
)

export default ArticleCard;