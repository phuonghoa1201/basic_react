import styles from './FeatureList.module.css'
function FeatureList(){
    return(
        <ul className={styles.list}>
            <li className={styles.item}>Fast and convinient</li>
            <li className={styles.item}>Cheap and Friendly</li>
            <li className={styles.item}>Have a nice day</li>
        </ul>
    );
}
export default FeatureList;
