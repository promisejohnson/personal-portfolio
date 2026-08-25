import { PROFILE } from '@/data/profile';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>Built with React &amp; TypeScript</span>
      </div>
    </footer>
  );
}
