import Image from 'next/image';
import { ArrowUpRight, LockSimple } from '@phosphor-icons/react/dist/ssr';
import styles from './ProjectsGrid.module.css';
import { getImagePath } from '@/utils/basePath';
import { featuredProjects, labProjects, PORT } from '@/data/portfolio';

const hostOf = (url: string) => {
    try {
        return new URL(url).hostname.replace('www.', '');
    } catch {
        return '';
    }
};

const pathOf = (url: string) => {
    try {
        const u = new URL(url);
        const path = u.pathname.replace(/\/$/, '');
        return u.hostname.includes('github.com') ? path.slice(1) : hostOf(url);
    } catch {
        return '';
    }
};

const ProjectsGrid = () => {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="tape section-tape">Work</h2>

                <ol className={styles.featured}>
                    {featuredProjects.map((p, i) => {
                        const linked = p.link !== '#';
                        return (
                            <li key={p.slug} id={p.slug} className={`${styles.project} ${i === 0 ? styles.lead : ''}`}>
                                <div className={styles.meta}>
                                    <span className={styles.port}>Port {String(PORT.featuredStart + i).padStart(2, '0')}</span>
                                    <span className={styles.category}>{p.category}</span>
                                </div>
                                <div className={styles.copy}>
                                    <h3 className={styles.title}>{p.title}</h3>
                                    <p className={styles.description}>{p.description}</p>
                                    {linked ? (
                                        <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.open}>
                                            {pathOf(p.link)}
                                            <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                                        </a>
                                    ) : (
                                        <span className={styles.private}>
                                            <LockSimple size={14} weight="bold" aria-hidden="true" />
                                            Private repository
                                        </span>
                                    )}
                                </div>
                                <div className={styles.shot}>
                                    {i === 0 && linked && (
                                        <div className={styles.chrome} aria-hidden="true">
                                            <span className={styles.dots}><i /><i /><i /></span>
                                            <span className={styles.url}>{hostOf(p.link)}</span>
                                        </div>
                                    )}
                                    <div className={styles.frame}>
                                    <Image
                                        src={getImagePath(p.image)}
                                        alt={`${p.title} screenshot`}
                                        fill
                                        className={styles.image}
                                        sizes={i === 0 ? '(max-width: 860px) 100vw, 60vw' : '(max-width: 860px) 100vw, 40vw'}
                                    />
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>

                <div id="labs" className={styles.labs}>
                    <h3 className={styles.labsTitle}>Labs &amp; experiments</h3>
                    <table className={styles.schedule}>
                        <caption className="visually-hidden">Lab projects, listed as a cable schedule</caption>
                        <thead>
                            <tr>
                                <th scope="col">Port</th>
                                <th scope="col">Label</th>
                                <th scope="col">Type</th>
                                <th scope="col">Destination</th>
                            </tr>
                        </thead>
                        <tbody>
                            {labProjects.map((lab, i) => (
                                <tr key={lab.slug} id={lab.slug}>
                                    <td className={styles.portCell}>{String(PORT.labStart + i).padStart(2, '0')}</td>
                                    <td>
                                        <div className={styles.labelCell}>
                                            <span className="tape tape--white">{lab.short}</span>
                                            <strong className={styles.labName}>{lab.title}</strong>
                                            <span className={styles.labDesc}>{lab.description}</span>
                                        </div>
                                    </td>
                                    <td className={styles.typeCell}>{lab.category}</td>
                                    <td className={styles.destCell}>
                                        <a href={lab.link} target="_blank" rel="noopener noreferrer" className={styles.dest}>
                                            {hostOf(lab.link)}
                                            <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ProjectsGrid;
