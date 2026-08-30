import styles from './ResumeSection.module.css';
import { getImagePath } from '@/utils/basePath';

const technicalExperience = [
    {
        role: "Cybersecurity Intern",
        company: "RivanCyber Training Institute Inc. • Makati City",
        period: "May 2026 - July 2026",
        bullets: [
            "Optimized enterprise network simulations within VMware environments by configuring robust network topologies, managing virtual and physical Cisco Switches, Routers, DNS, and DHCP services via SecureCRT.",
            "Enhanced automated local threat detection and log analysis by deploying an AI-Enrichment Logs SOC Laboratory baseline architecture for training environments.",
            "Boosted student lab success rates by guiding 20+ students through the troubleshooting of complex network topologies, security configurations, and technical errors."
        ]
    }
];

const technicalProjects = [
    {
        role: "AI-Assisted SOC Laboratory (Homelab)",
        company: "Homelab & Cybersecurity Engineering",
        period: "2026",
        bullets: [
            "Engineered an enterprise SOC laboratory using VMware to orchestrate a Fortinet firewall, a Wazuh manager with Suricata IDS, and 2-3 endpoint agents.",
            "Integrated an offline AI pipeline via Filebeat and ELK, leveraging a localized TinyLLaMa instance to automatically enrich security logs with MITRE ATT&CK mappings."
        ]
    }
];

const leadershipExperience = [
    {
        role: "Public Relations Officer",
        company: "Computer Engineering Students' Society - UE Caloocan",
        period: "2025 - Present",
        bullets: [
            "Promoted workshops, seminars, and technical programs to increase engagement within the community. Served as Student Speaker for 'From Student to Security: Leveling up your Cybersecurity Career,' teaching cybersecurity fundamentals, toolsets, and mindsets to peers."
        ]
    }
];

const education = [
    {
        degree: "Bachelor of Science in Computer Engineering",
        school: "University of the East - Caloocan City",
        period: "Graduation: Jun 2027",
        description: "Caloocan City, NCR"
    },
    {
        degree: "Senior High School - ICT Graduate",
        school: "University of the East - Caloocan City",
        period: "Graduation: July 2023",
        description: "Caloocan City, NCR"
    }
];

const technicalSkills = [
    {
        category: "Computer Networking",
        skills: ["Cisco IOS CLI (Routing & Switching)", "VLSM / Subnetting", "Packet Analysis (Wireshark)", "IPAM"]
    },
    {
        category: "Cybersecurity",
        skills: ["Threat Detection (Wazuh, Suricata, Fortinet)", "SOC Operations", "ACL", "Security Standards"]
    },
    {
        category: "Programming",
        skills: ["Python", "Java", "HTML", "CSS", "REST API", "JSON"]
    },
    {
        category: "Systems & Tools",
        skills: ["Linux Administration (Rocky Linux, Kali)", "VMware Workstation", "GNS3", "SecureCRT", "EVE-NG"]
    }
];

const ResumeSection = () => {
    return (
        <section id="resume" className={styles.section}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                    <h2 className="section-title" style={{ margin: 0 }}>Resume & Experience</h2>
                    <a 
                        href={getImagePath('/resume/DELOS ANGELES RESUME.pdf')} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '8px 16px',
                            background: 'var(--surface)',
                            color: 'var(--foreground)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            textDecoration: 'none'
                        }}
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" x2="12" y1="15" y2="3"/>
                        </svg>
                        Download PDF CV
                    </a>
                </div>

                {/* Experience */}
                <div className={styles.category}>
                    <h3 className={styles.categoryTitle}>Experience</h3>
                    <div className={styles.timeline}>
                        {technicalExperience.map((item, index) => (
                            <div key={index} className={styles.timelineItem}>
                                <div className={styles.marker}></div>
                                <div className={styles.content}>
                                    <div className={styles.header}>
                                        <h4 className={styles.role}>{item.role}</h4>
                                        <span className={styles.company}>{item.company}</span>
                                        <span className={styles.period}>{item.period}</span>
                                    </div>
                                    <ul className={styles.bulletList}>
                                        {item.bullets.map((bullet, bIndex) => (
                                            <li key={bIndex} className={styles.bulletItem}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Projects */}
                <div className={styles.category}>
                    <h3 className={styles.categoryTitle}>Technical Projects</h3>
                    <div className={styles.timeline}>
                        {technicalProjects.map((item, index) => (
                            <div key={index} className={styles.timelineItem}>
                                <div className={styles.marker}></div>
                                <div className={styles.content}>
                                    <div className={styles.header}>
                                        <h4 className={styles.role}>{item.role}</h4>
                                        <span className={styles.company}>{item.company}</span>
                                        <span className={styles.period}>{item.period}</span>
                                    </div>
                                    <ul className={styles.bulletList}>
                                        {item.bullets.map((bullet, bIndex) => (
                                            <li key={bIndex} className={styles.bulletItem}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Leadership Experience */}
                <div className={styles.category}>
                    <h3 className={styles.categoryTitle}>Leadership Experience</h3>
                    <div className={styles.timeline}>
                        {leadershipExperience.map((item, index) => (
                            <div key={index} className={styles.timelineItem}>
                                <div className={styles.marker}></div>
                                <div className={styles.content}>
                                    <div className={styles.header}>
                                        <h4 className={styles.role}>{item.role}</h4>
                                        <span className={styles.company}>{item.company}</span>
                                        <span className={styles.period}>{item.period}</span>
                                    </div>
                                    <ul className={styles.bulletList}>
                                        {item.bullets.map((bullet, bIndex) => (
                                            <li key={bIndex} className={styles.bulletItem}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className={styles.category}>
                    <h3 className={styles.categoryTitle}>Education</h3>
                    <div className={styles.timeline}>
                        {education.map((item, index) => (
                            <div key={index} className={styles.timelineItem}>
                                <div className={styles.marker}></div>
                                <div className={styles.content}>
                                    <div className={styles.header}>
                                        <h4 className={styles.role}>{item.degree}</h4>
                                        <span className={styles.company}>{item.school}</span>
                                        <span className={styles.period}>{item.period}</span>
                                    </div>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Skills */}
                <div className={styles.category}>
                    <h3 className={styles.categoryTitle}>Technical Skills</h3>
                    <div className={styles.skillsGrid}>
                        {technicalSkills.map((group, index) => (
                            <div key={index} className={styles.skillGroup}>
                                <h4 className={styles.skillCategoryName}>{group.category}</h4>
                                <div className={styles.skillPills}>
                                    {group.skills.map((skill, sIndex) => (
                                        <span key={sIndex} className={styles.skillPill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ResumeSection;
