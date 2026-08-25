import { PROFILE } from '@/data/profile';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className="container">
        {PROFILE.availableForWork && (
          <div className={styles.availability}>
            <span className={styles.dot} />
            Available for new opportunities
          </div>
        )}

        <h1 className={styles.title}>{PROFILE.tagline}</h1>

        <div className={styles.metaRow}>
          <span className={styles.role + ' mono'}>{PROFILE.role}</span>
          <span className={styles.sep}>·</span>
          <span className={styles.location}>{PROFILE.location}</span>
        </div>

        <div className={styles.actions}>
          <a href="#work" className={styles.primaryBtn}>View my work</a>
          <a href="#contact" className={styles.secondaryBtn}>Get in touch</a>
        </div>
      </div>
    </section>
  );
}
