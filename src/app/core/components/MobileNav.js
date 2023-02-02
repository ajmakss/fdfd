import React, { useRef, useState } from 'react';
import Link from 'next/link';
import classes from '../styles/mobile-nav.module.scss'
import Button from './Button';
import BurgerButton from './BurgerButton';
import ProjectsModal from './ProjectsModal';

const MobileNav = ({ menu }) => {
    const [modal, setModal] = useState(false);
    const ul = useRef();
    const [loginModal, setLoginModal] = useState(false);

    const modalHandler = () => {
        document.querySelector('#__next').classList.toggle(classes.hideScroll)
        setModal(!modal)
    }

    const handleOpenLoginModal = () => {
        modalHandler();
        setLoginModal(true);
    }
    const handleCloseLoginModal = () => setLoginModal(false);

    return (
        <>
            {loginModal && <ProjectsModal onClose={handleCloseLoginModal} />}
            {
                modal
                    ?
                    <div className={classes.modal}>
                        <div className={classes.modalBody}>
                            <div className={classes.head}>
                                <img src='/img/logo.svg' alt='AMB.place' className={classes.logo} />
                                <BurgerButton state={modal} changeState={modalHandler} />
                            </div>
                            <nav className={classes.nav}>
                                <ul className={classes.ul} ref={ul}>
                                    {
                                        menu.map(({ title, href }, i) => (
                                            <li key={i} className={classes.li}>
                                                <Link href={href}>
                                                    <a onClick={modalHandler}
                                                        className={classes.a}
                                                        onMouseEnter={e => {
                                                            const links = ul.current.querySelectorAll('a');
                                                            for (let link of links) {
                                                                if (link === e.target) continue;

                                                                link.classList.add(classes.shaded);
                                                            }
                                                        }}
                                                        onMouseLeave={() => {
                                                            const links = ul.current.querySelectorAll('a');
                                                            for (let link of links) {
                                                                link.classList.remove(classes.shaded);
                                                            }
                                                        }}
                                                    >
                                                        {title}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav >
                            <div className={classes.buttonGroup}>
                                <button className={classes.textButton}>SIGN UP</button>
                                <Button onClick={handleOpenLoginModal}>LOG IN</Button>
                            </div>
                        </div>
                    </div>
                    :
                    <BurgerButton state={modal} changeState={modalHandler} />
            }
        </>
    );
}

export default MobileNav;
