import React from "react";
import classes from "../styles/chain-card.module.scss";

const ChainCard = ({ icon, title, description }) => (
    <div className={classes.wrapper}>
        <img src={icon} alt="" className={classes.icon} />
        <div>
            <div className={classes.title} >{title}</div>
            <div className={classes.description} >{description}</div>
        </div>
    </div>
)

export default ChainCard;