import React, { useState, useEffect } from 'react';
import MyComponent from './MyComponent';
import './App.css';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';
import SearchBar from './SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error(error));
  }, []);


  const handleSearchChange = (searchTerm) => {
    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setTransactions(filteredTransactions);
  };

  return (
    <div>
      <TransactionForm transactions={transactions} setTransactions={setTransactions} />
      <SearchBar onSearchChange={handleSearchChange} />
      <TransactionTable transactions={transactions} setTransactions={setTransactions} />
      <MyComponent />
    </div>
  )
}

export default App;
