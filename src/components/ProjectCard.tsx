import type { Project } from '@/data/projects';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.swatch} style={{ background: project.color }} />
        <div className={styles.categoryTags}>
          {project.category.map((c) => <span key={c} className={styles.categoryTag}>{c}</span>)}
        </div>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>

      <p className={styles.highlight}>
        <span className={styles.highlightLabel}>Notable —</span> {project.highlight}
      </p>

      <div className={styles.stackRow}>
        {project.stack.map((s) => <span key={s} className="mono">{s}</span>)}
      </div>
    </div>
  );
}
