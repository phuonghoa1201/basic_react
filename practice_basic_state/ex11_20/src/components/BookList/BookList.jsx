import BookItem from "../BookItem/BookItem.jsx";
import styles from './BookList.module.css'

function BookList({books}){
    return(
        <div className={styles.bookList}>
            {books.map(book => (
                <BookItem key={book.id}
                title={book.title}
                author={book.author}
                year={book.year}
                
                />
            ))}
        </div>
    );

}
export default BookList;