import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import styles from './ResumeSection.module.css';
import { getImagePath } from '@/utils/basePath';

type Entry = { title: string; org: string; period: string; bullets?: string[]; note?: string };

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

const groups: { label: string; entries: Entry[] }[] = [
    {
        label: 'Work',
        entries: technicalExperience.map((e) => ({ title: e.role, org: e.company, period: e.period, bullets: e.bullets })),
    },
    {
        label: 'Projects',
        entries: technicalProjects.map((e) => ({ title: e.role, org: e.company, period: e.period, bullets: e.bullets })),
    },
    {
        label: 'Leadership',
        entries: leadershipExperience.map((e) => ({ title: e.role, org: e.company, period: e.period, bullets: e.bullets })),
    },
    {
        label: 'Education',
        entries: education.map((e) => ({ title: e.degree, org: e.school, period: e.period.replace('Graduation: ', 'Grad. '), note: e.description })),
    },
];

const ResumeSection = () => {
    return (
        <section id="experience" className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.head}>
                    <h2 className="tape section-tape">Experience</h2>
                    <a
                        href={getImagePath('/resume/DELOS ANGELES RESUME.pdf')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cvLink}
                    >
                        View CV
                        <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                    </a>
                </div>

                <div className={styles.groups}>
                    {groups.map((group) => (
                        <div key={group.label} className={styles.group}>
                            <h3 className={styles.groupLabel}>{group.label}</h3>
                            <ol className={styles.entries}>
                                {group.entries.map((item) => (
                                    <li key={item.title} className={styles.entry}>
                                        <p className={styles.period}>{item.period}</p>
                                        <div>
                                            <h4 className={styles.role}>{item.title}</h4>
                                            <p className={styles.org}>{item.org}</p>
                                            {item.bullets && (
                                                <ul className={styles.bullets}>
                                                    {item.bullets.map((b) => (
                                                        <li key={b}>{b}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {item.note && <p className={styles.note}>{item.note}</p>}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>

                <div className={styles.skills}>
                    <h3 className={styles.skillsTitle}>Technical skills</h3>
                    <div className={styles.skillsGrid}>
                        {technicalSkills.map((group) => (
                            <div key={group.category} className={styles.skillGroup}>
                                <h4 className={styles.skillCategory}>{group.category}</h4>
                                <ul className={styles.skillList}>
                                    {group.skills.map((skill) => (
                                        <li key={skill} className="tape tape--white">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
