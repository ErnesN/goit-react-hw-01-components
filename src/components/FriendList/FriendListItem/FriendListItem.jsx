import PropTypes from 'prop-types';
import styles from './friend-item.module.scss';

const FriendListItem = ({ isOnline, avatar, name: userName }) => {
    return <li className={styles.item}>
        <span className={isOnline ? `{styles.online}` : `{styles.offline}`}></span>
  <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{userName}</p>
</li>
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}