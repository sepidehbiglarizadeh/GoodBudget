import { useEffect, useState } from "react";
import Header from "../Header/Header";
import OverView from "../OverView/OverView";

const ExpenseApp = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    setTransactions([
      ...transactions,
      {
        ...formValues,
        id: Date.now(),
        createdAt: new Date().toLocaleDateString(),
      },
    ]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <>
      <Header />
      <OverView addTransaction={addTransaction} income={income} expense={expense}/>
    </>
  );
};

export default ExpenseApp;
