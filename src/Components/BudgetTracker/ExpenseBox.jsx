import React, { useState } from "react";
import useBudget from "../../context/budgetContext";

const ExpenseBox = ({ item }) => {
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [amount, setAmount] = useState(item.amount);
  const { editExpense, deleteExpense, totalBalance } = useBudget();

  const handleEditToggle = () => {
    if (editable) {
      // Validation for title and amount
      if (!title.trim()) {
        return alert("Title cannot be empty.");
      }
      if (isNaN(amount) || amount <= 0) {
        return alert("Amount must be a positive number.");
      }

      // Check if the new amount exceeds the available balance
      const newBalance = totalBalance + item.amount - amount;
      if (newBalance < 0) {
        return alert("Edited amount exceeds available balance.");
      }

      editExpense(item.id, {
        ...item,
        title: title.trim(),
        amount: parseInt(amount),
      });
    }
    setEditable(!editable);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      deleteExpense(item.id);
    }
  };

  return (
    <div className="flex items-center gap-x-3 bg-[#27275f] rounded-lg px-3 py-1.5 text-white">
      {/* Title Input */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={!editable}
        className={`border py-1 capitalize outline-none bg-transparent w-full font-medium ${editable ? "border-white/30 rounded-md px-2" : "border-transparent"}`}
      />

      {/* Amount Input */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        readOnly={!editable}
        className={`border py-1 outline-none bg-transparent w-full font-medium ${editable ? "border-white/30 rounded-md px-2" : "border-transparent"}`}
      />

      {/* Edit-Save Button */}
      <i
        onClick={handleEditToggle}
        className={`cursor-pointer text-lg ${editable ? "ri-save-line" : "ri-edit-box-line"}`}
      ></i>

      {/* Delete Button */}
      <i
        onClick={handleDelete}
        className="text-lg ri-delete-back-line cursor-pointer"
      ></i>
    </div>
  );
};

export default ExpenseBox;
