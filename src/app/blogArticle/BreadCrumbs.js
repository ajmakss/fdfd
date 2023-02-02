import React from "react";
import { Breadcrumbs as BreadCrumbsComponent, Link, Typography } from '@mui/material';
import classes from '../styles/blogArticle.module.scss';

const BreadCrumbs = ({ articleTitle }) => (
  <BreadCrumbsComponent className={classes.breadcrumbs} separator="›">
    <Link underline="hover" color="inherit" href="/">
      Home
    </Link>
    <Typography color="text.primary">{articleTitle}</Typography>
  </BreadCrumbsComponent>
)

export default BreadCrumbs;