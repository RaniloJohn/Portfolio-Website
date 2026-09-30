import Image from 'next/image';
import styles from './Certifications.module.css';
import { getImagePath } from '@/utils/basePath';
import { certifications } from '@/data/portfolio';

const Certifications = () => {
    return (
        <section id="certifications" className={`section ${styles.section}`}>
            <div className="container">
                <h2 className="tape section-tape">Certifications</h2>

                <ul className={styles.list}>
                    {certifications.map((cert) => (
                        <li key={cert.title} className={styles.item}>
                            <div className={styles.badge}>
                                <Image
                                    src={getImagePath(cert.image)}
                                    alt={`${cert.issuer} badge`}
                                    width={120}
                                    height={120}
                                    className={styles.image}
                                />
                            </div>
                            <span className="tape">{cert.short}</span>
                            <h3 className={styles.title}>{cert.title}</h3>
                            <p className={styles.issuer}>{cert.issuer}</p>
                            <p className={styles.date}>{cert.date.replace(/\s*-\s*/, ' – ')}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Certifications;
