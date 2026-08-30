import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import { getImagePath } from '@/utils/basePath';

const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className="container">
                <h1 className={styles.pageTitle}>Portfolio</h1>
                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>
                            Hello, I'm <span className={styles.name}>Ranilo John.</span>
                        </h2>
                        <p className={styles.description}>
                            I'm a <strong>Computer Engineering Student</strong> specializing in <strong>Cybersecurity</strong> and <strong>Networking</strong>.
                        </p>
                        <p className={styles.description}>
                            I design and optimize network infrastructures, simulate security operations, and build applications tailored for security and productivity.
                        </p>
                        <div className={styles.actions}>
                            <a href="mailto:delosangelesranilojohn@gmail.com" className={styles.btnPrimary}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                                Email Me
                            </a>
                            <Link href="/resume/DELOS ANGELES RESUME.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                                    <path d="M14 2v4a1 1 0 0 0 1 1h4"/>
                                    <path d="M10 9H8"/>
                                    <path d="M16 13H8"/>
                                    <path d="M16 17H8"/>
                                </svg>
                                View CV
                            </Link>
                            <a href="#projects" className={styles.btnOutline}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"/>
                                    <polyline points="8 6 2 12 8 18"/>
                                </svg>
                                Projects
                            </a>
                        </div>
                    </div>
                    <div className={styles.imageContent}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={getImagePath('/images/ranilojohn.jpg')}
                                alt="Ranilo John Delos Angeles"
                                width={240}
                                height={240}
                                className={styles.profileImage}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
