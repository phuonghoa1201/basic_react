import StaticCard from '../StaticCard/StaticCard';
import styles from './CardGrid.module.css';

function CardGrid() {
  return (
    <div className={styles.gridContainer}>
      {Array.from({ length: 4 }).map((_, idx) => (
        <StaticCard key={idx} />
      ))}
    </div>
  );
}

export default CardGrid;
