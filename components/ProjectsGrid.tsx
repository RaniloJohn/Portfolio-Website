import Image from 'next/image';
import styles from './ProjectsGrid.module.css';

const featuredProjects = [
    {
        title: "WorkLearn",
        category: "Web Application",
        description: "A website application like LinkedIn together with Resume Maker and IQ Test tailored for Students",
        image: "/images/Python.jpg",
        link: "https://github.com/RaniloJohn/WORKLEARN-2.0"
    },
    {
        title: "Certificate Automator",
        category: "Python Application",
        description: "Automation tool prepares to generate and email personalized certificates using Python, supporting data from Google Sheets or CSVs.",
        image: "/images/Python.jpg",
        link: "#"
    },

];

const labProjects = [
    {
        title: "Network Security Simulation",
        category: "Security Simulation",
        description: "This project demonstrates the design and analysis of a virtualized network environment to simulate real-world cyberattacks. By engineering a topology with GNS3 and VirtualBox, I conducted network reconnaissance and a Denial of Service (DoS) attack to analyze traffic behavior and system failure points using industry-standard tools.",
        image: "/images/networksimulation.png",
        link: "https://github.com/RaniloJohn/Network-Security-Simulation"
    },
    {
        title: "Cisco Packet Tracer Labs",
        category: "Network Simulation",
        description: "Compilation of laboratory activities from UE-Caloocan Computer Networks Subject, Implementing and Designing Infrastructures like a Network Engineer.",
        image: "/images/project1.png",
        link: "https://drive.google.com/drive/folders/1qVXQCFr8HLc4iQluPlPP7JUiXtKvFKSL?usp=sharing"
    }
];

const ProjectsGrid = () => {
    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <h2 className="section-title">Work</h2>

                <div className={styles.group}>
                    <h3 className={styles.subTitle}>Featured Projects</h3>
                    <div className={styles.grid}>
                        {featuredProjects.map((project, index) => (
                            <a key={index} href={project.link} className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className={styles.image}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className={styles.overlay}>
                                        <span className={styles.viewBtn}>View Project</span>
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <span className={styles.category}>{project.category}</span>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.description}>{project.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className={styles.group}>
                    <h3 className={styles.subTitle}>Labs & Experiments</h3>
                    <div className={styles.grid}>
                        {labProjects.map((project, index) => (
                            <a key={index} href={project.link} className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className={styles.image}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className={styles.overlay}>
                                        <span className={styles.viewBtn}>View Lab</span>
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <span className={styles.category}>{project.category}</span>
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
