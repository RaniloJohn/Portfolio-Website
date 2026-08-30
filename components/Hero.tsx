import Image from 'next/image';
import styles from './Hero.module.css';

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
                                ✉️ Email Me
                            </a>
                            <a href="/resume/DELOS ANGELES RESUME.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                                📄 View CV
                            </a>
                            <a href="#projects" className={styles.btnOutline}>
                                💻 Projects
                            </a>
                        </div>
                    </div>
                    <div className={styles.imageContent}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/ranilojohn.jpg"
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
