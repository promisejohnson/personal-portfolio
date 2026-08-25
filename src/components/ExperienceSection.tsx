import { EXPERIENCE } from '@/data/profile';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className={styles.eyebrow}>Experience</span>
        <h2 className={styles.title}>Where I've worked</h2>

        <div className={styles.list}>
          {EXPERIENCE.map((entry) => (
            <div key={entry.role + entry.org} className={styles.row}>
              <span className={styles.period + ' mono'}>{entry.period}</span>
              <div className={styles.content}>
                <h3 className={styles.role}>{entry.role} <span className={styles.org}>· {entry.org}</span></h3>
                <p className={styles.description}>{entry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
