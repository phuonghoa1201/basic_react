import styles from '../Gallery.module.css';

function Title({ text }) {
  return <h2 className={styles.title}>{text}</h2>;
}
export default Title;
