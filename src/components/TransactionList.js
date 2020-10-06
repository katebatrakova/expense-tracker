import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalState'
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const TransactionList = () => {



  const { transactions } = useContext(GlobalContext)

  return (
    <>
      <h3> History</h3>
      <Divider />

      <ul id='list' className='list'></ul>
      {/* //will be replaced with a Transaction component */}
      {transactions.map(transaction => (

        <Paper variant="outlined" className='transactionPaper' >
          <Typography variant="caption">
            Cash <span>-$400</span>
          </Typography>
          <Button
            variant="contained"
            color="secondary"
          >
            X
</Button></Paper>

      ))}



    </>
  )
}

export default TransactionList;
