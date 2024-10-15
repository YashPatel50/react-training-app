import React from "react";
import { useForm } from "react-hook-form";
import { categories } from "../../App2";

type Expense = {
  description: string;
  amount: number;
  category: "Groceries" | "Utilities" | "Entertainment";
};
const ExpenseList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Expense>();

  const onSubmit = (data: Expense) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3"></div>
      <label htmlFor="name" className="form-label">
        Description
      </label>
      <input
        id="description"
        type="text"
        className="form-control"
        {...register("description")}
      ></input>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount")}
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select">
          <option value="">Select One</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default ExpenseList;
