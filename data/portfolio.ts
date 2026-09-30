export type Project = {
    slug: string;
    short: string;
    title: string;
    category: string;
    description: string;
    image: string;
    link: string;
};

export type Cert = { short: string; title: string; issuer: string; date: string; image: string };

export const featuredProjects: Project[] = [
    {
        slug: "coess",
        short: "COESS",
        title: "COESS Live Portal",
        category: "Web Application",
        description: "The official web portal for the Computer Engineering Students' Society (COESS) at the University of the East - Caloocan, offering a hub for student registrations, event announcements, and organization resources.",
        image: "/images/coess_live.png",
        link: "https://www.coess.live"
    },
    {
        slug: "worklearn",
        short: "WRKLRN",
        title: "WorkLearn",
        category: "Web Application",
        description: "A career networking and learning platform tailored for students, featuring resume-making automations, student portfolios, and interactive IQ assessment tests.",
        image: "/images/WorkLearn.png",
        link: "https://github.com/RaniloJohn/WORKLEARN-2.0"
    },
    {
        slug: "im-ticketing",
        short: "TICKET",
        title: "IM Ticketing System",
        category: "Web Application",
        description: "An Incident Management Ticketing System built to streamline IT operations. Features status dashboards, ticket priorities, service agent queues, and resolution logging.",
        image: "/images/project1.png",
        link: "https://github.com/RaniloJohn/IM-Ticketing-System"
    },
    {
        slug: "cert-automator",
        short: "CERTGN",
        title: "Certificate Automator",
        category: "Python Automation",
        description: "Automation tool designed to dynamically generate and email personalized certificates using Python, extracting spreadsheet data from Google Sheets or CSV files.",
        image: "/images/Python.jpg",
        link: "#"
    },
    {
        slug: "coess-networks",
        short: "NETS",
        title: "COESS-Networks",
        category: "Network Infrastructure",
        description: "A repository of network topologies and routing configurations demonstrating protocols, subnetting designs, and traffic shaping labs.",
        image: "/images/project1.png",
        link: "https://github.com/RaniloJohn/COESS-Networks"
    }
];

export const labProjects: Project[] = [
    {
        slug: "ensp",
        short: "ENSP",
        title: "Huawei ENSP COESS Labs",
        category: "Network Engineering",
        description: "Network simulation topology labs built with Huawei Enterprise Network Simulation Platform (eNSP) for COESS networking activities.",
        image: "/images/project1.png",
        link: "https://github.com/RaniloJohn/Huawei-ENSP-COESS"
    },
    {
        slug: "soc-homelab",
        short: "SOC",
        title: "SOC Homelab Analysis",
        category: "Security Operations & Analysis",
        description: "A detailed forensic analysis and log auditing project utilizing a virtualized Security Operations Center homelab. Demonstrates telemetry capture, SIEM alerting, and defense playbook analysis.",
        image: "/images/wazuh_logo.png",
        link: "https://coda.io/d/_d9fkctI-GVS/SOC-Homelab-Analysis_su3rJakN"
    },
    {
        slug: "netsec-sim",
        short: "NETSIM",
        title: "Network Security Simulation",
        category: "Security Simulation",
        description: "Design and deployment of a virtualized network environment engineered inside GNS3 and VirtualBox to execute, analyze, and defend against network reconnaissance and DDoS attacks.",
        image: "/images/networksimulation.png",
        link: "https://github.com/RaniloJohn/Network-Security-Simulation"
    },
    {
        slug: "packet-tracer",
        short: "PKTTRC",
        title: "Cisco Packet Tracer Labs",
        category: "Network Engineering",
        description: "A structured compilation of physical topology designs and network configurations implementing enterprise-grade security rules and routing guidelines.",
        image: "/images/project1.png",
        link: "https://drive.google.com/drive/folders/1qVXQCFr8HLc4iQluPlPP7JUiXtKvFKSL?usp=sharing"
    }
];

export const certifications: Cert[] = [
    {
        short: "CCNA",
        title: "Cisco Certified Network Associate (CCNA)",
        issuer: "Cisco",
        date: "August 5, 2026 - August 5, 2029",
        image: "/images/CCNA.png"
    },
    {
        short: "SEC+",
        title: "CompTIA Security+",
        issuer: "CompTIA",
        date: "January 2026- January 2029",
        image: "/images/CompTIA_Security.png"
    },
    {
        short: "ISC2 CC",
        title: "ISC2 Certified in Cybersecurity",
        issuer: "ISC2",
        date: "November 2025 - November 2028",
        image: "/images/ISC2.jpg"
    },
    {
        short: "GOOGLE",
        title: "Google Cybersecurity Professional",
        issuer: "Coursera, Google",
        date: "November 2025",
        image: "/images/GoogleCybersecurity - Copy.jpg"
    },
    {
        short: "ACE",
        title: "Aviatrix Multicloud Network Associate",
        issuer: "Aviatrix",
        date: "December 2025 - December 2028",
        image: "/images/Aviatrix.png"
    }
];


/* Patch-panel port numbers, in page order: About, Certifications, Experience, Work, Labs. */
export const PORT = {
    about: 1,
    certStart: 2,
    experience: 2 + certifications.length,
    featuredStart: 3 + certifications.length,
    labStart: 3 + certifications.length + featuredProjects.length,
};
