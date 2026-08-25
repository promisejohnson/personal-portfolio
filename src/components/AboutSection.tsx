import { PROFILE, SKILLS } from '@/data/profile';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div>
          <span className={styles.eyebrow}>About</span>
          <h2 className={styles.title}>A little about me</h2>
          <p className={styles.bio}>{PROFILE.bio}</p>
        </div>

        <div className={styles.skills}>
          {SKILLS.map((group) => (
            <div key={group.category} className={styles.skillGroup}>
              <span className={styles.skillCategory}>{group.category}</span>
              <div className={styles.skillTags}>
                {group.items.map((item) => (
                  <span key={item} className={styles.skillTag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
