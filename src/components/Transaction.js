import React from "react";

function Transaction({
	transaction: { id, date, description, category, amount},
	deleteTransaction,
}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td> <button style={{color:'red'}} onClick={() => deleteTransaction(id)}>DELETE!</button> </td>
    </tr>
  );
}

export default Transaction;