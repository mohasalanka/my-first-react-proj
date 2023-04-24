import { useState } from 'react';
import { TransactionTable, TransactionForm, SearchBar } from './components';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearchChange = (searchTerm) => {
    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setTransactions(filteredTransactions);
  };

  return (
    <div>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar onSearchChange={handleSearchChange} />
      <TransactionTable transactions={transactions} />
      <MyComponent />
    </div>
  );
}

export default App;
