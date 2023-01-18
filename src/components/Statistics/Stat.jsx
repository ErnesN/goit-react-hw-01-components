import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';
import styles from './stat.module.scss';


const Stat = ({ title, items }) => {
  const elements = items.map(item => <ListItem key={item.id} {...item} />);
    return (
        <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.list}>
     {elements}
   </ul> 
</section>
    )
}



export default Stat;
Stat.defaultProps = {
  items: []
}


Stat.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
    
}