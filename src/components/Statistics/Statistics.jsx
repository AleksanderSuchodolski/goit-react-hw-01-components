import styles from './Statistics.module.css';
export function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className={styles.item}>
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
