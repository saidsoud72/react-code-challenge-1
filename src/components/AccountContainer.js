import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({handleSearch,transactions, handleNewTransaction, handleDeleteTransaction}) {
  
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm handleNewTransaction={handleNewTransaction} transactions={transactions} />
      <TransactionsList transactions={transactions} handleDeleteTransaction={handleDeleteTransaction} />
    </div>
  );
}

export default AccountContainer;