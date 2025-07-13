import styles from './PostItem.module.css';
import { useState } from 'react';

function PostItem({ thumbnail, title, content, author }) {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(prev => !prev);
  };

  return (
    <div className={styles.cardItem}>
      <img src={thumbnail} className={styles.cardImg} />
      <h3 className={styles.cardTitle}>{title}</h3>
      {showContent && (
        <div>
          <p className={styles.cardContent}>{content}</p>
          <p className={styles.cardAuthor}>{author}</p>
        </div>
      )}
      <button className={styles.cardBtn} onClick={toggleContent}>
        {showContent ? "Hide Details" : "View Details"}
      </button>
    </div>
  );
}

export default PostItem;
