import { rackRows } from '@/data/rackAscii';
import styles from './RackAscii.module.css';

/* Activity LEDs get a pseudo-random blink offset so the rack never pulses in sync. */
const delay = (row: number, col: number) => `${((row * 7919 + col * 104729) % 1700) / 1000}s`;

const RackAscii = () => {
    return (
        <figure className={styles.figure}>
            <pre
                className={styles.pre}
                role="img"
                aria-label="ASCII art of a 14U lab rack: patch panel, two 48-port switches, cable manager, firewall, edge router, two 2U servers, NAS storage and a UPS, with blinking activity lights."
            >
                {rackRows.map((row, r) => {
                    let col = 0;
                    return (
                        <span key={r} className={styles.line}>
                            {row.map(([cls, text], i) => {
                                const start = col;
                                col += text.length;
                                const isLed = cls === 'led-a';
                                return (
                                    <span
                                        key={i}
                                        className={styles[cls]}
                                        style={isLed ? ({ '--d': delay(r, start) } as React.CSSProperties) : undefined}
                                    >
                                        {text}
                                    </span>
                                );
                            })}
                            {'\n'}
                        </span>
                    );
                })}
            </pre>
        </figure>
    );
};

export default RackAscii;
