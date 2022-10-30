import { useState } from "react";
import Category from "./Category/Ctaegory";
import styles from "./TransactionForm.module.css";

const TransactionForm = ({ isShow }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formValues, setFormValues] = useState({
    type: "",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
      category: selectedOption,
    });
  };

  return (
    <form className={`${isShow ? "" : "hidden"}`}>
      <Inputs formValues={formValues} changeHandler={changeHandler} />
      <Category
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <RadioBtns formValues={formValues} changeHandler={changeHandler} />
      <button className={styles.btn}>Add Transaction</button>
    </form>
  );
};

export default TransactionForm;

// _________________________________________________________________________________________________

const Inputs = ({ formValues, changeHandler }) => {
  return (
    <div className={styles.inputWrapper}>
      <label>Description : </label>
      <input
        name="desc"
        value={formValues.desc}
        type="text"
        onChange={changeHandler}
      />
      <label>Amount : </label>
      <input
        name="amount"
        value={formValues.amount}
        type="number"
        onChange={changeHandler}
      />
    </div>
  );
};

const RadioBtns = ({ formValues, changeHandler }) => {
  return (
    <div className={styles.radioWrapper}>
      <div className={styles.radio}>
        <input
          id="income"
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "income"}
        />
        <label htmlFor="income">Income</label>
      </div>
      <div className={styles.radio}>
        <input
          id="expense"
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
        />
        <label htmlFor="expense">Expense</label>
      </div>
    </div>
  );
};
