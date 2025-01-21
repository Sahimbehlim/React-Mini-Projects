import { createContext, useContext } from "react";

const budgetContext = createContext({
  expenseList: [],
  totalBalance: 0,
  addExpense: () => {},
  deleteExpense: (id) => {},
  editExpense: (id, updatedItem) => {},
});

export const BudgetProvider = budgetContext.Provider;

export default function useBudget() {
  return useContext(budgetContext);
}
