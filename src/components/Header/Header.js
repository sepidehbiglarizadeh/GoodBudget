import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Expenses on</h2>
      <span>{new Date().toLocaleDateString('en-us', {month:"short", day:"numeric"})}</span>
    </header>
  );
};

export default Header;
