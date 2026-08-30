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
                        <span className={styles.tabIcon}>★</span> Featured Work
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
                                        <span className={styles.viewBtn}>View Project ↗</span>
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
                        <span className={styles.tabIcon}>🧪</span> Labs & Experiments
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
                                        <span className={styles.viewBtn}>View Lab ↗</span>
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
