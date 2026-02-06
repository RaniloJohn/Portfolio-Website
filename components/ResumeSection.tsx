import styles from './ResumeSection.module.css';

const experience = [
    {
        role: "Public Relations Officer",
        company: "Computer Engineering Students' Society - UE Caloocan",
        period: "2025 - Present",
        description: "Promoted workshops, seminars, and technical programs to increase engagement within the community. Designed and produced promotional materials (pubmats) for events, announcements, and society initiatives"
    },
    {
        role: "Treasurer",
        company: "Youth For Animals UE - Caloocan",
        period: "2024 - 2025",
        description: "Managed the organization’s funds, budgeting, and financial records. Oversaw collection, safekeeping, and allocation of donations and event proceeds"
    },
    {
        role: "Player - League of Legends",
        company: "UE Zenith Esports - Caloocan",
        period: "2022 - Present",
        description: "Participated in inter-campus tournaments and scrimmages"
    }
];

const education = [
    {
        degree: "B.S. Computer Engineering",
        school: "University of the East - Caloocan",
        period: "2023 - 2027 (Expected)",
        description: "Currently a third year student with current GWA of 1.9"
    }
];

const ResumeSection = () => {
    return (
        <section id="resume" className={styles.section}>
            <div className="container">
                <h2 className="section-title">Resume</h2>

                <div className={styles.category}>
                    <h3 className={styles.categoryTitle}>Leadership Experience</h3>
                    <div className={styles.timeline}>
                        {experience.map((item, index) => (
                            <div key={index} className={styles.timelineItem}>
                                <div className={styles.marker}></div>
                                <div className={styles.content}>
                                    <div className={styles.header}>
                                        <h4 className={styles.role}>{item.role}</h4>
                                        <span className={styles.company}>{item.company}</span>
                                        <span className={styles.period}>{item.period}</span>
                                    </div>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.category}>
                    <h3 className={styles.categoryTitle}>Technical Experience</h3>
                    <div className={styles.timeline}>
                        {/* Placeholder for new experience items - user can fill this in */}
                        <div className={styles.timelineItem}>
                            <div className={styles.marker}></div>
                            <div className={styles.content}>
                                <div className={styles.header}>
                                    <h4 className={styles.role}>Looking for opportunities</h4>
                                    <span className={styles.company}>Self-Taught</span>
                                    <span className={styles.period}>2023 - Present</span>
                                </div>
                                <p className={styles.description}>Currently looking for Internship :)</p>
                            </div>
                        </div>
                    </div>
                </div>

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

            </div>
        </section>
    );
};

export default ResumeSection;
