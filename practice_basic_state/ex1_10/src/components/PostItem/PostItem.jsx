import styles from './PostItem.module.css'
function MyPostItem({thumbnail, title, content, author}){
    return(
        <div className={styles.cardItem}>
            <img src={thumbnail} className={styles.cardImg} />
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardContent}>{content}</p>
            <p className={styles.cardAuthor}>{author}</p>
            <button className={styles.cardBtn}>Read more</button>
        </div>
    );
}
export default MyPostItem;

