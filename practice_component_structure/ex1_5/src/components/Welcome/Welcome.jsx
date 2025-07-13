// 1. Create a Welcome Component Create a component called Welcome.
// Display the text: "Welcome to React!".
// Style the text using a CSS Module.

import styles from './Welcome.module.css'; 

function Welcome() {
  return (
    <h1 className={styles.welStyle}>Welcome to React!</h1>
  );
}

export default Welcome;