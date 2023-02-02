import React, { useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Button from './Button';
import classes from '../styles/header.module.scss';
import ProjectsModal from './ProjectsModal';

const menu = [
    {
        title: 'About',
        href: '#about-section'
    },
    {
        title: 'Advantages',
        href: '#advantage-section'
    },
    {
        title: 'Services',
        href: '#services-section'
    },
    {
        title: 'Team',
        href: '#team-section'
    },
    {
        title: 'FAQ',
        href: '#faq-section'
    },
    {
        title: 'Contact Us',
        href: '#contactUs-section'
    },
];

const Header = () => {
    const [open, setOpenModal] = useState(false);

    const handleCloseModal = () => setOpenModal(false);

    return (
        <header className={classes.header}>
            {open && <ProjectsModal onClose={handleCloseModal} />}
            <img src='/img/logo.svg' alt='AMB.place' className={classes.logo} />
            <DesktopNav menu={menu} />
            <MobileNav menu={menu} />
            <div className={classes.buttonGroup}>
                <a href="#contactUs-section"> <button className={classes.textButton}>SIGN UP</button></a>
                <Button
                    onClick={() => setOpenModal(true)}
                >
                    LOG IN
                </Button>
            </div>
        </header>
    )
}

export default Header;
