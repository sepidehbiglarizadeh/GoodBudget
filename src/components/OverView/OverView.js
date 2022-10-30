import { useState } from "react";
import TransactionForm from "../TransactionForm/TransactionForm";
import styles from "./OverView.module.css";
import logo from "../../assets/images/avocado.png";
import { FaPlus, FaTimes } from "react-icons/fa";

const OverView = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.textWrapper}>
          <span>$0</span>
          <span>$0</span>
        </div>
        <button className={styles.addBtn} onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? <FaTimes /> : <FaPlus />}
        </button>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <TransactionForm isShow={isShow} />
    </section>
  );
};

export default OverView;
