import PropTypes from 'prop-types';
import styles from './user.module.scss';



 const User = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{username}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.item}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{views}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    )
};

User.defaultProps = {
    stats: []
}
User.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,

};

export default User;