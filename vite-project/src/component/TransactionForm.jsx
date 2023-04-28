import React, { useState } from 'react';

function TransactionForm({  transactions, setTransactions }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = {
      description: description,
      category: category,
      amount: amount,
      date: date
    };
    const response = await fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    .then(response => response.json())
    .then(data => {
      setTransactions([...transactions,data])
      setDescription('');
      setCategory('');
      setAmount('');
      setDate('');
    })
    const data = await response.json();
    // addTransaction(data);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
