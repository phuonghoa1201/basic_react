import styles from './BookItem.module.css';
import { BookOutlined, UserOutlined, CalendarOutlined } from '@ant-design/icons';

function BookItem({title, author, year}){
    return(
        <div className={styles.cardItem}>
            <h3 className={styles.cardTitle}><BookOutlined style={{color:"blue"}} />&nbsp; { title}</h3>
            <p className={styles.cardAuthor}><UserOutlined />&nbsp;{ author}</p>
            <p className={styles.cardYear}><CalendarOutlined/>&nbsp;{ year}</p>
        </div>
    );
    
}
export default BookItem;