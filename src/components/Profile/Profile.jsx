import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = 
({ username, tag, location, avatar, stats:{followers, views, likes} }) => {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.profileCard}>
          <img
            className={styles.profileImg}
            src={avatar}
            alt="Profile_avatar"
          />
          <p className={styles.profileName}>{username}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
        <ul className={styles.statsList}>
          <li className={styles.statsItems}>
            <span className={styles.statsInfo}>Followers</span>
            <span className={styles.statsQuantity}>{followers}</span>
          </li>
          <li className={styles.statsItems}>
            <span className={styles.statsInfo}>Views</span>
            <span className={styles.statsQuantity}>{views}</span>
          </li>
          <li className={styles.statsItems}>
            <span className={styles.statsInfo}>Likes</span>
            <span className={styles.statsQuantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}; 

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};