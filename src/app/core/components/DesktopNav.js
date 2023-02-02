import React, { useRef } from 'react';
import Link from 'next/link';
import classes from '../styles/desktop-nav.module.scss';

const DesktopNav = ({ menu }) => {
    const ul = useRef();

    return (
        <nav className={classes.nav}>
            <ul className={classes.ul} ref={ul}>
                {
                    menu.map(({ title, href }, i) => (
                        <li key={i} className={classes.li}>
                            <Link href={href}>
                                <a
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
    )
}

export default DesktopNav;