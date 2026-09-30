import { featuredProjects, labProjects, certifications } from '@/data/portfolio';
import { getImagePath } from '@/utils/basePath';
import styles from './PatchPanel.module.css';

type Port = { label: string; title: string; href?: string; external?: boolean };

const ports: Port[] = [
    { label: 'About', title: 'About', href: '#about' },
    ...certifications.map((c) => ({ label: c.short, title: c.title, href: '#certifications' })),
    { label: 'Exp', title: 'Experience', href: '#experience' },
    ...featuredProjects.map((p) => ({ label: p.short, title: p.title, href: `#${p.slug}` })),
    ...labProjects.map((p) => ({ label: p.short, title: p.title, href: `#${p.slug}` })),
    { label: 'CV', title: 'Résumé (PDF)', href: getImagePath('/resume/DELOS ANGELES RESUME.pdf'), external: true },
    { label: 'Email', title: 'Email', href: 'mailto:delosangelesranilojohn@gmail.com' },
    { label: 'GitHub', title: 'GitHub', href: 'https://github.com/RaniloJohn', external: true },
    { label: 'LinkdIn', title: 'LinkedIn', href: 'https://ph.linkedin.com/in/ranilojohn', external: true },
];

while (ports.length < 24) ports.push({ label: '', title: 'Spare port' });

const groups = [0, 1, 2, 3].map((g) => ports.slice(g * 6, g * 6 + 6));

const PatchPanel = () => {
    return (
        <nav className={styles.panel} aria-label="Site map">
            <span className={styles.ear} aria-hidden="true"><i /><i /></span>
            <div className={styles.face}>
                {groups.map((group, g) => (
                    <ol key={g} className={styles.group} start={g * 6 + 1}>
                        {group.map((port, i) => {
                            const n = g * 6 + i + 1;
                            const inner = (
                                <>
                                    <span className={styles.num} aria-hidden="true">{n}</span>
                                    <span className={styles.jack} aria-hidden="true">
                                        <span className={styles.pins} />
                                    </span>
                                    <span className={styles.led} aria-hidden="true" />
                                    <span className={styles.label}>{port.label || '—'}</span>
                                </>
                            );
                            return (
                                <li key={n} className={styles.port} style={{ '--n': n } as React.CSSProperties}>
                                    {port.href ? (
                                        <a
                                            href={port.href}
                                            className={styles.hit}
                                            title={`Port ${n}: ${port.title}`}
                                            {...(port.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        >
                                            {inner}
                                            <span className="visually-hidden">{port.title}</span>
                                        </a>
                                    ) : (
                                        <span className={`${styles.hit} ${styles.spare}`}>{inner}</span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                ))}
            </div>
            <span className={styles.ear} aria-hidden="true"><i /><i /></span>
        </nav>
    );
};

export default PatchPanel;
