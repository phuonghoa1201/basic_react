import styles from '../Gallery.module.css';
function ImageItem(){
    return(
        <img src="https://placehold.co/50x50" alt="ImageItem" className={styles.imageItems}/>
    );
}
export default ImageItem;