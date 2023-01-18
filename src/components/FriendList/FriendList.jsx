import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import styles from './friend-list.module.scss';

const FriendList = ({ friends }) => {
    const elements = friends.map(friend => <FriendListItem key={friend.id} {...friend} />);
    return (
        <ul className={styles.list}>
  {elements}
    </ul>
    )
}

export default FriendList;

FriendList.defaultProps = {
    friends: []
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    }))
}