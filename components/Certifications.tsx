import Image from 'next/image';
import styles from './Certifications.module.css';

const certifications = [
    {
        title: "CompTIA Security+",
        issuer: "CompTIA",
        date: "January 2026- January 2029",
        image: "/images/CompTIA_Security.png"
    },
    {
        title: "ISC2 Certified in Cybersecurity",
        issuer: "ISC2",
        date: "November 2025 - November 2028",
        image: "/images/ISC2.jpg"
    },
    {
        title: "Google Cybersecurity Professional",
        issuer: "Coursera, Google",
        date: "November 2025",
        image: "/images/GoogleCybersecurity - Copy.jpg"
    },
    {
        title: "Aviatrix Multicloud Network Associate",
        issuer: "Aviatrix",
        date: "December 2025 - December 2028",
        image: "/images/Aviatrix.png"
    }
];

const ongoingCertifications = [
    {
        title: "Currently nothing ongoing",
        issuer: "N/A",
        status: "Still looking for Certifications",
        image: "/images/certification.png"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className={styles.section}>
            <div className="container">
                <h2 className="section-title">Certifications</h2>

                <div className={styles.group}>
                    <div className={styles.grid}>
                        {certifications.map((cert, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        width={120}
                                        height={120}
                                        className={styles.image}
                                    />
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.title}>{cert.title}</h3>
                                    <span className={styles.issuer}>{cert.issuer}</span>
                                    <span className={styles.date}>Issued {cert.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.group}>
                    <h3 className={styles.subTitle}>Ongoing</h3>
                    <div className={styles.grid}>
                        {ongoingCertifications.map((cert, index) => (
                            <div key={index} className={`${styles.card} ${styles.ongoing}`}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        width={120}
                                        height={120}
                                        className={`${styles.image} ${styles.imageOngoing}`}
                                    />
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.title}>{cert.title}</h3>
                                    <span className={styles.issuer}>{cert.issuer}</span>
                                    <span className={styles.date}>{cert.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Certifications;
