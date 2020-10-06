import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Balance from './components/Balance.js'
import IncomeExpenses from './components/IncomeExpenses.js'
import TransactionList from './components/TransactionList.js'
import AddTransaction from './components/AddTransaction.js'
import Container from '@material-ui/core/Container';
import GlobalProvider from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Container maxWidth="sm">
        <div className='container'>
          <Header />
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </Container>
    </GlobalProvider>
  );
}

export default App;
