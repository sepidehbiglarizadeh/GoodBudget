import styles from "./TransactionForm.module.css";

const TransactionForm = ({isShow}) => {
  return (
    <form className={`${isShow ? "" : styles.hidden}`}>
      <div className={styles.inputWrapper}>
        <label>Description : </label>
        <input type="text" />
        <label>Amount : </label>
        <input type="number" />
      </div>
      <div className={styles.radioWrapper}>
        <div className={styles.radio}>
          <input type="radio" id="income" />
          <label htmlFor="income">Income</label>
        </div>
        <div className={styles.radio}>
          <input type="radio" id="expense" />
          <label htmlFor="expense">Expense</label>
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;
