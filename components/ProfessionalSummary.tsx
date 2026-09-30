import styles from './ProfessionalSummary.module.css';
import RackAscii from './RackAscii';

const focus = [
    { k: 'Detect', v: 'SIEM and IDS with Wazuh, Suricata, and Fortinet' },
    { k: 'Design', v: 'Segmented networks, VLSM, Cisco IOS routing and switching' },
    { k: 'Operate', v: 'Linux administration and virtualized labs in VMware, GNS3, EVE-NG' },
    { k: 'Build', v: 'Python automation and AI-assisted workflows' },
];

const ProfessionalSummary = () => {
    return (
        <section id="about" className="section">
            <div className={`container ${styles.layout}`}>
                <h2 className="tape section-tape">About</h2>

                <div className={styles.body}>
                    <p className={styles.lead}>
                        4th-year Computer Engineering student specializing in cybersecurity, network engineering, and threat
                        triage, certified in Cisco CCNA, CompTIA Security+, ISC2 CC, and Aviatrix ACE.
                    </p>
                    <p className={styles.text}>
                        I design resilient network architectures, configure SIEM/IDS platforms, build segmented lab
                        environments, and prototype security tools. AI-assisted workflows help me ship faster while keeping
                        documentation clear and thorough.
                    </p>
                </div>

                <dl className={styles.focus}>
                    {focus.map((f) => (
                        <div key={f.k} className={styles.row}>
                            <dt className="tape tape--white">{f.k}</dt>
                            <dd>{f.v}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            <div className="container">
                <RackAscii />
            </div>
        </section>
    );
};

export default ProfessionalSummary;
