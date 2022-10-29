import { useState } from "react";
import TransactionForm from "../TransactionForm/TransactionForm";
import styles from "./OverView.module.css";

const OverView = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div>Image</div>
        <div className={styles.textWrapper}>
          <span>$0</span>
          <span>$0</span>
        </div>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      <TransactionForm isShow={isShow}/>
    </section>
  );
};

export default OverView;
