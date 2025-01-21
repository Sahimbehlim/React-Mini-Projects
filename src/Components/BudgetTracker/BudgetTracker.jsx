import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import ExpenseBox from "./ExpenseBox";
import { BudgetProvider } from "../../context/budgetContext";

const BudgetTracker = () => {
  const [expenseList, setExpenseList] = useState([]);
  const [budget, setBudget] = useState("");
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const addBudget = () => {
    if (isNaN(budget) || budget <= 0)
      return alert("Enter a valid positive budget value");
    setTotalBudget((prev) => parseInt(prev) + parseInt(budget));
    setBudget("");
  };

  const addExpense = () => {
    if (!expenseTitle) return alert("Enter expense title");
    if (isNaN(expenseAmount) || expenseAmount <= 0)
      return alert("Enter a valid positive expense amount");
    if (totalBalance < expenseAmount) return alert("Not enough balance!");

    setExpenseList((prev) => [
      { id: Date.now(), title: expenseTitle, amount: parseInt(expenseAmount) },
      ...prev,
    ]);

    setExpenseTitle("");
    setExpenseAmount("");
  };

  const editExpense = (id, updatedItem) => {
    setExpenseList((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const deleteExpense = (id) => {
    setExpenseList((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setTotalBalance(totalBudget - totalExpense);
  }, [totalBudget, totalExpense]);

  useEffect(() => {
    const totalExp = expenseList.reduce(
      (total, list) => total + parseInt(list.amount),
      0
    );
    setTotalExpense(totalExp);
  }, [expenseList]);

  return (
    <BudgetProvider
      value={{
        expenseList,
        addExpense,
        editExpense,
        deleteExpense,
        totalBalance,
      }}
    >
      <section className="bg-budget-gradient min-h-screen w-full flex flex-col items-center py-6">
        <Link to="/" className="mb-4">
          <i className="ri-home-7-fill text-3xl text-white"></i>
        </Link>
        <main className="flex flex-col gap-6 w-full max-w-7xl px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Add Budget Section */}
            <div className="bg-white rounded-lg flex flex-col gap-y-2 p-4">
              <label className="font-semibold">Add Budget</label>
              <div className="flex rounded-lg overflow-hidden">
                <Input
                  type="number"
                  className="w-full"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
                <button
                  onClick={addBudget}
                  type="button"
                  className="bg-[#181647] text-white px-4 font-medium hover:bg-[#27275f] transition-all duration-300 ease-in-out"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Add Expense Section */}
            <div className="flex flex-col md:flex-row md:flex-1 md:gap-x-4 md:items-end gap-y-2 p-4 rounded-lg bg-white">
              {[
                {
                  label: "Expense Title",
                  value: expenseTitle,
                  onChange: setExpenseTitle,
                },
                {
                  label: "Expense Amount",
                  value: expenseAmount,
                  onChange: setExpenseAmount,
                },
              ].map((field, index) => (
                <div key={index} className="flex md:flex-1 flex-col gap-y-2">
                  <label className="font-semibold">{field.label}</label>
                  <Input
                    type={index === 1 ? "number" : "text"}
                    className="rounded-lg"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </div>
              ))}
              <button
                onClick={addExpense}
                type="button"
                className="bg-[#181647] text-white px-4 py-2 rounded-lg font-medium mt-2 hover:bg-[#27275f] transition-all duration-300 ease-in-out"
              >
                Add
              </button>
            </div>
          </div>

          {/* Budget Info Section */}
          <div className="bg-white p-4 rounded-lg flex flex-col gap-y-5 w-full md:max-h-[calc(80vh_-_96px)]">
            <h2 className="font-semibold text-2xl text-center">Budget Info</h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {[
                { title: "Budget", amount: totalBudget },
                { title: "Expenses", amount: totalExpense },
                { title: "Balance", amount: totalBalance },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-1 flex-col font-medium text-lg bg-white border-2 rounded-md overflow-hidden gap-y-2"
                >
                  <h3 className="px-4 py-2 bg-gray-200">{item.title}</h3>
                  <p className="text-lg px-4 pb-2">{item.amount.toFixed(2)}</p>
                </div>
              ))}
            </div>

            {/* Expense List Section */}
            <div className="flex flex-col gap-y-3 md:overflow-y-auto scroll-smooth scrollbar-none">
              {expenseList.map((item) => (
                <ExpenseBox key={item.id} item={item} />
              ))}
            </div>
          </div>
        </main>
      </section>
    </BudgetProvider>
  );
};

export default BudgetTracker;
