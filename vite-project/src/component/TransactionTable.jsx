import React from 'react';
import TransactionItem from './TransactionItem';

function TransactionTable(props) {
  const { transactions, setTransactions } = props;

  

  const transactionItem = transactions.map((transaction) => {
    return <TransactionItem transaction={transaction} transactions={transactions} setTransactions={setTransactions} />
  }
    )



  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
       {transactionItem}
      </tbody>
    </table>
  );
}

export default TransactionTable;
