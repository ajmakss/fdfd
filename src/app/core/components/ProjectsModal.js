import { Typography } from '@mui/material';
import React from 'react';
import classes from '../styles/projects-modal.module.scss'
import BorderedCard from './BorderedCard';
import ChainCard from './ChainCard';

const ProjectsModal = ({ onClose }) => {
    return (
        <div className={classes.overlay}>
            <BorderedCard maxWidth={820} className={classes.modal}>
                <div className={classes.modalContent}>
                    <Typography component='h4' className={classes.title}>
                        Select a project
                    </Typography>
                    <div
                        className={classes.close}
                        onClick={onClose}
                    >
                        ×
                    </div>
                    <div className={classes.cards}>
                    <a href="https://bnb-chain.amb.place/login" target="_blank" className={classes.chainCardLink}>
                    <ChainCard
                            icon="https://sffactory.com.ua/wp-content/uploads/2023/01/bnb.png"
                            title="Bnb-chain"
                            description="Martians program"
                        />
                        </a>
                        <a href="https://kyve.amb.place/login" target="_blank" className={classes.chainCardLink}>
                    <ChainCard
                            icon="https://sffactory.com.ua/wp-content/uploads/2023/01/kyve.jpg"
                            title="KYVE"
                            description="Ambassadorship program"
                        />
                        </a>
                    <a href="https://massa.amb.place/login" target="_blank" className={classes.chainCardLink}>
                    <ChainCard
                            icon="https://sffactory.com.ua/wp-content/uploads/2023/01/massa.jpg"
                            title="MASSA"
                            description="Ambassadorship program"
                        />
                        </a>
                        <a href="https://octogamex.amb.place/login" target="_blank" className={classes.chainCardLink}>
                        <ChainCard
                            icon="https://sffactory.com.ua/wp-content/uploads/2023/01/octo-1.jpg"
                            title="OctoGamex"
                            description="Ambassadorship program"
                        />
                        </a>
                        <a href="https://ownity.amb.place/login" target="_blank" className={classes.chainCardLink}>
                        <ChainCard
                            icon="https://sffactory.com.ua/wp-content/uploads/2023/01/previous-logo.a8c9b6c3-2.png"
                            title="Ownity"
                            description="Ambassadorship program"
                        />
                        </a>
                          
                        
                        
                        
                    </div>
                </div>
            </BorderedCard>
        </div>
    )
}

export default ProjectsModal;