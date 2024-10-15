import { useState } from "react";
import ExpenseForm from "./Components/ExpenseTracker/ExpenseForm";
import ExpenseList from "./Components/ExpenseTracker/ExpenseList";
import ExpenseFilter from "./Components/ExpenseTracker/ExpenseFilter";
import categories from "./categories";

function App2() {
  //Table to hold all expenses
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    { id: 2, description: "Eggs", amount: 10, category: "Groceries" },
    { id: 3, description: "Electricity", amount: 100, category: "Utilities" },
    { id: 4, description: "Movies", amount: 15, category: "Entertainment" },
    { id: 5, description: "Milk", amount: 5, category: "Groceries" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  //Function to delete an element from all expenses
  const onDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id != id));
  };

  //Function to Filter on selected category
  const onSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => onSelectCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => onDelete(id)}
      ></ExpenseList>
    </>
  );
}

export default App2;
