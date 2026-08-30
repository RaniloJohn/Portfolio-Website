import Image from 'next/image';
import styles from './ProjectsGrid.module.css';
import { getImagePath } from '@/utils/basePath';

const featuredProjects = [
    {
        title: "COESS Live Portal",
        category: "Web Application",
        description: "The official web portal for the Computer Engineering Students' Society (COESS) at the University of the East - Caloocan, offering a hub for student registrations, event announcements, and organization resources.",
        image: "/images/coess_live.png",
        link: "https://www.coess.live"
    },
    {
        title: "WorkLearn",
        category: "Web Application",
        description: "A career networking and learning platform tailored for students, featuring resume-making automations, student portfolios, and interactive IQ assessment tests.",
        image: "/images/WorkLearn.png",
        link: "https://github.com/RaniloJohn/WORKLEARN-2.0"
    },
    {
        title: "IM Ticketing System",
        category: "Web Application",
        description: "An Incident Management Ticketing System built to streamline IT operations. Features status dashboards, ticket priorities, service agent queues, and resolution logging.",
        image: "/images/project1.png",
        link: "https://github.com/RaniloJohn/IM-Ticketing-System"
    },
    {
        title: "Certificate Automator",
        category: "Python Automation",
        description: "Automation tool designed to dynamically generate and email personalized certificates using Python, extracting spreadsheet data from Google Sheets or CSV files.",
        image: "/images/Python.jpg",
        link: "#"
    },
    {
        title: "COESS-Networks",
        category: "Network Infrastructure",
        description: "A repository of network topologies and routing configurations demonstrating protocols, subnetting designs, and traffic shaping labs.",
        image: "/images/project1.png",
        link: "https://github.com/RaniloJohn/COESS-Networks"
    }
];

const labProjects = [
    {
        title: "Huawei ENSP COESS Labs",
        category: "Network Engineering",
        description: "Network simulation topology labs built with Huawei Enterprise Network Simulation Platform (eNSP) for COESS networking activities.",
        image: "/images/project1.png",
        link: "https://github.com/RaniloJohn/Huawei-ENSP-COESS"
    },
    {
        title: "SOC Homelab Analysis",
        category: "Security Operations & Analysis",
        description: "A detailed forensic analysis and log auditing project utilizing a virtualized Security Operations Center homelab. Demonstrates telemetry capture, SIEM alerting, and defense playbook analysis.",
        image: "/images/wazuh_logo.png",
        link: "https://coda.io/d/_d9fkctI-GVS/SOC-Homelab-Analysis_su3rJakN"
    },
    {
        title: "Network Security Simulation",
        category: "Security Simulation",
        description: "Design and deployment of a virtualized network environment engineered inside GNS3 and VirtualBox to execute, analyze, and defend against network reconnaissance and DDoS attacks.",
        image: "/images/networksimulation.png",
        link: "https://github.com/RaniloJohn/Network-Security-Simulation"
    },
    {
        title: "Cisco Packet Tracer Labs",
        category: "Network Engineering",
        description: "A structured compilation of physical topology designs and network configurations implementing enterprise-grade security rules and routing guidelines.",
        image: "/images/project1.png",
        link: "https://drive.google.com/drive/folders/1qVXQCFr8HLc4iQluPlPP7JUiXtKvFKSL?usp=sharing"
    }
];

const ProjectsGrid = () => {
    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <h2 className="section-title">Projects</h2>

                <div className={styles.group}>
                    <div className={styles.tabPillHeader}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        Featured Work
                    </div>
                    <div className={styles.grid}>
                        {featuredProjects.map((project, index) => (
                            <a 
                                key={index} 
                                href={project.link} 
                                target={project.link !== '#' ? "_blank" : undefined} 
                                rel="noopener noreferrer" 
                                className={styles.card}
                            >
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={getImagePath(project.image)}
                                        alt={project.title}
                                        fill
                                        className={styles.image}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className={styles.overlay}>
                                        <span className={styles.viewBtn}>
                                            View Project
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M7 17L17 7"/>
                                                <path d="M7 7h10v10"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.categoryBadge}>{project.category}</div>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.description}>{project.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className={styles.group}>
                    <div className={styles.tabPillHeader}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 2v7.31L4.75 20.5a2 2 0 0 0 1.76 2.9h11.02a2 2 0 0 0 1.76-2.9L14 9.31V2"/>
                            <line x1="8.5" x2="15.5" y1="2" y2="2"/>
                            <line x1="9" x2="15" y1="15" y2="15"/>
                        </svg>
                        Labs & Experiments
                    </div>
                    <div className={styles.grid}>
                        {labProjects.map((project, index) => (
                            <a 
                                key={index} 
                                href={project.link} 
                                target={project.link !== '#' ? "_blank" : undefined} 
                                rel="noopener noreferrer" 
                                className={styles.card}
                            >
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={getImagePath(project.image)}
                                        alt={project.title}
                                        fill
                                        className={styles.image}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className={styles.overlay}>
                                        <span className={styles.viewBtn}>
                                            View Lab
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M7 17L17 7"/>
                                                <path d="M7 7h10v10"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.categoryBadge}>{project.category}</div>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.description}>{project.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
