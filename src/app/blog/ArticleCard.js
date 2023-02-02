import React from "react";
import { BorderedCard, SectionHeader } from "../core/components";
import classes from '../styles/blog.module.scss';

const ArticleCard = ({ id, title, description, image }) => (
  <BorderedCard className={classes.articleCardWrapper}>
    <a href={`/blog/${id}`} className={classes.articleCard}>
      <div className={classes.articleImageWrapper}>
        <div
          className={classes.articleImage}
          style={{ background: `url(${image}) center/cover no-repeat`, }}
        />
      </div>
      <div>
        <SectionHeader>{title}</SectionHeader>
        <div className={classes.description}>{description}</div>
      </div>
    </a>
  </BorderedCard>
)

export default ArticleCard;