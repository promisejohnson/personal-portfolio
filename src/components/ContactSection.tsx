import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '@/data/profile';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.card}`}>
        <h2 className={styles.title}>Let's talk</h2>
        <p className={styles.body}>
          Open to frontend, mobile & product designer roles — happy to walk through any of the projects above in more detail.
        </p>

        <div className={styles.linkRow}>
          <a href={`mailto:${PROFILE.email}`} className={styles.primaryLink}>
            <Mail size={17} />
            {PROFILE.email}
          </a>
          <div className={styles.socialRow}>
            {PROFILE.social.github && (
              <a href={PROFILE.social.github} className={styles.iconLink} aria-label="GitHub">
                <Github size={19} />
              </a>
            )}
            {PROFILE.social.linkedin && (
              <a href={PROFILE.social.linkedin} className={styles.iconLink} aria-label="LinkedIn">
                <Linkedin size={19} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
