import { PROFILE } from '@/data/profile';
import styles from './Nav.module.css';

const LINKS = ['Work', 'About', 'Contact'];

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>{PROFILE.name}</a>
        <nav className={styles.links}>
          {LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
          ))}
        </nav>
        <a href={PROFILE.resumeUrl} className={styles.resumeBtn}>Résumé</a>
      </div>
    </header>
  );
}
