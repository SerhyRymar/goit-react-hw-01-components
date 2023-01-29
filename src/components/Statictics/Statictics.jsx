import PropTypes from 'prop-types';
import styles from './Statictics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={styles.statisstic}>
        {title && <h2 className={styles.statisstic_title}>{title}</h2>}
        <ul className={styles.statisstic_list}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li key={id} className={styles.statisstic_item}>
                <span className={styles.statisstic_label}>{label}</span>
                <span className={styles.statisstic_percentage}>
                  {percentage}%
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
