import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <h1 className={styles.title}>
                        Hello, I'm <span className={styles.name}>Ranilo John Delos Angeles</span>
                    </h1>
                    <h2 className={styles.subtitle}>
                        Computer Engineer Student & <span className={styles.highlight}>Cybersecurity Enthusiast</span>
                    </h2>
                    <p className={styles.description}>
                        I am a Computer Engineer student with a passion for cybersecurity. Pursuing a career in cybersecurity, I am dedicated to protecting systems and networks from threats.
                    </p>
                    <div className={styles.actions}>
                        <a href="#projects" className={`${styles.btn} ${styles.primary}`}>View My Work</a>
                        <a href="mailto:delosangelesranilojohn@gmail.com" className={`${styles.btn} ${styles.secondary}`}>Email Me</a>
                        <a href="/resume/DELOS ANGELES RESUME.pdf" className={`${styles.btn} ${styles.tertiary}`}>CV</a>
                    </div>
                </div>
                <div className={styles.imageContent}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/ranilojohn.jpg"
                            alt="Ranilo John"
                            width={400}
                            height={400}
                            className={styles.profileImage}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
