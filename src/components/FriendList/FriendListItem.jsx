import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './FriendListItem.module.css';
export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={styles.item}>
      <span className={clsx(isOnline ? styles.online : styles.offline)}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
