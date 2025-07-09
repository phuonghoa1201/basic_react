import styles from './ProfileCard.module.css';

function ProfileCard() {
  return (
    <div className={styles.card}>
      <img
        className={styles.avatar} src="https://i.pravatar.cc/100" alt="User Avatar"
      />
      <h3 className={styles.name}>Nguyễn Văn A</h3>
      <p className={styles.title}>Frontend Developer</p>
      <button className={styles.button}>Follow</button>
    </div>
  );
}

export default ProfileCard;
