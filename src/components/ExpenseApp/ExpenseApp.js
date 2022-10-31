import { useState } from "react";
import Header from "../Header/Header";
import OverView from "../OverView/OverView";

const ExpenseApp = () => {
  const [transaction, setTransaction] = useState([]);

  const addTransaction = (formValues) => {
    setTransaction([...transaction, { ...formValues, id: Date.now }]);
  };

  return (
    <>
      <Header />
      <OverView addTransaction={addTransaction} />
    </>
  );
};

export default ExpenseApp;
