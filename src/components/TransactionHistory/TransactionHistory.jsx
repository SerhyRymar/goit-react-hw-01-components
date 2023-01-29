import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.table_th}>Type</th>
            <th className={styles.table_th}>Amount</th>
            <th className={styles.table_th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <td className={styles.table_td}>{type}</td>
                <td className={styles.table_td}>{amount}</td>
                <td className={styles.table_td}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
