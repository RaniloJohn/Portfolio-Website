import styles from './ProfessionalSummary.module.css';

const ProfessionalSummary = () => {
    return (
        <section id="summary" className={styles.section}>
            <div className="container">
                <h2 className="section-title">Professional Summary</h2>
                <div className={styles.card}>
                    <p className={styles.text}>
                        I continuously develop my skills in cybersecurity with focus on networking, security operations, and foundational security principles. My learning journey has strengthened my ability to identify risks, analyze threats, and support efforts to protect sensitive information.
                    </p>
                    <p className={styles.text}>
                        I value the Confidentiality, Integrity, and Availability, aiming to apply these principles through ethical and responsible security practices. My goal is to contribute building a secure infrastructure and systems that help organizations maintain their trust, safeguard critical data, and protect the people and infrastructure.
                    </p>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>7 Months</span>
                            <span className={styles.statLabel}> Studying Cybersecurity</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>5</span>
                            <span className={styles.statLabel}>Projects Completed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalSummary;
