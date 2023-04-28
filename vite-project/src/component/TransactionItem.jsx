import React from 'react'

const TransactionItem = ({transaction, transactions, setTransactions}) => {

    const handleDelete = () => {
        fetch(`http://localhost:3000/transactions/${transaction.id}`,{
          method: 'DELETE',
          headers: {
              'Content-Type':'application/json'
            },
        }) 
        .then(response => response.json())
        .then(data => {
            let remainingTransactions = transactions.filter(transansactionItem =>transansactionItem.id !== transaction.id)
            setTransactions(remainingTransactions)
        })
    
      };

  return (
    <tr key={transaction.id}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <button onClick={handleDelete} >Delete</button>
    </tr>
  )
}

export default TransactionItem
