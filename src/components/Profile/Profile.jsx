import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = 
({ username, tag, location, avatar, stats:{followers, views, likes} }) => {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.profile_card}>
          <img
            className={styles.profile_img}
            src={avatar}
            alt="Profile_avatar"
          />
          <p className={styles.profile_name}>{username}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
        <ul className={styles.stats_list}>
          <li className={styles.stats_items}>
            <span className={styles.stats_info}>Followers</span>
            <span className={styles.stats_quantity}>{followers}</span>
          </li>
          <li className={styles.stats_items}>
            <span className={styles.stats_info}>Views</span>
            <span className={styles.stats_quantity}>{views}</span>
          </li>
          <li className={styles.stats_items}>
            <span className={styles.stats_info}>Likes</span>
            <span className={styles.stats_quantity}>{likes}</span>
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