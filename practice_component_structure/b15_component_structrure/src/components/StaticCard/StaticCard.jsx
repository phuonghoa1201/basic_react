import styles from './StaticCard.module.css';

function StaticCard() {
  return (
    <div className={styles.card}>
      <img
        src="https://placehold.co/200x150" alt="Static example" className={styles.image}
      />
      <h3 className={styles.title}>Fixed Title</h3>
      <p className={styles.description}>
        First time learn React & Vita 
      </p>
    </div>
  );
}

export default StaticCard;