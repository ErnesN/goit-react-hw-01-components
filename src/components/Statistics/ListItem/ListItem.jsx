import PropTypes from 'prop-types';
import styles from './list-item.module.scss';

const ListItem = ({ label, percentage }) => {
    return <li className={styles.item}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}</span>
    </li>
}

export default ListItem;

ListItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}