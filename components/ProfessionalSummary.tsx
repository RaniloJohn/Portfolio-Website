import styles from './ProfessionalSummary.module.css';

const ProfessionalSummary = () => {
    return (
        <section id="summary" className={styles.section}>
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className={styles.card}>
                    <p className={styles.text}>
                        4th-year Computer Engineering student specializing in cybersecurity, network engineering, and threat triage. Certified in Cisco CCNA, CompTIA Security+, ISC2 CC, and Aviatrix ACE, with hands-on experience designing resilient network architectures, configuring SIEM/IDS platforms (Wazuh, Suricata).
                    </p>
                    <p className={styles.text}>
                        Skilled in Linux system administration, and AI-assisted workflows to speed up project delivery, build reliable systems, and maintain clear, thorough documentation. Experienced in building segmented lab environments and developing rapid-prototype security tools, combining technical discipline with modern engineering practices to deliver proactive, well-documented security solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalSummary;
