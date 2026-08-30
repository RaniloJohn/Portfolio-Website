import styles from './ProfessionalSummary.module.css';

const ProfessionalSummary = () => {
    return (
        <section id="summary" className={styles.section}>
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className={styles.card}>
                    <p className={styles.text}>
                        I continuously develop my skills in cybersecurity with a focus on networking, security operations, and foundational security principles. My learning journey has strengthened my ability to identify risks, analyze threats, and support efforts to protect sensitive information.
                    </p>
                    <p className={styles.text}>
                        I value Confidentiality, Integrity, and Availability (CIA triad), aiming to apply these principles through ethical and responsible security practices. My goal is to contribute to building secure infrastructures and systems that help organizations maintain trust and safeguard critical data.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalSummary;
