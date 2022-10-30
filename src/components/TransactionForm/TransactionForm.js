import { useState } from "react";
import Category from "./Category/Ctaegory";
import styles from "./TransactionForm.module.css";

const TransactionForm = ({ isShow }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCHange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <form className={`${isShow ? "" : "hidden"}`}>
      <Inputs />
      <Category selectedOption={selectedOption} handleCHange={handleCHange} />
      <RadioBtns />
      <button className={styles.btn}>Add Transaction</button>
    </form>
  );
};

export default TransactionForm;

// _________________________________________________________________________________________________

const Inputs = () => {
  return (
    <div className={styles.inputWrapper}>
      <label>Description : </label>
      <input type="text" />
      <label>Amount : </label>
      <input type="number" />
    </div>
  );
};

const RadioBtns = () => {
  return (
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
  );
};
