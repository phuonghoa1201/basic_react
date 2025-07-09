import styles from './StaticArticle.module.css';

function StaticArticle() {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>If you have problems ?</h2>
      <img
        src="https://placehold.co/600x300"
        alt="Contact"
        className={styles.image}
      />
      <p className={styles.paragraph}>
        If you have any questions, contact us at +826255232.
      </p>
    </article>
  );
}

export default StaticArticle;
