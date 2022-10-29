import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Expenses on</h2>
      <span>Oct 29</span>
    </header>
  );
};

export default Header;
