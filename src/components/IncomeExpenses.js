import React from 'react'
import Grid from '@material-ui/core/Grid';


const IncomeExpenses = () => {
  return (
    <Grid container
      direction="row"
      justify="space-between"
      alignItems="center">
      <Grid>
        <h4>Income</h4>
        <p id="money-plus" className='moneyPlus'>+$0.00</p>
      </Grid>

      <Grid>
        <h4>Expense</h4>
        <p id="money-minus" className='moneyMinus'>-$0.00</p>
      </Grid>
    </Grid >
  )
}

export default IncomeExpenses;
