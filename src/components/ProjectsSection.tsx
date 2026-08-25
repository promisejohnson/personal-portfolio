import { useMemo, useState } from 'react';
import { PROJECTS, CATEGORIES, type ProjectCategory } from '@/data/projects';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category.includes(filter))),
    [filter]
  );

  return (
    <section id="work" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Selected work</span>
            <h2 className={styles.title}>Things I've built</h2>
          </div>
          <div className={styles.filterRow} role="group" aria-label="Filter projects by category">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`${styles.filterChip} ${filter === c ? styles.filterChipActive : ''}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filtered.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}
