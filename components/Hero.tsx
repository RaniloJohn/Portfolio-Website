import Image from 'next/image';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import styles from './Hero.module.css';
import PatchPanel from './PatchPanel';
import { getImagePath } from '@/utils/basePath';
import { certifications } from '@/data/portfolio';

const Hero = () => {
    return (
        <section id="top" className={styles.hero}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.text}>
                    <h1 className={styles.name}>
                        <span>Ranilo John</span>
                        <span>Delos Angeles</span>
                    </h1>
                    <p className={styles.lede}>
                        Computer Engineering student in cybersecurity and networking. I design networks, run SOC labs,
                        and build tools that make security work faster.
                    </p>
                    <ul className={styles.certs} aria-label="Certifications">
                        {certifications.map((c) => (
                            <li key={c.short} className="tape tape--white">{c.short}</li>
                        ))}
                    </ul>
                    <div className={styles.actions}>
                        <a href="mailto:delosangelesranilojohn@gmail.com" className={styles.primary}>
                            Email me
                        </a>
                        <a
                            href={getImagePath('/resume/DELOS ANGELES RESUME.pdf')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondary}
                        >
                            View CV
                            <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <figure className={styles.portrait}>
                    <div className={styles.frame}>
                        <Image
                            src={getImagePath('/images/ranilojohn.jpg')}
                            alt="Portrait of Ranilo John Delos Angeles"
                            width={520}
                            height={620}
                            className={styles.photo}
                            priority
                        />
                    </div>
                    <figcaption className={`tape ${styles.photoTape}`}>BS CpE · UE Caloocan · 2027</figcaption>
                </figure>
            </div>

            <div className="container">
                <PatchPanel />
            </div>
        </section>
    );
};

export default Hero;
