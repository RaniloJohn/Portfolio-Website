'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const links = [
    { id: 'about', label: 'About' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Work' },
];

const Navbar = () => {
    const [active, setActive] = useState('');

    useEffect(() => {
        const sections = links
            .map((l) => document.getElementById(l.id))
            .filter((el): el is HTMLElement => el !== null);
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: '-40% 0px -55% 0px' }
        );
        sections.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, []);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
                <a href="#top" className={`tape ${styles.brand}`}>Ranilo John</a>
                <nav aria-label="Primary">
                    <ul className={styles.nav}>
                        {links.map((l) => (
                            <li key={l.id}>
                                <a
                                    href={`#${l.id}`}
                                    className={styles.link}
                                    aria-current={active === l.id ? 'location' : undefined}
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
