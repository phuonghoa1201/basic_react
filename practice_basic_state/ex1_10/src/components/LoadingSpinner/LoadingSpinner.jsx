import styles from './LoadingSpinner.module.css';
function LoadingSpinner(){
    return (
        <div className={styles.completedLoad}>
        <div className={styles.spinner}></div>
        <h3 className={styles.text}>Loading data...</h3>
        </div>

    );
}
export default LoadingSpinner;