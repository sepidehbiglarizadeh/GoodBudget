import { useEffect, useState } from "react";
import styles from "./Transactions.module.css";

const Transactions = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filterdItems, setFilteredItems] = useState(transactions);

  const filteredTransactions = (search) => {
    if (!search || search === "") {
      setFilteredItems(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filteredTransactions(e.target.value);
  };

  useEffect(() => {
    filteredTransactions(searchItem);
  }, [transactions]);

  if (!transactions.length)
    return (
      <section className={styles.transactionsWrapper}>
        <h3>There is no transaction !!</h3>
      </section>
    );

  return (
    <section className={styles.transactionsWrapper}>
      <input
        type="text"
        placeholder="Search For Transactions..."
        className={styles.searchInput}
        onChange={changeHandler}
        value={searchItem}
      />
      {filterdItems.length
        ? filterdItems.map((t) => {
            return (
              <div className={styles.transaction} key={t.id}>
                <div className={`${styles.flex} ${styles.transactionDesc}`}>
                  <p>{t.desc}</p>
                  <span
                    style={{
                      color: t.type === "income" ? "#064e3b" : "#be123c",
                    }}
                  >
                    ${t.amount}
                  </span>
                </div>
                <div className={`${styles.flex} ${styles.transactionDetail}`}>
                  <span className={styles.category}>{t.category}</span>
                  <span>{t.createdAt}</span>
                </div>
              </div>
            );
          })
        : "No Item Matchs !"}
    </section>
  );
};

export default Transactions;
