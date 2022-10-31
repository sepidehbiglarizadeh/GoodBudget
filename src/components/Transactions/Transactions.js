import styles from "./Transactions.module.css";

const Transactions = ({ transactions}) => {
  return (
    <section className={styles.transactionsWrapper}>
      {transactions.map((t) => {
        return (
          <div className={styles.transaction}>
            <div className={`${styles.flex} ${styles.transactionDesc}`}>
              <p>{t.desc}</p>
              <span style={{color: t.type === "income" ? "#064e3b" : "#be123c"}}>${t.amount}</span>
            </div>
            <div className={`${styles.flex} ${styles.transactionDetail}`}>
              <span className={styles.category}>{t.category}</span>
              <span >{t.createdAt}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Transactions;
