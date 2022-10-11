import React from "react";

import {useState} from "react"

function AddTransactionForm({handleNewTransaction}) {
  const [formData,setFormData]=useState({
    date:"",
    amount: 0,
    category:"",
    description: "",
  })

  const handleSaveTransaction = async (e) => {
		e.preventDefault();
		console.log(formData);
			const res = await fetch("http://localhost:8001/transactions", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					date: formData.date,
					description: formData.description,
					category: formData.category,
					amount: formData.amount,
				}),
			});
			const response = await res.json();
			handleNewTransaction(response);
			setFormData({
				date: "",
				description: "",
				category: "",
				amount: "",
			});
	};

  function handleChange(e){
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  return (
    <div className="ui segment">
      <form onSubmit={handleSaveTransaction} onChange={handleChange} className="ui form">
        <div className="inline fields">
          <input value={formData.date} type="date" name="date"/>
          <input value={formData.description} type="text" name="description" placeholder="Description" />
          <input value={formData.category} type="text" name="category" placeholder="Category" />
          <input value={formData.amount} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;