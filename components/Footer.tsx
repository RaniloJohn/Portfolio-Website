import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3 className={styles.name}>Ranilo John Delos Angeles</h3>
                        <p className={styles.tagline}>In the pursuit of greatness.</p>
                    </div>
                    <div className={styles.links}>
                        <a href="https://github.com/RaniloJohn" className={styles.link}>GitHub</a>
                        <a href="https://ph.linkedin.com/in/ranilojohn" className={styles.link}>LinkedIn</a>
                        <a href="https://www.facebook.com/ranranilo" className={styles.link}>Facebook</a>
                        <a href="delosangelesranilojohn@gmail.com" className={styles.link}>Email</a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.copyright}>&copy; {new Date().getFullYear()} Ranilo John. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
