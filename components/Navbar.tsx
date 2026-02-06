import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">Portfolio</Link>
                </div>
                <nav className={styles.nav}>
                    <Link href="#summary" className={styles.link}>About</Link>
                    <Link href="#resume" className={styles.link}>Resume</Link>
                    <Link href="#projects" className={styles.link}>Projects</Link>
                    <Link href="#certifications" className={styles.link}>Certifications</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
