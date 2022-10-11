import React from "react";
import AccountContainer from "./AccountContainer";

function App() {

  const [transactions, setTransactions] = React.useState([]);

	React.useEffect(() => {fetchTransactions();
  }, []);

	const fetchTransactions = async () => {
			const res = await fetch("http://localhost:8001/transactions");
			const response = await res.json();
			setTransactions(response);
		
	};
	const handleNewTransaction = (transaction) => {
		setTransactions([...transactions, transaction]);
	};

  const handleSearch = (searchItem) => {
		if (searchItem) {
			const filteredTransactions = transactions.filter((transaction) => {
				if (transaction.description.toLowerCase().includes(searchItem.toLowerCase())) {
					return true;
				} else {
					return false;
				}
			});
			setTransactions(filteredTransactions);
		} else {
			fetchTransactions();
		}
	};

	const handleDeleteTransaction = (transactionId) => {
		const filterTransactions = transactions.filter(
			(transaction) => transaction.id !== transactionId
		);

		setTransactions(filterTransactions);
	};


  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer handleNewTransaction={handleNewTransaction} transactions={transactions} handleSearch={handleSearch}
				handleDeleteTransaction={handleDeleteTransaction}/>
    </div>
  );
}

export default App;