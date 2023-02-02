import React from 'react';
import { Subtitle, SectionHeader, GeneralText } from '.';
import classes from '../styles/section-text-block.module.scss';

const SectionTextBlock = ({ subtitle, header, text }) => (
    <div className={classes.textContainer}>
        <Subtitle>
            {subtitle}
        </Subtitle>
        <SectionHeader>
            {header}
        </SectionHeader>
        <GeneralText>
            {text}
        </GeneralText>
    </div>
)

export default SectionTextBlock;
