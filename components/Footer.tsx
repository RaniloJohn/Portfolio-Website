import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import styles from './Footer.module.css';

const socials = [
    { label: 'GitHub', href: 'https://github.com/RaniloJohn' },
    { label: 'LinkedIn', href: 'https://ph.linkedin.com/in/ranilojohn' },
    { label: 'Facebook', href: 'https://www.facebook.com/ranranilo' },
];

const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className="container">
                <h2 className={styles.heading}>Open to SOC, network, and security roles.</h2>
                <a href="mailto:delosangelesranilojohn@gmail.com" className={styles.email}>
                    delosangelesranilojohn@gmail.com
                    <ArrowUpRight className={styles.arrow} size={28} weight="bold" aria-hidden="true" />
                </a>

                <div className={styles.bottom}>
                    <p>
                        <span className={`tape tape--white ${styles.sign}`}>Ranilo John Delos Angeles</span>
                    </p>
                    <ul className={styles.links}>
                        {socials.map((s) => (
                            <li key={s.label}>
                                <a href={s.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p className={styles.copy}>&copy; {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
